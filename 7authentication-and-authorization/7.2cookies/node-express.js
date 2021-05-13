const express = require(`express`);
const app = express();

app.get(`/`, (req, res) => {
  const cookies = req.get(`Cookie`);
  if (!cookies){
	console.log(`Этот пользователь заходит на страницу впервые за 10 дней`);
  } else {
	console.log(`Этот пользователь здесь уже бывал в течение 10 дней`);
  }

  res.set(`Set-Cookie`, `not_first_time=true; Max-Age: 864000`);
  res.sendFile(`path/to/index.html`);
})

app.listen(8080);
