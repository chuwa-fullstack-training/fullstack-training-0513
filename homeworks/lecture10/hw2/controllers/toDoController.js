const Todo = require('../models/toDo');

const getAllToDos = async (req, res) => {
    try{
        const toDos = await Todo.find();
        res.render('index', { toDos });
    } catch (err) {
        console.error(err.message);
        res.status(500).json({ message: 'Server Error' });
    }
};

const getOneToDo = async (req, res) => {
    try{
        const toDo = await Todo.findById(req.params?.id);
        if (!toDo) {
            return res.status(404).json({ message: 'To Do not found' });
        }
        res.status(200).json(toDo);
    } catch (err) {
        res.status(500).json({ message: 'Server Error' });
    }
};

const createToDo = async (req, res) => {
    try{
        const { title } = req.body;
        if (!title) {
            return res.status(400).json({ message: 'Please provide a title' });
        }
        const toDo = new Todo(req.body);
        await toDo.save();
        res.redirect('/api/toDo');
    } catch (err) {
        console.error(err.message);
        res.status(500).json({ message: 'Server Error' });
    }
};

const updateToDo = async (req, res) => {
    try{
        const toDo = await Todo.findById(req.params?.id);
        if (!toDo) {
            return res.status(404).json({ message: 'To Do not found' });
        }
        const { title, description, completed } = req.body;
        toDo.title = title ?? toDo.title;
        toDo.description = description ?? toDo.description;
        toDo.completed = completed ?? toDo.completed;
        await toDo.save();
        res.status(200).json(toDo);
    } catch (err) {
        res.status(500).json({ message: 'Server Error' });
    }
};

const deleteToDo = async (req, res) => {
    try{
        const toDo = await Todo.findById(req.params?.id);
        if (!toDo) {
            return res.status(404).json({ message: 'To Do not found' });
        }
        await Todo.findByIdAndDelete(req.params.id);
        res.status(204).json({ message: 'To Do deleted' });
    }
    catch (err) {
        res.status(500).json({ message: 'Server Error' });
    }
};

module.exports = {
    getAllToDos,
    getOneToDo,
    createToDo,
    updateToDo,
    deleteToDo
};

