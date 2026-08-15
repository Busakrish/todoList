//-------------------------------------------------------------------------------------------------
//                                          CRETED BY ME
//-------------------------------------------------------------------------------------------------

// // "Add Todo" button
// const addTodoBtn = document.getElementById("addTodoBtn")

// // input field where the user types the todo
// const inputTag = document.getElementById("todoInput")

// // <ul> element where todos will be displayed
// const todoListUi = document.getElementById("todoList")

// const remaning = document.getElementById("remaning-todos")
// const clearCompleted = document.getElementById("clearCompletedBtn")

// // Variable to store todo text 
// let todoText;

// // Array to store all todo objects
// let todos = [];

// // If we have todos in LocalStorage, read them and convert JSON string into JavaScript array
// let todosString = localStorage.getItem("todos")
// if (todosString) {
//     todos = JSON.parse(todosString)
//     // Show remaining todo count
//     remaning.innerHTML = todos.filter((item) => { return item.isCompleted != true }).length
// }

// // Function to display all todos on the webpage
// const populeteTodos = () => {
//     let string = ""

//     // Loop through each todo object
//     for (let todo of todos) {
//         string += `<li id="todo-${todo.id}" class="todo-item ${todo.isCompleted ? "completed" : ""}">
//     <input type="checkbox" class="todo-checkbox" ${todo.isCompleted ? "checked" : ""}>
//     <span class="todo-text">${todo.title}</span>
//     <button class="delete-btn">×</button>
//     </li>`
//     }
//     todoListUi.innerHTML = string
// }

// // Add click event on "Add Todo" button
// addTodoBtn.addEventListener("click", () => {
//     if (inputTag.value.trim().length < 3) {
//         alert("You can't do this🤯!");
//         inputTag.value = ""
//         return;
//     }
//     // Create a new todo object
//     let todo = {
//         id: Date.now(),        // Assign unique ID (based on array length)
//         title: inputTag.value,    // Store user's input
//         isCompleted: false        // New todo is incomplete by default
//     }
//     todos.push(todo)
//     // Show remaining todo count
//     remaning.innerHTML = todos.filter((item) => { return item.isCompleted != true }).length
//     localStorage.setItem("todos", JSON.stringify(todos))
//     inputTag.value = "" // Clear input field
//     // Refresh the UI
//     populeteTodos();
//     setupDeleteButtons();
// })

// populeteTodos();
// setupDeleteButtons();

// // Select all checkboxes currently present in the page
// const checkboxs = document.querySelectorAll(".todo-checkbox")


// // Add click event to every checkbox
// checkboxs.forEach((element) => {

//     element.addEventListener('click', (e) => {

//         // If checkbox is checked
//         if (e.target.checked == true) {

//             // Add completed class to apply completed styling
//             element.parentNode.classList.add("completed");

//             // Find matching todo object and mark it as completed
//             todos = todos.map(todo => {
//                 // Match HTML id with todo id
//                 if ("todo-" + todo.id == element.parentNode.id) {

//                     // Return updated object with isCompleted = true
//                     return { ...todo, isCompleted: true }

//                 } else { return todo }
//             })

//             // Show remaining todo count
//             remaning.innerHTML = todos.filter((item) => { return item.isCompleted != true }).length

//             // Save updated todos to LocalStorage
//             localStorage.setItem("todos", JSON.stringify(todos))
//         }

//         // If checkbox is unchecked
//         else {
//             element.parentNode.classList.remove("completed") // Remove completed styling

//             // Update matching todo object
//             todos = todos.map(todo => {
//                 // Match todo by ID
//                 if ("todo-" + todo.id == element.parentNode.id) {
//                     // Return updated object with isCompleted = false
//                     return { ...todo, isCompleted: false }

//                 } else { return todo }
//             })

//             // Show remaining todo count
//             remaning.innerHTML = todos.filter((item) => { return item.isCompleted != true }).length

