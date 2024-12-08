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

