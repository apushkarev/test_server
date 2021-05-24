const express = require('express');
const app = express();

app.listen(80, () => console.log('listening at 80'));
app.use(epxress.static('public'));