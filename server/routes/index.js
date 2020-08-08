const express = require('express');
const app = express();

app.get('/', (req, res) => {
    res.end();
});

module.exports = app;