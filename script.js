// 1. Setup the Audio
// We use a hosted sound file so it works immediately. 
// You can download a file and use "ding.mp3" instead.
const dingSound = new Audio('https://assets.mixkit.co/active_storage/sfx/2578/2578-preview.mp3');

// 2. Select Elements
const taskInput = document.getElementById('taskInput');
const addBtn = document.getElementById('addBtn');
const taskList = document.getElementById('taskList');

// 3. Function to Add Task
function addTask() {
    const text = taskInput.value;
    
    if (text === '') {
        alert("Please write a task!");
        return;
    }

    // Create the list item (li)
    const li = document.createElement('li');
    
    // Create a span for text (so we can strike it through)
    const span = document.createElement('span');
    span.innerText = text;
    
    // Create a delete button
    const deleteBtn = document.createElement('button');
    deleteBtn.innerText = 'X';
    deleteBtn.className = 'delete-btn';

    // Assemble the parts
    li.appendChild(span);
    li.appendChild(deleteBtn);
    taskList.appendChild(li);

    // Clear input
    taskInput.value = '';
}

// 4. Event Listener: Add Button
addBtn.addEventListener('click', addTask);

// 5. Event Listener: Handle clicks on the List (Event Delegation)
taskList.addEventListener('click', function(e) {
    
    // Check if the click was on the Delete Button
    if (e.target.classList.contains('delete-btn')) {
        e.target.parentElement.remove();
    } 
    // Check if the click was on the Task Item (LI or SPAN)
    else {
        // Find the closest LI element to ensure we target the row
        const item = e.target.closest('li');
        
        if (item) {
            // Toggle the visual style
            item.classList.toggle('completed');

            // If it is now completed, play the sound
            if (item.classList.contains('completed')) {
                // Reset time so sound plays instantly if clicked rapidly
                dingSound.currentTime = 0; 
                dingSound.play();
            }
        }
    }
});