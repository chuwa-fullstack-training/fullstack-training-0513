const express = require('express');
const router = express.Router();
const  {
    getAllToDos,
    getOneToDo,
    createToDo,
    updateToDo,
    deleteToDo
} = require('../controllers/toDoController.js');

router.route('/').get(getAllToDos).post(createToDo);
router.route('/:id').get(getOneToDo).put(updateToDo).delete(deleteToDo);

module.exports = router;