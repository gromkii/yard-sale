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
User.getUser = getUser;

function getAllUsers(){
  return new Promise((resolve, reject) => {
    User
      .fetchAll()
      .then( results => {
        resolve(results);
      });
  });
}

function getUser(user_id){
  return new Promise((resolve, reject) => {
    User
      .where('id', user_id)
      .fetch()
      .then( results => {
        resolve(results);
      });
  });
}
module.exports = bookshelf.model('User', User);
