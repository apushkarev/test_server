const express = require('express');
const app = express();

app.listen(80, () => console.log('listening at 80'));
app.use(express.static('public'));

// console.log(process.argv);

app.get('/', (req, res) => {
    res.send({ message: 'Hello WWW!' });
});