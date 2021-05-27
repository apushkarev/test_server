const express = require('express');
const app = express();

app.listen(33333, () => console.log('listening at 33333'));
app.use(express.static('public'));

// app.get('/', (req, res) => {
//     res.send({ message: 'Hello WWW!' });
// });