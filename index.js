const express = require('express');
const app = express();
const fs = require('fs')

app.use(express.static('public'));

app.get('/', (req, res) => {
    res.send({ message: 'Hello WWW!' });
});

app.post('/api/saveFile', (req, res) => {
  conslole.log(req);
  conslole.log({...req.body});
  res.status(202).send({message: 'Accepted'})
});

app.listen(80, () => console.log('listening at 80'));
