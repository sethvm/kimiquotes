const express = require('express');
import {
    Request,
    Response
} from 'express';
const router = express.Router();
const path = require('path');
const cors = require('cors');

// cors
const corsOptions = {
    origin: '*'
}

// data & handlers
import quotes from './data/quotes';
import {
    getAllQuotes,
    getQuotesByYear,
    getQuoteByIndex,
    getAnyQuote
} from './handlers';

// routes
router.get('/', (req: Request, res: Response) => {
    res.sendFile(path.join(__dirname, './public/index.html'));
})

router.get('/doc', (req: Request, res: Response) => {
    res.sendFile(path.join(__dirname, './public/apidoc.html'));
})

router.get('/quotes', cors(corsOptions), (req: Request, res: Response) => {
    const result = getAllQuotes(quotes);
    res.status(200).send(result);
})

router.get('/quotes/:year', cors(corsOptions), (req: Request, res: Response) => {
    const { year } = req.params;
    let result = undefined;
    if (year === 'unstamped') {
        result = getQuotesByYear(quotes);
    } else {
        result = getQuotesByYear(quotes, year);
    }

    if (result === 404) {
        res.status(result).send({ error: `no quotes found from the year ${year}`});
    } else {
        res.status(200).send(result);
    }
})

router.get('/quote', cors(corsOptions), (req: Request, res: Response) => {
    const result = getAnyQuote(quotes);
    res.status(200).send(result);
})

router.get('/quote/:id', cors(corsOptions), (req: Request, res: Response) => {
    const { id } = req.params;
    const result = getQuoteByIndex(quotes, parseInt(id));

    if (result === 404) {
        res.status(result).send({ error: `no quote found with ID #${id}`});
    } else {
        res.status(200).send(result);
    }
})

module.exports = router;
