
const express = require('express');
const cors = require('cors');
const routes = require('./routes');
require('dotenv').config();

const app = express();

app.use(cors());
app.use(express.json());

app.use('/api', routes);

app.get('/', (req, res) => {
  res.send('Welcome to the Crypto Tracker API');
});

require('./jobs/historyCron');




module.exports = app;
