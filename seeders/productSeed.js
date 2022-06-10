const faker = require('@faker-js/faker')
const Products = require("../models/Product.model");
const db = require("../config/db");


const setupSeed = async () => {
  const fakeProduct = [];
  for (let i = 0; i < 10; i++) {
    fakeProduct.push({
      name: faker.commerce.productName(),
      description: faker.commerce.productDescription(),
      price: faker.commerce.price(100, 200, 0, "$"),
      image: faker.image.imageUrl(),
      stock: faker.datatype.number(100),
      thumbnail: faker.image.imageUrl(),
      brandId: faker.datatype.number(4),
    });
  }

  const productPromise = await Products.bulkCreate(fakeProduct).then(() => {
    console.log("Products Seeded Successfully");
  });

  return Promise.all(productPromise);
};

db.sync()
  .then(setupSeed)
  .then(() => process.exit(0))
  .catch((err) => {
    console.log("Somethin went wrong on the seed process", err.message);
    process.exit(1);
  });
