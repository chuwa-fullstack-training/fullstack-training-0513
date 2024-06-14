const db = require("./db");
const ToDoList = require("./schemas");

async function addToDo(title, description, created_time, deadline) {
    const record = new ToDoList({
        title: title,
        description: description,
        created_time: created_time,
        deadline: deadline
    });
    try {
        let res = await record.save();
        console.log("Item added");
        return res._id;
    } catch (err) {
        console.log(err);
        return null;
    }
}

async function dropToDo(id) {
    try {
        await ToDoList.findByIdAndDelete(id);
        console.log("Item deleted");
    } catch (err) {
        console.log(err);
    }
}

async function getAllToDo() {
    try {
        let res = await ToDoList.find({});
        console.log("Items fetched");
        return res;
    } catch (err) {
        console.log(err);
        return null;
    }
}

async function updateToDo(id, prompt) {
    try {
        await ToDoList.findByIdAndUpdate(id, prompt);
        console.log("Update success");
    } catch (err) {
        console.log(err);
    }
}

module.exports = {
    addToDo,
    dropToDo,
    getAllToDo,
    updateToDo
};