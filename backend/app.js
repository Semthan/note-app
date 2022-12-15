const express = require('express');
const mongoose = require('mongoose');
const path = require('path');
const cors = require('cors');

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

if (process.env.NODE_ENV === 'production') {
  app.use(express.static(path.join(__dirname, '../frontend/build')));

  app.get('*', (req, res) =>
    res.sendFile(
      path.resolve(__dirname, '../', 'frontend', 'build', 'index.html')
    )
  );
} else {
  app.get('/', (req, res) => res.send('Please set to production'));
}

app.use(
  cors({
    origin: ['https://note-app-frontend.onrender.com', 'http://localhost:3000', 'http://localhost:3001'],
    credentials: true,
  }),
);

app.listen(port, () => {
  console.log(`running on port ${port}`);
});