'use strict';

const express = require(`express`);
const newsRoutes = require(`./routes/news`);
const companyRoutes = require(`./routes/company`);

const app = express();

// Регистрируем маршруты
app.use(`/news`, newsRoutes);
app.use(`/company`, companyRoutes);

const port = 3000;
app.listen(port);