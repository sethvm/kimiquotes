const express = require('express')
const compression = require('compression')
const cors = require('cors')
const helmet = require('helmet')
const path = require('path')
const app = express()
const PORT = process.env.PORT || 8000

const lib = require('./src/lib.js')
const quotes = require('./src/quotes.js')

// CORS CONFIG
const corsOptions = {
    origin: '*'
}

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

app.get('/doc', (req, res) => {
    res.sendFile(path.join(__dirname, './client/apidoc.html'));
})

app.get('/quotes', cors(corsOptions), (req, res) => {
    const result = lib.getAllQuotes(quotes);
    res.status(200).send(result);
})

app.get('/quotes/unstamped', cors(corsOptions), (req, res) => {
    const result = lib.getUnstampedQuotes(quotes);

    if (result === 404) {
        res.status(result).send({ error: `no unstamped quotes found` });
    } else {
        res.status(200).send(result);
    }
})

app.get('/quotes/:year', cors(corsOptions), (req, res) => {
    const { year } = req.params;
    const result = lib.getQuotesByYear(quotes, year);

    if (result === 404) {
        res.status(result).send({ error: `no quotes found from the year ${year}`});
    } else {
        res.status(200).send(result);
    }
})

app.get('/quote', cors(corsOptions), (req, res) => {
    const result = lib.getAnyQuote(quotes);
    res.status(200).send(result);
})

app.get('/quote/:id', cors(corsOptions), (req, res) => {
    const { id } = req.params;
    const result = lib.getQuoteByIndex(quotes, id);

    if (result === 404) {
        res.status(result).send({ error: `no quote found with ID #${id}`});
    } else {
        res.status(200).send(result);
    }
})

// JSON FORMAT
app.set('json spaces', 4)

// PORT
app.listen(PORT)
