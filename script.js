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
    
    renderTasks();
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
    

