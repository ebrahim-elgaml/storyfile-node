const cron = require('node-cron');
const Answer = require('../models/answer');
const moment = require('moment');
const config = require('../config');
const Client = require('node-rest-client').Client;
const client = new Client();

cron.schedule('* * * 1 * *', () => {
	console.log("start")
	Answer.find({
					created_at: { $gt: moment().subtract(1,'days')}
				})
		  		.populate('_question', 'transcript')
		  		.exec( (err, answers) => {
					if(!err) {
						const args = {
						    data: formatBody(answers),
						    headers: { "Content-Type": "application/json" }
						};
						client.post(`http://${config.ai_server}/${config.train_endpoint}`, args, (data, response) => {
							if(response.statusCode != 200) {
								console.log(`Error while retraining at ${moment().format()}`);
								//TODO report
							}
							console.log(`Retrain successfully at ${moment().format()}`);
						});
					} else {
						//TODO report the error
					}
				})
});

const formatBody = answers => answers.map( a => extractTranscript(a))

const extractTranscript = answer => {
	return {
		transcription: answer.transcript,
		question: answer._question.transcript
	}
}