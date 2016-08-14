var express = require('express'),
  router = express.Router(), //mergeParams : true for later.
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
  })
  .post((req, res) => {
    // Create new user.
  })
  .delete((req, res) => {
    // Delete user.
  });

router.route('/users/:user_id')
  .get((req, res) => {
    User.getUser(req.params.user_id)
      .then( user => {
        user = user.toJSON();
        res.json(user);
      });
  })
  .put((req, res) => {
    // Edit user.
  });

router.route('/users/:user_id/listings')
  .get((req, res) => {
    Use.getUserListings(req.params.user_id)
      .then( user => {
        user = user.toJSON();
      });
  });

router.route('/users/:user_id/messages')
  .get((req, res) => {
    Use.getUserMessages(req.params.user_id)
      .then( user => {
        user = user.toJSON();
      });
  });

module.exports = router;
