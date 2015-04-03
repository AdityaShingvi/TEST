var express = require('express')
var bodyParser = require('body-parser')
var Post = require('../model/post')

var app = express()
app.use(bodyParser.json())

app.get('/', function(req, res) {
	res.sendfile('layouts/posts.html')
})

app.get('/api/posts', function (req, res, next) {
	Post.find(function (err, posts){
		console.log("inside get")
		if(err) { return next(err) }
		res.json(posts)
	})
})

app.post('/api/posts',function (req, res) {
	var post = new Post({
		username: req.body.username,
		body: req.body.body
	})
	console.log("inside post")
	post.save(function (err, post){
		if(err) { return next(err) }
		
		//res.json(201, post) //depricated
		res.status(201).json(post)
	})
})

app.listen(3000, function(){
	console.log('Server listening on port ', 3000)
})