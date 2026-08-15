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
    for (let todo of todos) {
        string += `<li id="todo-${todo.id}" class="todo-item ${todo.isCompleted ? "completed" : ""}">
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
        id: Date.now(),        // Assign unique ID (based on array length)
        title: inputTag.value,    // Store user's input
        isCompleted: false        // New todo is incomplete by default
    }
    todos.push(todo)
    localStorage.setItem("todos", JSON.stringify(todos))
    inputTag.value = "" // Clear input field
    // Refresh the UI
    populeteTodos();
    setupDeleteButtons();
})

populeteTodos();
setupDeleteButtons();

// Select all checkboxes currently present in the page
const checkboxs = document.querySelectorAll(".todo-checkbox")


// Add click event to every checkbox
checkboxs.forEach((element) => {

    element.addEventListener('click', (e) => {

        // If checkbox is checked
        if (e.target.checked == true) {

            // Add completed class to apply completed styling
            element.parentNode.classList.add("completed");

            // Find matching todo object and mark it as completed
            todos = todos.map(todo => {
                // Match HTML id with todo id
                if ("todo-" + todo.id == element.parentNode.id) {

                    // Return updated object with isCompleted = true
                    return { ...todo, isCompleted: true }

                } else { return todo }
            })
            // Save updated todos to LocalStorage
            localStorage.setItem("todos", JSON.stringify(todos))
        }

        // If checkbox is unchecked
        else {
            element.parentNode.classList.remove("completed") // Remove completed styling

            // Update matching todo object
            todos = todos.map(todo => {
                // Match todo by ID
                if ("todo-" + todo.id == element.parentNode.id) {
                    // Return updated object with isCompleted = false
                    return { ...todo, isCompleted: false }

                } else { return todo }
            });
            // Save updated todos to LocalStorage
            localStorage.setItem("todos", JSON.stringify(todos))
        }
    })
});


function setupDeleteButtons() {
    // Select all checkboxes currently present in the page
    const deleteBtns = document.querySelectorAll(".delete-btn")

    // Add click event to every delete button
    deleteBtns.forEach((element) => {

        element.addEventListener('click', (e) => {
            // Remove the matching todo from the array
            let targetelement = e.target.parentNode;
            todos = todos.filter(todo => {
                return "todo-" + todo.id != targetelement.id;
            });
            // Save updated todos to LocalStorage
            localStorage.setItem("todos", JSON.stringify(todos))
            populeteTodos();
            setupDeleteButtons();
        })
    });
}