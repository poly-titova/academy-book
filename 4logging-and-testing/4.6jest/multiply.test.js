'use strict';

const multiply = require(`./multiply.js`);

test.skip(`multiply -2 by 2 to should be equal -4`, () => {
  expect(multiply(-2, 2)).toBe(-4);
});

test.only(`multiply 2 by 2 to should be equal 4`, () => {
  expect(multiply(2, 2)).toBe(4);
});

test(`multiply 2 by 2 should be equal 4`, () => {
  expect(multiply(2, 2)).toBe(4);
});

test.each([
  [1, 1, 1],
  [1, 2, 2],
  [2, 1, 2],
])(`multiply %i by %i should be equal %i`, (a, b, expected) => {
  expect(multiply(a, b)).toBe(expected);
});
