
exports.up = function(knex) {
  return knex.schema
  .createTable("wizards", tbl => {
      tbl.increments()
      tbl.string("name", 255)
      .notNullable()
      .unique()
      .index()
      tbl.string("house")
      .notNullable()
      .index()
      tbl.string("year")
      .notNullable()
  })
};

exports.down = function(knex) {
  return knex.schema.dropTableIfExists("wizards")
};
