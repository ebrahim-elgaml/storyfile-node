const SpeechToTextV1 = require('watson-developer-cloud/speech-to-text/v1');
const fs = require('fs');

const speech_to_text = new SpeechToTextV1({
  username: process.env.WASTON_USERNAME,
  password: process.env.WASTON_PASSWORD,
  url: process.env.WASTON_URL
});

const recognize = input => {
	return new Promise((resolve, reject) => {
		var params = {
		  audio: fs.createReadStream(input),
		  content_type: 'audio/flac',
		  continuous: 'true'
		};
		speech_to_text.recognize(params, (err, res) => {
			if (err) return reject(err);
			resolve(res.results.map( e => e.alternatives).map( e => filterResultsByConfidence(e)).map(e => e.transcript).join('\n'))
		});
	});
}

const filterResultsByConfidence = array => array.reduce((a, b) => Math.max(a.confidence, b.confidence));

module.exports = {
	recognize
}