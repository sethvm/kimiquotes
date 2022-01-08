const express = require('express');
const compression = require('compression');
const helmet = require('helmet');
const path = require('path');
const app = express();
const routes = require('./routes/routes');
const PORT = process.env.PORT || 8000;

// middleware
app.use(helmet());
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
);
app.use(compression());
app.use(express.static('public'));
app.use('/', routes);

// json format
app.set('json spaces', 4);

// port
app.listen(
    PORT,
    console.log(`Server running at port ${PORT}`)
);
