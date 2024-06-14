const { addToDo, dropToDo, getAllToDo, updateToDo } = require("./queries")

// addToDo("x", "y", new Date(), new Date("2025-01-01"));
// dropToDo("666b870b1eba82acf9bd81aa");
// updateToDo("666b874cb44885954188b938", { title: "shit"});
getAllToDo().then(res => {
    console.log(res);
})