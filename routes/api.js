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

router.route('/users/:user_id')
  .get((req, res) => {
    User.getUser(req.params.user_id)
      .then( user => {
        user = user.toJSON();
        res.json(user);
      })
  })
module.exports = router;
