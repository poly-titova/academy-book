app.post(`/company`, (req, res) => {
  console.log(req.body);
  res.send(req.body);
});

app.use(express.json());