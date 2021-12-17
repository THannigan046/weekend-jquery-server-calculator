const express = require('express')

const app = express();

app.use(express.static('server/public'));

const bodyParser = require('body-parser')
app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json())

const port = 5000;
app.listen(port, () => {
    console.log('I/m listening');
});