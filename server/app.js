const express = require('express');
const mongoose = require('mongoose');

require('dotenv').config();

const app = express();
const port = process.env.PORT || 5000;

const uri = process.env.ATLAS_URI;

mongoose.connect(uri, { useNewUrlParser: true });
const { connection } = mongoose;
connection.once('open', () => {
  console.log('MongoDB database connection established successfully');
});

const indexRouter = require('./routes/index');
const noteRouter = require('./routes/note')

app.use('/', indexRouter);
app.use('/note', noteRouter);

app.listen(port, () => {
  console.log(`running on port ${port}`)
});