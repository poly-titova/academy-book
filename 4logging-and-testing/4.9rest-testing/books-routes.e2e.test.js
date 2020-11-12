'use strict';

const request = require(`supertest`);
const server = require(`./server`);

test(`When get books status code should be 200`, async () => {
  const res = await request(server).get(`/api/books`);
  expect(res.statusCode).toBe(200);
});
