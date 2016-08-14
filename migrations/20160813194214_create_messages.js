
exports.up = function(knex, Promise) {
  return knex.schema.createTable('messages', table => {
    table.increments(),
    table.integer('user_id')
      .references('id')
      .inTable('users')
      .onDelete('cascade'),
    table.integer('listing_id')
      .references('id')
      .inTable('listings')
      .onDelete('cascade'),
    table.string('msg_title'),
    table.text('msg_body'),
    table.timestamp('created_at').defaultTo(knex.fn.now()),
    table.timestamp('updated_at').defaultTo(knex.fn.now());
  });
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('messages');
};
