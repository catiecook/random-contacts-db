exports.up = function(knex, Promise) {
  return knex.schema.createTable('contacts', function(table){
    table.string('name');
    table.string('address');
    table.string('phone');
    table.string('work');
  });
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('contacts');
};
