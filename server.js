require('dotenv').config();
const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const http = require('http');
const path = require('path');
var engine = require('consolidate');


const dbConfig = require('./config/database.config');
const routes = require('./routes/base.route');

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));
app.use(cors());

app.set('views', __dirname + '/views');
app.engine('html', engine.mustache);
app.set('view engine', 'html');


console.log(routes);

app.use('/api', routes);

mongoose.connect(dbConfig.url, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
}).then(() => {
  console.log("Successfully connected to the database");
}).catch(err => {
  console.log('Could not connect to the database. Exiting now...', err);
  process.exit();
});

// Basic Configuration
const port = process.env.PORT || '3001';
app.set('port', port);

const server = http.createServer(app);


// app.use('/public', express.static(`${process.cwd()}/public`));

// app.get('/', function(req, res) {
//   res.sendFile(process.cwd() + '/views/index.html');
// });

// // Your first API endpoint
// app.get('/api/hello', function(req, res) {
//   res.json({ greeting: 'hello API' });
// });

// // shorturl endpoint
// app.post('/api/shorturl', function(req, res) {
//   res.json({ greeting: 'hello API' });
// });

server.listen(port, function () {
  console.info(`Server is up and running on port ${port}`)
});