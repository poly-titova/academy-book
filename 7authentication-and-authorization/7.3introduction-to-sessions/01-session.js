const express = require(`express`);
const expressSession = require(`express-session`);

const PORT = 4000;

const app = express();
app.use(expressSession({
  secret: SECRET_SESSION,
  resave: false,
  saveUninitialized: false,
  name: `session_id`
}));

app.listen(PORT);
