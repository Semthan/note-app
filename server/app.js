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

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

const indexRouter = require('./routes/index');
const noteRouter = require('./routes/note');
const userRouter = require('./routes/user');

app.use('/', indexRouter);
app.use('/note', noteRouter);
app.use('/user', userRouter);

app.listen(port, () => {
  console.log(`running on port ${port}`);
});