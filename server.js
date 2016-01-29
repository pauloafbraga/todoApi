var express = require('express');
var app = express();
var PORT = process.env.PORT || 3000;
var todos = [{
	id: 1,
	description: 'Meet mom for lunch',
	completd: false
}, {
	id: 2,
	description: 'Go to market',
	completd: false
}, {
	id: 3,
	description: 'Wetr to market',
	completd: true
}];

app.get('/', function (req, res) {
	res.send('Todo API Root');
});

// GET /todos
app.get('/todos', function (req, res) {
	res.json(todos);
});

// GET / todos/:id
app.get('/todos/:id', function (req, res) {
	var todoId = parseInt(req.params.id, 10);
	var matchedTodo;

	//iterate over todos array. Find a match
	todos.forEach(function (todo) {
		if (todoId === todo.id) {
			console.log('todoId:' + todoId);
			console.log('todo.id:' + todo.id);
			matchedTodo = todo;
		}
	});
	// res.status(404).send();
	if (matchedTodo) {
		res.json(matchedTodo);
	} else {
		res.status(404).send();
	}

});

app.listen(PORT, function () {
	console.log('Express listening on port' + PORT + '!');
});