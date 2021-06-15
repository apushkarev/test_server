const express = require('express');
const app = express();
const fs = require('fs')

app.listen(80, () => console.log('listening at 80'));
app.use(express.static('public'));

console.log(fs);

app.get('/', (req, res) => {
    res.send({ message: 'Hello WWW!' });
});