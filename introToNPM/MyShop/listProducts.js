var faker = require('faker');
console.log('____________');
console.log('MY SHOP')
console.log('____________');
for(var i = 0; i < 10; i++) {
    console.log(faker.commerce.productName() + " -  $" +faker.commerce.price());
} 




