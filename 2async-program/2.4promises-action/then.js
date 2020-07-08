buyProducts()
  .then(prepareProducts, (error) => console.log(error))
  .then(makeSoup, (error) => console.log(error))
  .then((result) => console.log(result), (error) => console.log(error));