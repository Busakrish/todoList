// const addTodoBtn = document.getElementById("addTodoBtn")
// const inputTag = document.getElementById("todoInput")
// const todoListUi = document.getElementById("todoList")
// let todoText; // THis is should be populeted when user clicks on add Button
// let todos = [];
// // If we have todos in Localstorage, we will read it 
// let todosString = localStorage.getItem("todos")
// if (todosString) {
//     todos = JSON.parse(todosString)
// }

// // It shows todos in UI
// const populeteTodos = () => {
//     let string = ""
//     for (let todo of todos) {
//         string += `<li id="todo-${todo.id}" class="todo-item ${todo.isCompleted ? "completed" : ""}">
//         <input type="checkbox" class="todo-checkbox" ${todo.isCompleted ? "checked" : ""}>
//         <span class="todo-text">${todo.title}</span>
//         <button class="delete-btn">×</button>
//         </li>`
//     }
//     todoListUi.innerHTML = string
// }

// addTodoBtn.addEventListener("click", () => {
//     let todo = {
//         id : todos.length,
//         title: inputTag.value,
//         isCompleted: false
//     }
//     todos.push(todo)
//     localStorage.setItem("todos", JSON.stringify(todos))
//     inputTag.value = ""
//     populeteTodos()
// })
// populeteTodos()

// const checkboxs = document.querySelectorAll(".todo-checkbox")


// checkboxs.forEach((element) => {
//     element.addEventListener('click', (e)=>{
//         if(e.target.checked == true){ 
//             element.parentNode.classList.add("completed");
//             // Grape the todo from todos array and then check isCompleted attribute to true.
//             todos = todos.map(todo =>{
//                 console.log("todo-" + todo.id, element.parentNode.id)
//                 if ("todo-" + todo.id == element.parentNode.id) {
//                     return{...todo,isCompleted:true}
//                 } else {
//                     return todo
//                 }
//             })
//             localStorage.setItem("todos", JSON.stringify(todos))
//         }
//         else{
//             element.parentNode.classList.remove("completed")
//            todos = todos.map(todo =>{
//                 if ("todo-" + todo.id == element.parentNode.id) {
//                     return{...todo,isCompleted:false}
//                 } else {
//                     return todo
//                 }
//             })
//             localStorage.setItem("todos", JSON.stringify(todos))
//         }
//     })

// });

// "Add Todo" button
const addTodoBtn = document.getElementById("addTodoBtn")

// input field where the user types the todo
const inputTag = document.getElementById("todoInput")

// <ul> element where todos will be displayed
const todoListUi = document.getElementById("todoList")

// Variable to store todo text 
let todoText; 

// Array to store all todo objects
let todos = [];

// If we have todos in LocalStorage, read them and convert JSON string into JavaScript array
let todosString = localStorage.getItem("todos")
if (todosString) {
    todos = JSON.parse(todosString)
}

// Function to display all todos on the webpage
const populeteTodos = () => {
    let string = ""
    
    // Loop through each todo object
    for (let todo of todos) {string += `<li id="todo-${todo.id}" class="todo-item ${todo.isCompleted ? "completed" : ""}">
    <input type="checkbox" class="todo-checkbox" ${todo.isCompleted ? "checked" : ""}>
    <span class="todo-text">${todo.title}</span>
    <button class="delete-btn">×</button>
    </li>`
}
todoListUi.innerHTML = string
}

// Add click event on "Add Todo" button
addTodoBtn.addEventListener("click", () => {
    // Create a new todo object
    let todo = {
        id : todos.length,        // Assign unique ID (based on array length)
        title: inputTag.value,    // Store user's input
        isCompleted: false        // New todo is incomplete by default
    }
    todos.push(todo)
    localStorage.setItem("todos", JSON.stringify(todos))
    inputTag.value = "" // Clear input field
    // Refresh the UI
    populeteTodos()
})

populeteTodos()
// Select all checkboxes currently present in the page
const checkboxs = document.querySelectorAll(".todo-checkbox")


// Add click event to every checkbox
checkboxs.forEach((element) => {

    element.addEventListener('click', (e)=>{

        // If checkbox is checked
        if(e.target.checked == true){

            // Add completed class to apply completed styling
            element.parentNode.classList.add("completed");

            // Find matching todo object and mark it as completed
            todos = todos.map(todo =>{
                // Match HTML id with todo id
                if ("todo-" + todo.id == element.parentNode.id) {

                    // Return updated object with isCompleted = true
                    return {...todo,isCompleted:true}

                } else {return todo}
            })
            // Save updated todos to LocalStorage
            localStorage.setItem("todos", JSON.stringify(todos))
        }

        // If checkbox is unchecked
        else{
            element.parentNode.classList.remove("completed") // Remove completed styling

            // Update matching todo object
            todos = todos.map(todo =>{
                // Match todo by ID
                if ("todo-" + todo.id == element.parentNode.id) {
                    // Return updated object with isCompleted = false
                    return {...todo,isCompleted:false}

                } else {return todo}
            });
            // Save updated todos to LocalStorage
            localStorage.setItem("todos", JSON.stringify(todos))
        }
    })

});