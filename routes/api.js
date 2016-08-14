var express = require('express'),
  router = express.Router();

router.route('/')
  .get((req, res) => {
    res.json('Hello.');
  });

router.route('/users')
  .get((req, res) => {
    res.json(['hey','what','is','up'])
  })
module.exports = router;
