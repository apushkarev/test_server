const express = require('express');
const app = express();

app.listen(3264, () => console.log('listening at 3264'));
app.use(express.static('public'));

// app.get('/', (req, res) => {
//     res.send({ message: 'Hello WWW!' });
// });