//             // Save updated todos to LocalStorage
//             localStorage.setItem("todos", JSON.stringify(todos))
//         }
//     })
// });

// clearCompleted.addEventListener('click', () => {
//     // Remove the matching todo from the array
//     const conformation = confirm("Do you want to delete all complited todo🗑️?")
//     if (conformation) {
//         todos = todos.filter((todo) => { return todo.isCompleted == false })
//         // Show remaining todo count
//         remaning.innerHTML = todos.filter((item) => { return item.isCompleted != true }).length

//         // Save updated todos to LocalStorage
//         localStorage.setItem("todos", JSON.stringify(todos))
//         populeteTodos()
//     }
// })
// function setupDeleteButtons() {
//     // Select all checkboxes currently present in the page
//     const deleteBtns = document.querySelectorAll(".delete-btn")

//     // Add click event to every delete button
//     deleteBtns.forEach((element) => {

//         element.addEventListener('click', (e) => {
//             // Remove the matching todo from the array
//             const conformation = confirm("Do you want to delete this todo🗑️?")
//             if (conformation) {
//                 let targetelement = e.target.parentNode;
//                 todos = todos.filter(todo => {
//                     return "todo-" + todo.id != targetelement.id;
//                 });
//                 // Save updated todos to LocalStorage
//                 localStorage.setItem("todos", JSON.stringify(todos))
//                 populeteTodos();
//                 setupDeleteButtons();
//                 // Show remaining todo count
//                 remaning.innerHTML = todos.filter((item) => { return item.isCompleted != true }).length
//             }
//         })
//     });
// }


//-------------------------------------------------------------------------------------------------
//                                          CRETED BY AI
//-------------------------------------------------------------------------------------------------
// "Add Todo" button
const addTodoBtn = document.getElementById("addTodoBtn")

// Input field where the user types the todo
const inputTag = document.getElementById("todoInput")

// <ul> element where todos will be displayed
const todoListUi = document.getElementById("todoList")

// Remaining todo count
const remaining = document.getElementById("remaning-todos")

// Clear completed button
const clearCompleted = document.getElementById("clearCompletedBtn")

// Filter buttons
const filterBtns = document.querySelectorAll(".filter-btn")

// Current filter
let currentFilter = "all"

// Array to store all todo objects
let todos = []


// =====================================================
// LOAD TODOS FROM LOCAL STORAGE
// =====================================================

const todosString = localStorage.getItem("todos")

if (todosString) {
    try {
        todos = JSON.parse(todosString)
    } catch (error) {
        console.error("Error loading todos:", error)
        todos = []
    }
}


// =====================================================
// UPDATE REMAINING TODO COUNT
// =====================================================

const updateRemainingCount = () => {

    const remainingCount = todos.filter(todo => !todo.isCompleted).length

    remaining.innerHTML = remainingCount
}


// =====================================================
// DISPLAY TODOS
// =====================================================

const populeteTodos = () => {

    let string = ""

    // Start with all todos
    let filteredTodos = todos


    // Active todos
    if (currentFilter === "active") {
        filteredTodos = todos.filter(todo => {
            return !todo.isCompleted
        })
    }


    // Completed todos
    if (currentFilter === "completed") {
        filteredTodos = todos.filter(todo => {
            return todo.isCompleted
        })
    }

    // Create HTML for every todo
    for (let todo of filteredTodos) {

        string += `
            <li 
                id="todo-${todo.id}" 
                class="todo-item ${todo.isCompleted ? "completed" : ""}"
            >

                <input 
                    type="checkbox" 
                    class="todo-checkbox"
                    ${todo.isCompleted ? "checked" : ""}
                >

                <span class="todo-text">
                    ${todo.title}
                </span>

                <button class="delete-btn">
                    ×
                </button>

            </li>
        `
    }


    // Display todos
    todoListUi.innerHTML = string
    // Update remaining count
    updateRemainingCount()
}


