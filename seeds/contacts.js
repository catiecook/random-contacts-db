var faker = require('faker');

exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('contacts').del()
    .then(function () {
      return Promise.all([
        // Inserts seed entries
        knex('contacts').insert(contact()),
        knex('contacts').insert(contact()),
        knex('contacts').insert(contact()),
        knex('contacts').insert(contact()),
        knex('contacts').insert(contact()),
        knex('contacts').insert(contact()),
        knex('contacts').insert(contact()),
        knex('contacts').insert(contact()),
        knex('contacts').insert(contact()),
        knex('contacts').insert(contact()),
        knex('contacts').insert(contact()),
        knex('contacts').insert(contact()),
        knex('contacts').insert(contact()),
        knex('contacts').insert(contact()),
        knex('contacts').insert(contact()),
        knex('contacts').insert(contact()),
        knex('contacts').insert(contact()),
        knex('contacts').insert(contact()),
        knex('contacts').insert(contact()),
        knex('contacts').insert(contact()),
        knex('contacts').insert(contact()),
        knex('contacts').insert(contact()),
        knex('contacts').insert(contact()),
        knex('contacts').insert(contact()),
        knex('contacts').insert(contact()),
        knex('contacts').insert(contact()),
        knex('contacts').insert(contact())
      ]);
    });
};

var contact = () => {
  var person = {};
  person.name=(faker.name.firstName() + " " + faker.name.lastName());
  person.address= (faker.address.streetAddress() + " " + faker.address.city() + ", " + faker.address.state());
  person.phone= (faker.phone.phoneNumber());
  person.work= (faker.company.companyName());

  return person;
}
