const ffmpeg = require('fluent-ffmpeg');
const fs = require('fs');
const temp = require('temp');

temp.track();

const getAudioFile = file => {
	return new Promise((resolve, reject) => {
		return temp.mkdir('audioOut', (err, dirPath) => {
			if(err) resolve(err);
			const name = `${dirPath}/${genRandomId(10)}.flac`;
			const proc = new ffmpeg(file)
							.audioCodec('flac')
							.audioBitrate('128k')
						    .audioChannels(2)
							.outputOptions('-vn')
							.on('start', commandLine => console.log(`start audio conversion: ${commandLine}`))
							.on('error', err => reject(err))
							.on('progress', progress => console.log(`audio conversion Processing:  ${progress.percent}%`))
							.on('end', () => resolve(name))
							.save(name);
		});
	})
}

//compress vidoe to mp4 with fast start
const compressVideo = video => {
	return new Promise((resolve, reject) => {
		return temp.mkdir('videoOut', (err, dirPath) => {
			if(err) resolve(err);
			const name = `${dirPath}/${genRandomId(10)}.mp4`;
			const proc = new ffmpeg(video)
							.outputOptions('-pix_fmt', 'yuv420p', '-c:v', 'libx264', '-preset:v', 'slow', '-profile:v', 'baseline')
						    .outputOptions('-x264opts', 'level=3.0:ref=1', '-b:v', '700k')
						    .outputOptions('-r:v', '25/1', '-force_fps', '-movflags', '+faststart')
						    .outputOptions('-b:a', '80k')
							.on('start', commandLine => console.log(`start video compression: ${commandLine}`))
							.on('error', err => reject(err))
							.on('progress', progress => console.log(`video compression Processing:  ${progress.percent}%`))
							.on('end', () => resolve(name))
							.save(name);
		});
	})
}
const genRandomId = len => {
 	let id = ''
 	const letters = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789'
 	for (let i = 0; i < len; ++i) {
		id += letters.charAt(Math.floor(Math.random() * letters.length))
	}

	return id;
}

const cleanFiles = files => files.forEach(f => fs.unlink(f));

module.exports = {
	getAudioFile,
	cleanFiles,
	compressVideo
}