const express = require ('express');
const logger = require('morgan');
const bodyParser = require('body-parser');

const app = express();

app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

require('./routes/contato.routes')(app);
require('./routes/grupo.routes')(app);

app.listen(3000);