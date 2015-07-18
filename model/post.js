var d= require('../db')
d.createMongoConnection();

var Post = d.model('Post', {
	username:{type: String, required: true},
	body: {type: String, required: true},
	date: {type: Date, required: true, default: Date.now }
})

module.exports = Post