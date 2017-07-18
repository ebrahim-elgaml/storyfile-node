const question = require('../controller/question.js')
const answer = require('../controller/answer.js')

module.exports =  app => {
  app.get('/', (req, res) => res.json({ message: 'Welcom to story file' }));
  app.post('/question', question.create);
  app.get('/question', question.index);
  app.get('/answer', answer.index);
  app.post('/answer', answer.create);
};