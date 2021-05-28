const cookieParser = require(`cookie-parser`);
const csrf = require(`csurf`);
const express = require(`express`);

const csrfProtection = csrf({ cookie: true })
const parseForm = express.urlencoded({ extended: false })

const app = express();

app.use(cookieParser());
app.set(`view engine`, `pug`)

app.get(`/form`, csrfProtection, (req, res) => {

  // Генерируем токен и добавляем в форму
  res.render('form', { csrf: req.csrfToken() })
});

app.post(`/process`, parseForm, csrfProtection, (req, res) => {

  // Если всё прошло успешно, то возвращаем ответ
  res.send(`Успех`);
});
