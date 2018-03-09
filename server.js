const bodyParser = require('body-parser');
const express = require('express');
const app = express();

var currentArticle = "";

var port = process.env.PORT || process.env.OPENSHIFT_NODEJS_PORT || 8080;
var ip =  ip = process.env.IP || process.env.OPENSHIFT_NODEJS_IP || '0.0.0.0';

app.use(bodyParser.json());

app.post('/article', (req, res) => {
  console.log(req.body);
  currentArticle = req.body.article;
  return res.sendStatus(200);
});

app.get('/article', (req, res) => {
  var article = currentArticle;
  currentArticle = "";
  return res.json(article);
});

app.listen(port, ip, () => {
  console.log(`Server listening on port ${port}`);
});

