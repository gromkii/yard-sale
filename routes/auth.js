var express = require('express'),
  router = express.Router(),
  bcrypt = require('bcrypt'),
  User = require('../models/user');

router.route('/login')
  .post((req, res) => {
    User
      .where('username', req.body.username)
      .fetch()
      .then( user => {
        if (user && bcrypt.compare(req.body.password, user.password)){
          console.log('IT WORKS');
        } else {
          console.log('It fucked up.');
        }
      })
  });

module.exports = router;
