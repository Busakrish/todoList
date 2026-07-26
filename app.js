const addTodoBtn = document.getElementById("addTodoBtn")
const inputTag = document.getElementById("todoInput")
let todoText; // THis is should be populeted when user clicks on add Button
let todos = [];
// If we have todos in Localstorage, we will read it 
let todosString = localStorage.getItem("todos")
if(todosString){
    todos = JSON.parse(todosString)
}
addTodoBtn.addEventListener("click", ()=>{
    inputTag.value = ""
    let todo ={
        title : inputTag.value,
        isCompleted : false
    }
    todos.push(todo)
    localStorage.setItem("todos",JSON.stringify(todos))
});