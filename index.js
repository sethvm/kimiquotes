const express = require('express')
const app = express()
const path = require('path')
const helmet = require('helmet')
const compression = require('compression')
const PORT = process.env.PORT || 8000

const lib = require('./src/lib.js')
const quotes = require('./src/quotes.json')

/* MIDDLEWARE */
app.use(helmet())
app.use(compression())
app.use(express.static('src'))

/* GET ENDPOINTS */
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, './index.html'));
})

app.get('/quote', (req, res) => {
    res.send(lib.displaySampleQuote(quotes));
})

app.get('/quote/random', (req,res) => {
    res.send(lib.randomQuote(quotes));
})

app.get('/quote/index/:index', (req, res) => {
    const { index } = req.params;
    res.send(lib.selectQuoteByIndex(quotes, index));
})

app.get('/quotes/year/:year', (req, res) => {
    const { year } = req.params;
    res.send(lib.selectQuotesByYear(quotes, year));
})

app.get('/quotes/all', (req, res) => {
    res.send(lib.allQuotes(quotes));
})

app.get('/quotes/total', (req, res) => {
    res.send(`The kimi.rest database currently contains ${lib.numberOfQuotes(quotes)} quotes!`);
})

/* JSON FORMAT */
app.set('json spaces', 4)

/* PORT */
app.listen(
    PORT,
    () => console.log(`Live at port ${PORT}`)
)
