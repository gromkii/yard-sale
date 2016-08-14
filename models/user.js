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
User.getUserListings = getUserListings;
User.getUserMessages = getUserMessages;

function getAllUsers(){
  return new Promise((resolve, reject) => {
    User
      .fetchAll({withRelated:['listing']})
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

function getUserListings(user_id){
  return new Promise((resolve, reject) => {
    User
      .where('id', user_id)
      .fetch({withRelated:['listing']})
      .then( results => {
        resolve(results);
      });
  });
}

function getUserMessages(user_id){
  return new Promise((resolve, reject) => {
    User
      .where('id', user_id)
      .fetch({withRelated:['message']})
      .then( results => {
        resolve(results);
      });
  });
}
module.exports = bookshelf.model('User', User);
