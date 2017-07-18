const waston = require('../lib/waston');
const temp = require('temp');
const ffmpeg = require('../lib/ffmpeg');
const cloudinary = require('../lib/cloudinary');
const Question = require('../models/question');
const _ = require('lodash');
const config = require('../config');
const Client = require('node-rest-client').Client;

temp.track();
const client = new Client();

const index = (req, res) => {
	Question.find({}, (err, questions) => {
		if (err) return res.status(500).send(err);
		res.status(200).json(questions);
	});
}

const create = (req, res) => {

	temp.mkdir('audio', (err, dirPath) => {
		if(err) return res.status(500).send(err);

		let files = [];
		const filePath = `${dirPath}/${req.files.file.name}`;
		files.push(filePath);

	    req.files.file.mv(filePath, err => {
		    if (err) return handleRejection(res, files, err);

		 	ffmpeg.getAudioFile(filePath).then( audio => {
		 		files.push(audio);
		 		waston.recognize(audio).then( transcript =>  {
		 			const args = {
					    data: { question: transcript },
					    headers: { "Content-Type": "application/json" }
					};
					client.post(`http://${config.ai_server}/${config.query_endpoint}`, args, (data, response) => {
						if(!data.videoId) return handleRejection(res, files, data)
					    data.videoUrl = `https://storyfilestage.com:7070/video/${data.videoId}`;
					    handleAcceptance(res, files, transcript, {data});
					});
				}, error => handleRejection(res, files, error)
				)
		 	})

		});

	});
}

const handleRejection = (res, files, err) => {
	res.status(500).send(err);
	ffmpeg.cleanFiles(files);
}

const handleAcceptance = (res, files, transcript, body) => {
	res.status(201).json(body);
	const audio = _.last(files);
	cloudinary.upload(audio).then( uploadedAudio => {
    	const question = new Question({
								  		audio_link: uploadedAudio.url,
								  		transcript: transcript
								  	  });
    	question.save( err => {
    		if(err) console.log(err);
    		console.log(question)
		});
		ffmpeg.cleanFiles(files);
	}, error => {
		console.log(error);
		ffmpeg.cleanFiles(files);
	});

}

module.exports = {
	index,
	create
}