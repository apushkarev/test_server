const express = require('express');
const app = express();
const fs = require('fs');
const path = require('path');

app.use(express.json());
app.use(express.static(path.resolve(__dirname, 'public')));

console.log(path.resolve(__dirname, 'public', 'index.html'));

app.get('/', (req, res) => {
  // res.sendFile(`${__dirname}/public/index.html`);
  res.sendFile(path.resolve(__dirname, 'public', 'index.html'))
});

app.post('/api/saveFile', (req, res) => {
  const data = {...req.body, marked: false};
  console.log(data);
  res.status(202).send({message: 'Accepted'});
});

app.listen(80, () => console.log('listening at 80'));
