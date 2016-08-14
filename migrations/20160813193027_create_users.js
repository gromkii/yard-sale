
exports.up = function(knex, Promise) {
  return knex.schema.createTable('users', table => {
    table.increments(),
    table.string('full_name'),
    table.string('username'),
    table.text('avatar_url'),
    table.text('about_me'),
    table.string('location'),
    table.bool('admin').defaultTo(false),
    table.timestamp('created_at').defaultTo(knex.fn.now()),
    table.timestamp('updated_at').defaultTo(knex.fn.now());
  });
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('users');
};