// =====================================================
// ADD TODO
// =====================================================

addTodoBtn.addEventListener("click", () => {

    // Get trimmed input
    const title = inputTag.value.trim()


    // Validate input
    if (title.length < 3) {

        alert("Todo must contain at least 3 characters 🤯")

        inputTag.value = ""

        inputTag.focus()

        return
    }


    // Create new todo
    const todo = {

        id: Date.now(),

        title: title,

        isCompleted: false

    }


    // Add todo to array
    todos.push(todo)


    // Save to LocalStorage
    localStorage.setItem(
        "todos",
        JSON.stringify(todos)
    )


    // Clear input
    inputTag.value = ""


    // Put cursor back into input
    inputTag.focus()


    // Refresh UI
    populeteTodos()

})


// =====================================================
// ADD TODO USING ENTER KEY
// =====================================================

inputTag.addEventListener("keydown", (e) => {

    if (e.key === "Enter") {

        addTodoBtn.click()

    }

})


// =====================================================
// CHECKBOX EVENT
// EVENT DELEGATION
// =====================================================

todoListUi.addEventListener("change", (e) => {

    // Make sure the clicked element is a checkbox
    if (!e.target.classList.contains("todo-checkbox")) {
        return
    }


    // Find the todo <li>
    const todoElement = e.target.closest(".todo-item")


    // Get todo ID from HTML ID
    const todoId = Number(
        todoElement.id.replace("todo-", "")
    )


    // Update todo
    todos = todos.map(todo => {

        if (todo.id === todoId) {

            return {
                ...todo,
                isCompleted: e.target.checked
            }

        }

        return todo

    })


    // Save updated todos
    localStorage.setItem(
        "todos",
        JSON.stringify(todos)
    )


    // Refresh UI
    populeteTodos()

})


// =====================================================
// DELETE TODO
// EVENT DELEGATION
// =====================================================

todoListUi.addEventListener("click", (e) => {

    // Make sure delete button was clicked
    if (!e.target.classList.contains("delete-btn")) {
        return
    }


    // Ask for confirmation
    const confirmation = confirm(
        "Do you want to delete this todo 🗑️?"
    )


    if (!confirmation) {
        return
    }


    // Find todo <li>
    const todoElement = e.target.closest(".todo-item")


    // Get todo ID
    const todoId = Number(
        todoElement.id.replace("todo-", "")
    )


    // Remove todo
    todos = todos.filter(todo => {
        return todo.id !== todoId
    })


    // Save updated todos
    localStorage.setItem(
        "todos",
        JSON.stringify(todos)
    )


    // Refresh UI
    populeteTodos()

})


// =====================================================
// FILTER TODOS
// =====================================================

filterBtns.forEach(button => {

    button.addEventListener("click", () => {

        // Get selected filter
        currentFilter = button.dataset.filter


        // Remove active class from all buttons
        filterBtns.forEach(btn => {
            btn.classList.remove("active")
        })


        // Add active class to clicked button
        button.classList.add("active")


        // Refresh UI
        populeteTodos()

    })

})


// =====================================================
// CLEAR COMPLETED TODOS
// =====================================================

clearCompleted.addEventListener("click", () => {

    // Check if there are completed todos
    const completedTodos = todos.filter(todo => {
        return todo.isCompleted
    })


    // If nothing is completed
    if (completedTodos.length === 0) {

        alert("There are no completed todos to clear 🎉")

        return
    }


    // Confirmation
    const confirmation = confirm(
        "Do you want to delete all finished todos 🗑️?"
    )


    if (!confirmation) {
        return
    }


    // Keep only incomplete todos
    todos = todos.filter(todo => {
        return !todo.isCompleted
    })


    // Save updated todos
    localStorage.setItem(
        "todos",
        JSON.stringify(todos)
    )


    // Refresh UI
    populeteTodos()
})
// =====================================================
// INITIAL DISPLAY
// =====================================================
populeteTodos()