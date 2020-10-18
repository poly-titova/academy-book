const app = express();
const port = 3000;

app.get(`/company`, (req, res) => {
  res.send(`This is company route`);
});

// POST
app.post(`/company`, (req, res) => res.send(`OK`));
// PATCH
app.patch(`/company`, (req, res) => res.send(`OK`));
// PUT
app.put(`/company`, (req, res) => res.send(`OK`));
// DELETE
app.delete(`/company`, (req, res) => res.send(`OK`));

app.listen(port);