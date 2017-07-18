const mongoose = require('./mongoose');
const Schema = mongoose.Schema;

const answerSchema = new Schema({
	video_link: { type: String, required: true },
	transcript: { type: String, required: true },
	created_at: { type: Date, default: Date.now },
	_question: { type: Schema.Types.ObjectId, ref: 'Question' }
});

const Answer = mongoose.model('Answer', answerSchema);

module.exports = Answer;