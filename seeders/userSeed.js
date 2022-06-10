const faker = require("faker");
const User = require ('../models/User.model');
const db = require ('../config/db')

const setupSeed = async () => {
const fakeUsers = [];
for (let i = 0; i < 10; i++) {
  fakeUsers.push({
    first_name: faker.name.firstName(),
    last_name: faker.name.lastName(),
    email: faker.internet.email(),
    thumbnail: faker.image.imageUrl(),
    password: faker.internet.password({min_length: 10, max_length: 20, mix_case: true}),
    phone: faker.phone.phoneNumber(),
    shipping_address: faker.address.streetAddress(),
    billing_adress:  faker.address.streetAddress(),
    isAdmin: faker.datatype.boolean(),
    orderId: faker.datatype.number({ min: 10, max: 100})
  });
}

const userPromise = await User.bulkCreate(fakeUsers).then(() => {
    console.log("Users Seeded Successfully");
  });


return Promise.all(userPromise);
}

db.sync()
  .then(setupSeed)
  .then(() => process.exit(0))
  .catch((err) => {
    console.log("Something went wrong on the seed process", err.message);
    process.exit(1);
  });