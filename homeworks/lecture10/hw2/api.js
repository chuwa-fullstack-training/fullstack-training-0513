const { addToDo, dropToDo, getAllToDo, updateToDo } = require("./queries")
const express = require("express");
const bodyParser = require('body-parser');

const app = express();
app.use(bodyParser.json());


app.post("/api/todo", (req, res) => {
    const { title, description, deadline } = req.body;
    if (title === undefined) {
        res.send("400 --- fields missing");
        return;
    }
    addToDo(title, description, new Date(), new Date(deadline)).then(r => {
        res.send("todo item added");
    }).catch(err => {
        res.send("500 --- " + err.toString());
    })

});

app.delete("/api/todo/:id", (req, res) => {
    dropToDo(req.params.id).then(() => {
        res.send("Item successfully dropped");
    }).catch((err) => {
        res.send("500 --- " + err.toString());
    });
});

app.get("/api/todo", (req, res) => {
    getAllToDo().then(r => {
        res.send(r);
    }).catch((err) => {
        res.send("500 --- " + err.toString());
    });
});

app.patch("/api/todo/:id", (req, res) => {
    updateToDo(req.params.id, req.body).then(() => {
        res.send("Item successfully updated");
    }).catch((err) => {
        res.send("500 --- " + err.toString());
    });
});

app.listen(3000, () => {
    console.log("Server listening at localhost:3000");
});
