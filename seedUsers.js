const { faker } = require("@faker-js/faker");
const User = require ("./models/User.model");
const db = require ("./config/db")

const setupSeed = async () => {
const fakeUsers = [];
for (let i = 0; i < 10; i++) {
  fakeUsers.push({
    first_name: faker.name.firstName(),
    last_name: faker.name.lastName(),
    email: faker.internet.email(),
    thumbnail: faker.image.imageUrl(null,null,true),
    password: "Asdasdasd123",
    phone: faker.phone.phoneNumber(),
    shipping_address: [faker.address.streetAddress()],
    billing_adress:  faker.address.streetAddress(),
    isAdmin: faker.datatype.boolean()
  });
}

const userPromise = await User.bulkCreate(fakeUsers);


return userPromise;
}

db.sync()
  .then(setupSeed)
  .then(() => process.exit(0))
  .catch((err) => {
    console.log("Something went wrong on the seed process", err.message);
    process.exit(1);
  });