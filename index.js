const express = require('express');
require('dotenv').config();
const app = express();

app.listen(80, () => console.log('listening at 80'));
// app.use(express.static('public'));

console.log(process.env.PORT);

app.get('/', (req, res) => {
    res.send({ message: 'Hello WWW!' });
});