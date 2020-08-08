const express = require('express');
const api = require('./routes/index');
const bodyParser = require('body-parser');


const app = express();
app.use(bodyParser.json());
app.use('/api', (req, res) => res.json({ username: "Benjamin" }));

app.get('/', (req, res) => {
    res.json({
        username: "b1u3b3rr7"
    });
});

const router = express.Router();

const port = 5000;
app.listen(port, () => console.log("Express is listening on port " + port + "."));