'use strict';

const request = require(`supertest`);
const server = require(`./server`);

test(`When get books status code should be 200`, async () => {
  const res = await request(server).get(`/api/books`);
  expect(res.statusCode).toBe(200);
});

test(`Should had properties id and title`, async () => {
  const res = await request(server).get(`/api/books/2`);
  expect(res.body).toHaveProperty(`id`);
  expect(res.body).toHaveProperty(`title`);
});
