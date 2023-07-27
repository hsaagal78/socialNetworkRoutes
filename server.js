const express = require('express');
const db = require('./db/connection');

const usersData = require('./db/seed');
// Import routes
const routes = require('./routes');

const cwd = process.cwd();

const app = express();
const PORT = process.env.PORT || 3333;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(routes);

db.once('open', () => {
  app.listen(PORT, () => console.log('Server started on po %s', PORT));
});


