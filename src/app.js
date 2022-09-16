const express = require('express');
const bodyParser = require('body-parser');
const app = express();
console.log(__dirname);

app.use(express.static(__dirname))
app.engine('html', require('ejs').renderFile);
app.use(bodyParser.json());
app.use(bodyParser.text({ type: "text/plain" }));

const routes = require('./router/routes');

app.use('/', routes);

module.exports = app;