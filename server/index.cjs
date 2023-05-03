const express = require('express');
const helmet = require('helmet');
const morgan = require('morgan');
const lightning = require('./lightningRoute.cjs');

const app = express();

app.use(helmet());
app.use(morgan('tiny'));
app.use(express.json());

app.use('/lightning', lightning);

app.get('/', (req, res) => {
  res.send('Hello World');
});

const port = process.env.PORT || 5000;
app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});
