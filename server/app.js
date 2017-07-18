const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const cors = require('cors');
const fileUpload = require('express-fileupload');
const dotenv = require('dotenv');

dotenv.load();
require('./jobs');
/* Middlewares */
app.use(bodyParser.urlencoded({ extended: true, limit: '1000mb'}));
app.use(bodyParser.json());
app.use(cors());
app.use(fileUpload({
  limits: { fileSize: '1000mb'},
}));

/* Routes */
const routes = require('./routes')(app);

/* Server Stuff */

const port = process.env.PORT || 8080;

app.listen(port, () => console.log(`API Server Listening on Port ${port}`));