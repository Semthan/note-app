var express = require('express');
var app = express();
var port = 3000;

app.get('/', (req, res) => {
  res.send('hello world')
});

app.listen(port, () => {
  console.log(`running on port ${port}`)
});