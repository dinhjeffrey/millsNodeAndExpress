/* [package.json] start is node app.js. standardize like for heroku*/

// references express but doesnt do anything
var express = require('express')
// invoke express
var app = express();
// the port that express listens on our machine
var port = 5000

/** app.use is for binding middleware */
app.use(express.static('public'))
app.use(express.static('src/views'))
/** app.get is for routing */
// req is info coming from the router
app.get('/', function(req, res) {
	res.send('oooo ah ooo ah')
})

app.get('/books', function(req, res) {
	res.send('oooo ah ooo books')
})
// a callback is what app.listen does when it's done with what it's doing
app.listen(port, function(err){
	console.log('running server on port ' + port)
})
