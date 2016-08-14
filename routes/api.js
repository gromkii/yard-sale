var express = require('express'),
  router = express.Router();

router.route('/')
  .get((req, res) => {
    res.json('Hello.');
  });

module.exports = router;
