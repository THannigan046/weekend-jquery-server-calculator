const express = require('express')

const app = express();

const bodyParser = require('body-parser')

app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json())

app.use(express.static('server/public'));
const historyArray = [];
let id = 0 

app.get('/history', (req, res) => {
    res.send(historyArray);
})
//calculation goes here
app.post('/evaluate', (req, res) => {
    let numerator = req.body.numerator
    let denominator = req.body.denominator
    let mathButton = req.body.mathButton
    let result = 0
    switch (mathButton) {
        case '+':
        result = Number(numerator) + Number(denominator);
        break;
        case '-':
            result = Number(numerator) - Number(denominator);
            break;
        case '*':
            result = Number(numerator) * Number(denominator);
            break;
        case '/':
            result = Number(numerator) / Number(denominator);
            break;
    };
    let equalsObj = {
       numerator: numerator,
       denominator: denominator,
       mathButton: mathButton, 
       result: result, 
       id: id
    }
    id += 1;
    historyArray.push(equalsObj);
    res.send(equalsObj);
})


//port init 
const port = 5000;
app.listen(port, () => {
    console.log('I/m listening');
});