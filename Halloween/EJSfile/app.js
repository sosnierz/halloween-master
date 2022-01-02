var express = require('express');
var app = express();
var ejsLint = require('ejs-lint');


app.use(express.static("public"));
app.set("view engine", "ejs");

app.get('/', function(req, res) {
  res.render('home');

});

app.get("/inlove/:thing", function(req, res) {
  var thing = req.params.thing;
  res.render("love", {thingVar: thing});
});
app.get("/posts", function(req, res){
  var posts = [{
      title: 'Post 1',
      author: 'Susy'
    },
    {
      title: 'Post bunny love',
      author: 'Loki'
    },
    {
      title: 'Hate world',
      author: 'Lucas'
    },
  ];
  res.render("posts", {posts: posts});

});

app.listen(3000, function(){
  console.log('Hi');
});
