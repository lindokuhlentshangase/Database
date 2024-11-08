//made tasks list a an array
let tasks = [];

//created an addtask function to put values on the textbox
function addTask() {
    const input = document.getElementById('todoInput');
    const taskText = input.value.trim();
    
    if (taskText) {
        tasks.push(taskText);
        input.value = ''; // Clear input
        renderTasks();
    }
}


//function to delete a task
function deleteTask(index) {
    tasks.splice(index, 1);
    renderTasks();
}

function deleteTask(index) {
    const confirmDelete = confirm("Are you sure you want to delete this task?");
    if (confirmDelete) {
        // Remove 1 task at the given index
        tasks.splice(index, 1);
        renderTasks(); // Re-render tasks after deletion
    } else {
        alert("Task deletion canceled.");
    }
}

//function to update

function updateTask(index) {
    const newTaskText = prompt("Update your task:", tasks[index]);
    
    if (newTaskText !== null && newTaskText.trim() !== "") {
        tasks[index] = newTaskText.trim();
        renderTasks();
    }
}

//function to update, edit

function renderTasks() {
    const displayBox = document.getElementById('displayBox');
    displayBox.innerHTML = '';

    tasks.forEach((task, index) => {
        const taskDiv = document.createElement('div');
        taskDiv.className = 'task';
        
        taskDiv.innerHTML = `
            <span>${task}</span>
            <div>         
                <button onclick="updateTask(${index})">Edit</button>         
                <button onclick="deleteTask(${index})">Delete</button>
            </div>
        `;
        
        displayBox.appendChild(taskDiv);
    });



    

}
    

