const express = require('express')
const compression = require('compression')
const helmet = require('helmet')
const path = require('path')
const app = express()
const PORT = process.env.PORT || 8000

const lib = require('./src/lib.js')
const quotes = require('./src/quotes.js')

// MIDDLEWARE
app.use(helmet())
app.use(
    helmet.contentSecurityPolicy({
        useDefaults: true,
        directives: {
            "img-src": [
                "'self'",
                "www.googletagmanager.com",
                "www.google-analytics.com"
            ],
            "script-src": [
                "'self'",
                "'sha256-70QIwnsv31ASNZe1TXSoyHIG8wAAoQgBdYtK4wh6qhc='",
                "www.googletagmanager.com",
                "www.google-analytics.com"
            ],
            "connect-src": [
                "'self'",
                "www.google-analytics.com"
            ],
        }
    })
)
app.use(compression())
app.use(express.static('client'))

// ROUTES
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, './client/index.html'));
})

app.get('/apidoc', (req, res) => {
    res.sendFile(path.join(__dirname, './client/apidoc.html'));
})

app.get('/quote', (req, res) => {
    const result = lib.getAnyQuote(quotes);
    res.status(200).send(result);
})

app.get('/quote/:index', (req, res) => {
    const { index } = req.params;
    const result = lib.getQuoteByIndex(quotes, index);

    if (result === 404) {
        res.status(404).send({ error: `no quote found at index ${index}`});
    } else {
        res.status(200).send(result);
    }
})

app.get('/quotes', (req, res) => {
    const result = lib.getAllQuotes(quotes);
    res.status(200).send(result);
})

app.get('/quotes/:year', (req, res) => {
    const { year } = req.params;
    const result = lib.getQuotesByYear(quotes, year);

    if (result === 404) {
        res.status(404).send({ error: `no quotes found from the year ${year}`});
    } else {
        res.status(200).send(result);
    }
})

// JSON FORMAT
app.set('json spaces', 4)

// PORT
app.listen(PORT)
