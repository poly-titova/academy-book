const myPromise = new Promise((resolve, reject) => {
  resolve(`success`);
  // Инструкция выполнится, но не повлияет на результат
  reject(`error`);
});

myPromise
  .then((value) => console.log(value))
  .catch((error) => console.log(error));