/* const index = require("../src/index"); */

/* test('oh, a failed test?', () => {
  const ticket = new CinemaBooking('Adult', 2);
  expect(index.price).toBe(20);
}); */

const Order = require("../src/index");

test(`asserting "name" is "Steven"`, () => {
  const bluemonday = new Order('Steven');
  expect(bluemonday.name).toBe("Steven");
});


test(`asserting "name" is "Steven" and age is "8"`, () => {
  const bluemonday = new Order('Steven' , 8);
  expect(bluemonday.name).toBe("Steven");
  expect(bluemonday.age).toBe(8);
});


