var faker = require('faker');

var makeNames = function(){
  for(var i=0; i<3; i++){
    console.log(faker.name.firstName() + " " + faker.name.lastName());
  }
};

makeNames();
