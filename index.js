const express = require('express')
const app = express()
const port = 8000

const lib = require('./lib.js')
const quotes = require('./data/quotes.json')

/* GET ENDPOINTS */
app.get('/', (req, res) => {
    res.send(lib.displayRandomFormattedQuote(quotes))
})

app.get('/all', (req, res) => {
    res.send(lib.displayAllQuotes(quotes))
})

app.get('/random', (req,res) => {
    res.send(lib.selectRandomQuote(quotes))
})

app.get('/index/:index', (req, res) => {
    const { index } = req.params
    res.send(lib.selectQuoteByIndex(quotes, index))
})

app.get('/how-many', (req, res) => {
    res.send(`The kimi.rest database currently contains ${numberOfQuotes(quotes)} quotes!`)
})

/* FORMAT */
app.set('json spaces', 4);

/* PORT */
app.listen(
    port,
    () => console.log(`Live at http://localhost:${port}`)
)
