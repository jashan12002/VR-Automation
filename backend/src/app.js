
const express = require('express');
const cors = require('cors');
const routes = require('./routes');
require('dotenv').config();

const app = express();

app.use(cors());
app.use(express.json());

app.use('/api', routes);

require('./jobs/historyCron');




module.exports = app;
