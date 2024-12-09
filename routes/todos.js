var express = require('express');
var router = express.Router();
var createError = require('http-errors');

const todos = [{ id: 1, name: "Jose", completed: true }];

router.get('/', function (req, res, next) {
    res.json(todos);
});

router.get('/:id', function (req, res, next) {
    const todo = todos.find(todo => todo.id === Number(req.params.id));

    if(!todo) return next(createError(404, "Not Found"))
    
    res.json(todo);
});
module.exports = router;
