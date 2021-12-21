const express = require('express')
const app = express()
const port = 8000
const quotes = require('./data/quotes.json')

/* GET ENDPOINTS */
app.get('/', (req, res) => {
    res.send('GET request at /')
})

app.get('/all', (req, res) => {
    res.send(displayAllQuotes())
})

app.get('/random', (req,res) => {
    res.send(selectRandomQuote())
})

app.get('/index/:index', (req, res) => {
    const { index } = req.params;
    res.send(selectQuoteByIndex(index))
})

/* FUNCTIONS */
function displayAllQuotes() {
    return quotes;
}

function selectRandomQuote() {
    const quote = quotes[Math.floor(Math.random() * quotes.length)];
    return quote;
}

function selectQuoteByIndex(index) {
    if (!quotes[index]) return `404: no quote found`;
    const quote = quotes[index];
    return quote;
}

/* PORT */
app.listen(
    port,
    () => console.log(`Live at http://localhost:${port}`)
)
