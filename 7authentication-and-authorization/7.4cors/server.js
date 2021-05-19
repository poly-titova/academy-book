const express = require(`express`);
const path = require(`path`);
const app = express();
const port = 3000;

app.use((req, res, next) => {
  res.headers[`Access-Control-Allow-Origin`] = `*`;
  next();
});

app.get(`/styles`, (req, res) => {
  res.sendFile(path.join(__dirname, `styles/style.css`));
});

app.listen(port, () => console.log(`Server listening on port ${port}!`));
