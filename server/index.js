const express = require('express');
const helmet = require('helmet');
const morgran = require('morgan');

const app = express();

app.use(helmet());
app.use(morgan('combined'));
app.use(express.json());

app.get('/', (req, res) => {
    res.send('Hello World');
});

const port = process.env.PORT || 5000;
app.listen(port, () => {
    console.log(`Listening on port ${port}`);
}
