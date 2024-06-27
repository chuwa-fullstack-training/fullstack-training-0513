const { addToDo, dropToDo, getAllToDo, updateToDo } = require("./queries")
const express = require("express");
const bodyParser = require('body-parser');
const cors = require("cors");
const app = express();

app.use(cors({
    origin: "http://localhost:5173"
}));
app.use(bodyParser.json());


app.post("/api/todo", (req, res) => {
    const { title, description, deadline } = req.body;
    if (title === undefined) {
        res.statusCode = 400;
        res.send("400 --- fields missing");
        return;
    }
    const temp = new Date();
    const created_time = new Date(temp.getTime() - (temp.getTimezoneOffset() * 60 * 1000));
    addToDo(title, description, created_time, new Date(deadline)).then(r => {
        res.send({
            id: r,
            created_time: created_time.toUTCString()
        });
    }).catch(err => {
        res.statusCode = 500;
        res.send("500 --- " + err.toString());
    })

});

app.delete("/api/todo/:id", (req, res) => {
    dropToDo(req.params.id).then(() => {
        res.send("Item successfully dropped");
    }).catch((err) => {
        res.statusCode = 500;
        res.send("500 --- " + err.toString());
    });
});

app.get("/api/todo", (req, res) => {
    getAllToDo().then(r => {
        res.send(r);
    }).catch((err) => {
        res.statusCode = 500;
        res.send("500 --- " + err.toString());
    });
});

app.patch("/api/todo/:id", (req, res) => {
    updateToDo(req.params.id, req.body).then(() => {
        res.send("Item successfully updated");
    }).catch((err) => {
        res.statusCode = 500;
        res.send("500 --- " + err.toString());
    });
});

app.listen(3000, () => {
    console.log("Server listening at localhost:3000");
});
