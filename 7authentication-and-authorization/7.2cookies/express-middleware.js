const express = require(`express`);
const cookieParser = require(`cookie-parser`);

const app = express();

app.use(cookieParser());

app.get('/', (req, res) => {
  if (!req.cookies[`not_first_time`]) {
	  console.log(`Этот пользователь заходит на страницу впервые за 10 дней`);
  } else {
	  console.log(`Этот пользователь здесь уже бывал в течение 10 дней`);
  }

  res.cookie(`not_first_time`, { maxAge: 864000 });
  res.sendFile(`path/to/index.html`);
})

app.listen(8080);
