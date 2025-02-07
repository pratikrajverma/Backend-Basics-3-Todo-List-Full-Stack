const express = require('express');
const { createTodo, showTodo, deleteTodo } = require('../controller/TodoList');
const router = express.Router();


//...........creation API ............
router.post('/createTodo', createTodo)


//.............. show API............
router.get('/showTodo', showTodo)


//............  Deletion API............

router.delete('/deleteTodo', deleteTodo)

module.exports = router;




