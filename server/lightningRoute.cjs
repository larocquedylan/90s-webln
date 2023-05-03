const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
  res.send('Hello World - Lightning Node');
});

//

module.exports = router;
