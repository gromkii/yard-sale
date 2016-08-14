
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('users').del()
    .then(function () {
      return Promise.all([
        // Inserts seed entries
        knex('users')
          .insert({
            full_name: 'Fill Murray',
            username: 'The_Murray69',
            avatar_url: 'http://fillmurray.com/200/200',
            about_me: 'Remember those movies I starred in? Yeah, me too.',
            location: 'Los Angeles, CA',
            password:'$2a$04$SO0jxz3ZK7GsNd5nrQG96uGUEHZmguRI1OFEbExWTcmGo4lzdzjki'
          }),
        knex('users')
          .insert({
            full_name: 'Nicholas Cage',
            username: 'RageInTheCage',
            avatar_url: 'http://placecage.com/c/200/200',
            about_me: 'I really need money. Please buy my houses.',
            location: 'Everywhere',
            password:'$2a$04$SO0jxz3ZK7GsNd5nrQG96uGUEHZmguRI1OFEbExWTcmGo4lzdzjki'
          }),
        knex('users')
          .insert({
            full_name: 'Steve Segall',
            username: 'Samurai_Master_420',
            avatar_url: 'http://stevensegallery.com/200/200',
            about_me: 'Nothing personel kid heh',
            location: 'Los Angeles, CA',
            password:'$2a$04$SO0jxz3ZK7GsNd5nrQG96uGUEHZmguRI1OFEbExWTcmGo4lzdzjki'
          }),
        knex('users')
          .insert({
            full_name: 'Dax Richardson',
            username: 'gromkii',
            avatar_url: 'http://placecage.com/200/200',
            about_me: 'I\'m only here to round out the numbers.',
            location: 'Austin, TX',
            admin:true,
            password:'$2a$04$SO0jxz3ZK7GsNd5nrQG96uGUEHZmguRI1OFEbExWTcmGo4lzdzjki'
          })
      ]);
    }).then(function() {
      return knex('listings').del()
        .then(function() {
          return Promise.all([
            knex('listings')
              .insert({
                user_id: 1,
                item_name: 'A shoe',
                item_desc: 'I wore this shoe once, so it\'s really valueable.',
                price:599.99,
                item_img:'https://farm4.staticflickr.com/3135/2979707434_845893af8d.jpg'
              }),
            knex('listings')
              .insert({
                user_id: 2,
                item_name: 'Summer Home #7',
                item_desc: 'Please I really need the money. Please buy this house.',
                price:900.01,
                item_img:'https://farm4.staticflickr.com/3195/3043137274_7bbe765043.jpg'
              }),
            knex('listings')
              .insert({
                user_id: 3,
                item_name: 'A Diamond Katana',
                item_desc: 'I\'ve killed countless men with this sword, and now you can too.',
                price:69.00,
                item_img:'https://farm4.staticflickr.com/3435/3193384875_c80fbd3d9c.jpg'
              }),
          ])
        });
    }).then(function() {
      return knex('messages').del()
        .then(function() {
          return Promise.all([
            knex('messages')
              .insert({
                from_id:1,
                to_id:3,
                msg_title:'Hey buddy.',
                msg_body:'Could you stop lurking around my place at night? You\'re scaring the neighbors.'
              }),
            knex('messages')
              .insert({
                from_id:2,
                to_id:3,
                msg_title:'Please',
                msg_body:'Teach me how to be a man. Please.'
              }),
            knex('messages')
              .insert({
                from_id:2,
                to_id:1,
                msg_title:'Please',
                msg_body:'I really need to sell my houses.'
              }),

          ])
        });
    });
};
