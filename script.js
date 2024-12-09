const toDoForm = document.getElementById('container1');
const toDoInput = document.getElementById('todo-Input');
const timeInput = document.getElementById('time');
const ListContainer = document.querySelector('.max-container');


toDoForm.addEventListener('submit', (event) => {
    event.preventDefault();
    const input= toDoInput.value.trim();
    const time = timeInput.value.trim();
    if( input == '' ||  time == ''){
        alert('Please fill in all fields!');
        return;
    }


    addTask(input,time);
    toDoInput.value = '';
    timeInput.value = '';



});


function addTask (task,time){
    const taskBox = document.createElement('div');
    taskBox.classList.add('container2');

    const taskTitle = document.createElement('h3');

    taskTitle.textContent = task;

    const taskTime = document.createElement('p');

    taskTime.textContent =`Time: ${time}` ;
    const delete1 = document.createElement('button');
    delete1.textContent="Delete"
    delete1.classList.add('deleteButton');
    delete1.addEventListener("click", (event)=>{
        ListContainer.removeChild(taskBox);
    });

   




    taskBox.appendChild(taskTitle);
    taskBox.appendChild(taskTime);
    taskBox.appendChild(delete1);

    ListContainer.style.display='flex'
    ListContainer.appendChild(taskBox);

}


