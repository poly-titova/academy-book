const express = require(`express`);
const session = require(`express-session`);

const app = express();

app.use(session({
  cookie: {
    max-age: 86400
	  //устанавливаем дефолтное время жизни куки
  }
}));

app.post(`/submit`, (req, res) => {

  //проверяем значение галочки на форме авторизации
  if (req.body.dont_remember) {

    //убираем дефолтное время жизни, чтобы cookie стал сессионным
    req.session.cookie.maxAge = false;
  }
});