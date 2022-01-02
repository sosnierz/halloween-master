var express = require('express');
var app = express();
var bodyParser = require('body-parser');
const port = 3000;

app.use(bodyParser.urlencoded({exteded: true}));
app.set("view engine", "ejs");
// app.use(express.static("public"));

app.get('/', function(req, res) {
    res.render('landing');
});

app.get('/blog', function(req, res) {
  var posts = [
    {title: "boo", category: "Web Design", date: "February 2, 2013", author: "Albert Einstein", comments:"4 Comments"}
]   
    res.render('blog', {posts: posts});
});

app.get('/campgrounds', function(req, res) {
    res.render("campgrounds", {campgrounds:campgrounds});
});

app.post('/campgrounds', function(req, res) {
  var name = req.body.name;
   var image = req.body.image;
  var newCampgrounds = {name: name, image: image};
    campgrounds.push(newCampgrounds);
    res.redirect('/campgrounds');
});

app.get('/campgrounds/new', function(req, res) {
    res.render('new');
});

app.get('*', (req, res) => res.send('wrong page'));
app.listen(8000, function() {
  console.log('Start')});