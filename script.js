// Select DOM elements
const addTaskBtn = document.getElementById('add-task-btn');
const newTaskInput = document.getElementById('new-task');
const taskList = document.getElementById('task-list');

// Add event listener to button
addTaskBtn.addEventListener('click', function() {
    const taskText = newTaskInput.value.trim();
    
    if (taskText === '') {
        alert('Please enter a task');
        return;
    }

    // Create new task element
    const li = document.createElement('li');
    li.textContent = taskText;

    // Create complete button (tick)
    const completeBtn = document.createElement('button');
    completeBtn.innerHTML = '✔'; // Tick symbol
    completeBtn.classList.add('complete-btn');
    li.prepend(completeBtn);

    // Create delete button (cross)
    const deleteBtn = document.createElement('button');
    deleteBtn.innerHTML = '✖'; // Cross symbol
    deleteBtn.classList.add('delete-btn');
    li.appendChild(deleteBtn);

    // Append the task to the task list
    taskList.appendChild(li);

    // Clear the input field
    newTaskInput.value = '';

    // Add event listener to complete button
    completeBtn.addEventListener('click', function() {
        li.classList.toggle('completed');
    });

    // Add event listener to delete button
    deleteBtn.addEventListener('click', function() {
        taskList.removeChild(li);
    });
});