let h_inputConteiner = document.getElementById("h_inputConteiner");
let h_inputField = document.getElementById('h_inputField');


function createElement(value){
    let newTask = document.createElement('div');
    newTask.className = 'newTask';
    newTask.innerHTML = `<p class="newTaskText">${value}</p>`;
    return newTask;
}


function addTask(value){
    let newTask = createElement(value);
    h_inputConteiner.append(newTask)
    h_inputField.value = "";
}





h_inputConteiner.addEventListener('submit', (event)=>{
    event.preventDefault();
    addTask(h_inputField.value)
})
