// Application entry point
import express from 'express';
import http from 'http';
import path from 'path';
import bodyParser from 'body-parser';
import mongoose from 'mongoose';
import './config';
import routes from './server/routes';

const port = process.env.PORT || 8080;
const mongoUrl = "mongodb://localhost:27017/picture-redux-app";

var app = express();
app.server = http.createServer(app);

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

app.use(express.static(path.resolve('./public')))

app.use('/api', routes);

app.get('*', function(req, res) {
  res.sendFile(path.resolve('./public/index.html'));
});

mongoose.connect(mongoUrl);
var db = mongoose.connection;

db.on('error', (error) => {
  throw error;
});

db.once('open', () => {
  app.listen(port);
  console.log(`Server listening on port ${port}.`)
});
