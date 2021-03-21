const express = require("express");
const { getRecords } = require('./controllers/record-controller');
const { validator } = require('./helpers/validators/record-model-validator');

const app = express();
const cors = require('cors');

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

require('./database/mongodb-init')();
app.post('/records', validator, getRecords)

module.exports = app;