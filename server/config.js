const config = {
	query_endpoint: 'query',
	train_endpoint: 'train',
}
config.ai_server = `${process.env.ai_server}:5555`;

module.exports = config;
