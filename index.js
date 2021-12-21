const express = require('express')
const app = express()
const port = 8000
const quotes = require('./data/quotes.json')

/* GET ENDPOINTS */
app.get('/', (req, res) => {
    res.send('kimi.rest API')
})

app.get('/random', (req, res) => {
    res.send(selectRandomQuote())
})

/* PORT */
app.listen(
    port,
    () => console.log(`Live at http://localhost:${port}`)
)

/* FUNCTIONS */
function selectRandomQuote() {
    const quote = quotes[Math.floor(Math.random() * quotes.length)];
    return JSON.stringify(quote);
}
