const toDoForm = document.getElementById('container1');
const toDoInput = document.getElementById('todo-Input');
const timeInput = document.getElementById('time');
const ListContainer = document.querySelector('max-container');


toDoForm.addEventListener('submit', (event) => {
    event.preventDefault();
    const input= toDoInput.Value.trim();
    const time = timeInput.Value.trim();
    if( input == '' ||  time == ''){
        alert('Please fill in all fields!');
        return;
    }

})


function addTask (task,time){
    const taskBox = document.createElement('div');
    taskBox.classList.add('container2');

    const taskTitle = document.createElement('h3');

    taskTitle.textContent = task;

    const taskTime = document.createElement('p');
    taskTime.textContent =`Time: ${time};` 


    taskBox.appendChild(taskTitle);
    taskBox.appendChild(taskTime);


}

