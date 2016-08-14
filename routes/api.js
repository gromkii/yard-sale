var express = require('express'),
  router = express.Router(),
  User = require('../models/user');

router.route('/')
  .get((req, res) => {
    res.json('Hello.');
  });

router.route('/users')
  .get((req, res) => {
    User.getAllUsers()
      .then( users => {
        users = users.toJSON();
        res.json(users);
      });
  });
module.exports = router;
