const waston = require('../lib/waston');
const temp = require('temp');
const ffmpeg = require('../lib/ffmpeg');
const cloudinary = require('../lib/cloudinary');
const Question = require('../models/question');
const Answer = require('../models/answer');
const _ = require('lodash');

temp.track();

const index = (req, res) => {
	Answer.find({}, (err, answers) => {
		if (err) return res.status(500).send(err);
		res.status(200).json(answers);
	});
}

const create = (req, res) => {
	if(!req.files.file) return res.status(500).send("No file");
	Question.findById(req.body.q_id, (err, question) => {

		if(err) return handleRejection(res, [], err);
		temp.mkdir('video', (err, dirPath) => {
			if(err) return res.status(500).send(err);

			let files = [];
			const filePath = `${dirPath}/${req.files.file.name}`;
			files.push(filePath);

		    req.files.file.mv(filePath, err => {
			    if (err) return handleRejection(res, files, err);

			 	ffmpeg.getAudioFile(filePath).then( audio => {
			 		files.push(audio);
			 		waston.recognize(audio).then( transcript =>  {
			 			console.log(transcript);
					    handleAcceptance(res, files, transcript, question, {transcript});
					}, error => handleRejection(res, files, error)
					)
			 	})

			});

		});
	});
}

const handleRejection = (res, files, err) => {
	res.status(500).send(err);
	ffmpeg.cleanFiles(files);
}

const handleAcceptance = (res, files, transcript, question, body) => {
	res.status(201).json(body);
	const file = files[0];
	ffmpeg.compressVideo(file).then( video => {
		files.push(video);

		cloudinary.upload(video).then( uploadedFile => {
			const answer = new Answer({
								  		video_link: uploadedFile.url,
								  		transcript: transcript,
								  		_question: question._id
								  	  });
	    	answer.save( err => {
	    		if(err) console.log(err);
			});
			ffmpeg.cleanFiles(files);
		}, error => {
			console.log(error);
			ffmpeg.cleanFiles(files);
		});


	}, error => {
		console.log(error);
	})

}

module.exports = {
	create,
	index
}