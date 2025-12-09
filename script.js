
const dingSound = new Audio('https://assets.mixkit.co/active_storage/sfx/2578/2578-preview.mp3');
const taskInput = document.getElementById('taskInput');
const addBtn = document.getElementById('addBtn');
const taskList = document.getElementById('taskList');

function addTask() {
    const text = taskInput.value;
    
    if (text === '') {
        alert("Please write a task!");
        return;
    }

   
    const li = document.createElement('li');
    
    
    const span = document.createElement('span');
    span.innerText = text;
    
    
    const deleteBtn = document.createElement('button');
    deleteBtn.innerText = 'X';
    deleteBtn.className = 'delete-btn';

   
    li.appendChild(span);
    li.appendChild(deleteBtn);
    taskList.appendChild(li);

   
    taskInput.value = '';
}


addBtn.addEventListener('click', addTask);


taskList.addEventListener('click', function(e) {
    
    
    if (e.target.classList.contains('delete-btn')) {
        e.target.parentElement.remove();
    } 
    
    else {
       
        const item = e.target.closest('li');
        
        if (item) {
            item.classList.toggle('completed');

            if (item.classList.contains('completed')) {
                dingSound.currentTime = 0; 
                dingSound.play();
            }
        }
    }
});
