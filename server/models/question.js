const mongoose = require('./mongoose');
const Schema = mongoose.Schema;
const Answer = require('./answer');

const questionSchema = new Schema({
	audio_link: {type: String, required: true},
	transcript: { type: String, required: true },
	created_at: { type: Date, default: Date.now },
	answers: [{ type: Schema.Types.ObjectId, ref: 'Answer' }]
});

const Question = mongoose.model('Question', questionSchema);

module.exports = Question;