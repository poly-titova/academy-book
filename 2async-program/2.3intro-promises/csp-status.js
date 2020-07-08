const makeSoup = (preparedProducts) => {
  console.log(`> Начинаю варить суп из: ${preparedProducts.join(`, `)}`);
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      return Math.random() > 0.5
        ? resolve(`> Суп готов!`)
        : reject(`> Упс! Сломалась плита.`);
    }, TIMEOUT);
  });
};
