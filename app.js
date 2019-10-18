var exphbs = require('express-handlebars');

const express = require('express');
const app = express();
// const path = require("path");
//
// express.set('views', path.join(_dirname, "views"))
// express.set("view engine", "hbs")

app.engine('handlebars', exphbs({defaultView: 'main'}));
app.set('view engine', 'handlebars');

// route for homepage
app.get('/', function (req, res) {
  res.render('main', {layout: 'hello'})
})

app.post('/chatbot.php', function (req, res) {
    res.render('main', {layout: 'chatbot.php'})
})

module.exports = app;

const port = 5000
app.listen(port,() => console.log(`Example app listening on port ${port}!`))
