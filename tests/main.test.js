/* const index = require("../src/index"); */

/* test('oh, a failed test?', () => {
  const ticket = new CinemaBooking('Adult', 2);
  expect(index.price).toBe(20);
}); */



const Order = require("../src/index");
test('Your child ticket price will be £3', () => {
  const ticket = new Order ("James", 6, "no") 
  expect(ticket.price).toBe("Your child ticket price will be £3");

});

test('Your adult ticket price will be £10', () => {
  const ticket = new Order ("James", 36, "no") 
  expect(ticket.price).toBe("Your adult ticket price will be £10");

}); 

test('Your student price will be £6', () => {
  const ticket = new Order ("James", 24, "yes") 
  expect(ticket.price).toBe("Your student price will be £6");

}); 

test('Your senior ticket price will be £5', () => {
  const ticket = new Order ("James", 66, "no") 
  expect(ticket.price).toBe("Your senior ticket price will be £5");

});



test(`asserting "name" is "Steven"`, () => {
  const bluemonday = new Order('Steven');
  expect(bluemonday.name).toBe("Steven");
});


test(`asserting "name" is "Steven" and age is "8"`, () => {
  const bluemonday = new Order('Steven' , 8);
  expect(bluemonday.name).toBe("Steven");
  expect(bluemonday.age).toBe(8);
});


