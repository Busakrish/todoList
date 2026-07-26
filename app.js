const addTodoBtn = document.getElementById("addTodoBtn")
const inputTag = document.getElementById("todoInput")
const todoListUi = document.getElementById("todoList")
let todoText; // THis is should be populeted when user clicks on add Button
let todos = [];
// If we have todos in Localstorage, we will read it 
let todosString = localStorage.getItem("todos")
if(todosString){
    todos = JSON.parse(todosString)
}

// It shows todos in UI
const populeteTodos = ()=>{
    let string = ""
    for(let todo of todos){
        string+=`<li class="todo-item ${todo.isCompleted?"completed":""}">
            <input type="checkbox" class="todo-checkbox" ${todo.isCompleted? "checked":""}>
            <span class="todo-text">${todo.title}</span>
            <button class="delete-btn">×</button>
        </li>`
    }
    todoListUi.innerHTML =  string

}
addTodoBtn.addEventListener("click", ()=>{
    let todo ={
        title : inputTag.value,
        isCompleted : false
    }
    todos.push(todo)
    localStorage.setItem("todos",JSON.stringify(todos))
    // inputTag.value = ""
    populeteTodos()
});
populeteTodos()
