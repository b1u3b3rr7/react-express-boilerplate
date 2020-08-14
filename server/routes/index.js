const express = require('express');
const account = require('./account');

const router = express.Router();

router.use('/account', account);
router.get('/', (req, res) => {
    res.end();
});

module.exports = router;