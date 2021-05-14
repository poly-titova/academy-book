const express = require(`express`);
const path = require(`path`);
const cookieParser = require(`cookie-parser`);

const app = express();

app.use(cookieParser());
app.use(express.static('static'));

app.get(`/theme.css`, (req, res) => {
  let filename = `light.css`;
  
  if (req.cookies.theme === `dark`) {
	filename = `dark.css`;
  }

  console.log(filename)
  const filepath = path.join(__dirname, `themes`, filename);
  res.sendFile(filepath);
})

app.listen(8080);
