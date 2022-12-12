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

const indexRouter = require('./backend/routes/index');
const noteRouter = require('./backend/routes/note');
const userRouter = require('./backend/routes/user');

app.use('/', indexRouter);
app.use('/note', noteRouter);
app.use('/user', userRouter);

if (process.env.NODE_ENV === 'production') {
  app.use(express.static('frontend/build'));

  app.get('*', (req, res) => res.sendFile(path.resolve(__dirname, 'frontend', 'build', 'index.html')));
}

app.listen(port, () => {
  console.log(`running on port ${port}`);
});