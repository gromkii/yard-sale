var bookshelf = require('../db/bookshelf');

require('./listing');
require('./message');

var User = bookshelf.Model.extend({
  tableName:'users',
  listing(){
    return this.hasMany('Listing');
  },
  message(){
    return this.hasMany('Message');
  }
});

User.getAllUsers = getAllUsers;

function getAllUsers(){
  return new Promise((resolve, reject) => {
    User
      .fetchAll()
      .then( results => {
        resolve(results);
      });
  });
}
module.exports = bookshelf.model('User', User);
