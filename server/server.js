const express = require('express');
const api = require('./routes');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const session = require('express-session');

const app = express();

const db = mongoose.connection;
db.on('error', console.error);
db.once('open', () => { console.log('[+] Connected to mongo server'); });
mongoose.connect('mongodb://localhost/myapp');

app.use(session({
    secret: "myapp1!2@3#",
    resave: false,
    saveUninitialized: true
}));

app.use(bodyParser.json());
app.use('/api', api);
app.get('/', (req, res) => {
    res.end();
});

const router = express.Router();

const port = 5000;
app.listen(port, () => console.log("Express is listening on port " + port + "."));