const TIMEOUT = 1000;

const mySecondPromise = new Promise((resolve, reject) => {
  setTimeout(() => {
    throw new Error(`Ошибка в асинхронной функции`);
  },
    TIMEOUT
  );
});

mySecondPromise
  .catch(() => console.log(`Этот код не будет выполнен`));