const addTodoBtn = document.getElementById("addTodoBtn")
const inputTag = document.getElementById("todoInput")
let todoText; // THis is should be populeted when user clicks on add Button
let todos = [];

addTodoBtn.addEventListener("click", ()=>{
    console.log("You just clicked on me!")
    todoText = inputTag.value
    console.log(todoText)
    inputTag.value = ""
});