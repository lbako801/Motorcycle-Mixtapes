const express = require('express');
const app = express();
const port = 3001;
const routes = require('./controllers/controllers');

const exphbs = require('express-handlebars');
const hbs = exphbs.create({
  layoutsDir: `${__dirname}/views/layouts`,
});

app.engine('handlebars', hbs.engine);
app.set('view engine', 'handlebars');

app.use(express.static('public'));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(routes);

app.listen(port, () => {
  console.log(`Listening at http://localhost:${port}`);
});