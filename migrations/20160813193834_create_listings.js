
exports.up = function(knex, Promise) {
  return knex.schema.createTable('listings', table => {
    table.increments(),
    table.integer('user_id')
      .references('id')
      .inTable('users')
      .onDelete('cascade'),
    table.string('item_name'),
    table.text('item_desc'),
    table.float('price'),
    table.text('item_img'),
    table.timestamp('created_at').defaultTo(knex.fn.now()),
    table.timestamp('updated_at').defaultTo(knex.fn.now());
  });
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('listings');
};
