"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express = require('express');
const compression = require('compression');
const cors = require('cors');
const helmet = require('helmet');
const path = require('path');
const app = express();
const PORT = process.env.PORT || 8000;
const handlers_1 = require("./src/handlers");
const quotes_1 = __importDefault(require("./src/quotes"));
// CORS CONFIG
const corsOptions = {
    origin: '*'
};
// MIDDLEWARE
app.use(helmet());
app.use(helmet.contentSecurityPolicy({
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
}));
app.use(compression());
app.use(express.static('client'));
// ROUTES
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, './client/index.html'));
});
app.get('/doc', (req, res) => {
    res.sendFile(path.join(__dirname, './client/apidoc.html'));
});
app.get('/quotes', cors(corsOptions), (req, res) => {
    const result = (0, handlers_1.getAllQuotes)(quotes_1.default);
    res.status(200).send(result);
});
app.get('/quotes/:year', cors(corsOptions), (req, res) => {
    const { year } = req.params;
    let result = undefined;
    if (year === 'unstamped') {
        result = (0, handlers_1.getQuotesByYear)(quotes_1.default);
    }
    else {
        result = (0, handlers_1.getQuotesByYear)(quotes_1.default, year);
    }
    if (result === 404) {
        res.status(result).send({ error: `no quotes found from the year ${year}` });
    }
    else {
        res.status(200).send(result);
    }
});
app.get('/quote', cors(corsOptions), (req, res) => {
    const result = (0, handlers_1.getAnyQuote)(quotes_1.default);
    res.status(200).send(result);
});
app.get('/quote/:id', cors(corsOptions), (req, res) => {
    const { id } = req.params;
    const result = (0, handlers_1.getQuoteByIndex)(quotes_1.default, parseInt(id));
    if (result === 404) {
        res.status(result).send({ error: `no quote found with ID #${id}` });
    }
    else {
        res.status(200).send(result);
    }
});
// JSON FORMAT
app.set('json spaces', 4);
// PORT
app.listen(PORT, console.log(`Server running at port ${PORT}`));
