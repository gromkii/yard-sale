var bookshelf = require('../db/bookshelf');

require('./user');

var Listing = bookshelf.Model.extend({
  tableName:'listings',
  user: function(){
    return this.belongsTo('User')
  }
});

Listing.getAllListings = getAllListings;

function getAllListings(){
  return new Promise((resolve, reject) => {
    Listing
      .fetchAll({withRelated:['user']})
      .then( results => {
        resolve(results);
      });
  })
}

module.exports = bookshelf.model('Listing', Listing);
