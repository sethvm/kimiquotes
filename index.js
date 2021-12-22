const express = require('express')
const app = express()
const port = 8000

const lib = require('./src/lib.js')
const quotes = require('./src/quotes.json')

/* GET ENDPOINTS */
app.get('/', (req, res) => {
    res.send(lib.displaySampleQuote(quotes));
})

app.get('/all', (req, res) => {
    res.send(lib.allQuotes(quotes));
})

app.get('/random', (req,res) => {
    res.send(lib.randomQuote(quotes));
})

app.get('/index/:index', (req, res) => {
    const { index } = req.params;
    res.send(lib.selectQuoteByIndex(quotes, index));
})

app.get('/how-many', (req, res) => {
    res.send(`The kimi.rest database currently contains ${lib.numberOfQuotes(quotes)} quotes!`);
})

/* FORMAT */
app.set('json spaces', 4);

/* PORT */
app.listen(
    port,
    () => console.log(`Live at http://localhost:${port}`)
)
