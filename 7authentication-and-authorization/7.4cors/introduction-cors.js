const express = require(`express`);
const path = require(`path`);
const cors = require(`cors`);
const app = express();

const port = 3000;

app.use(cors());

// Ваши настройки
app.listen(port, () => console.log(`Server listening on port ${port}!`));
