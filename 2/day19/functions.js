import { UI_ElEMENTS } from "./view.js";

let height_mainContent = 250;

function stringCoverter(str){
    if (str.length < 3) {
        throw new Error("Строка слишком короткая");
    }
    if (str.length > 30) {
        throw new Error("Строка слишком длинная");
    }
}
function createText(value){
    let text = document.createElement('p');
    
    try{
        stringCoverter(value);
    }catch {
        alert('недопусимое количество символов!');
    }
    text.textContent = value;
    return text;
}

function createDeleteButton(){
    let deleteButton = document.createElement('input');
    deleteButton.className = "deleteButton";
    deleteButton.type = 'image';
    deleteButton.src = "images/close_icon.png"
    deleteButton.addEventListener('click', ()=>{
        deleteButton.parentElement.remove();
        height_mainContent -= 52;
        UI_ElEMENTS.MAIN_CONTENT.style.height = `${height_mainContent}px`;
    })
    return deleteButton;
}

function createCheckbox(){
    let customCheckbox = document.createElement('label');
    let checkbox = document.createElement('input');
    let spanElement = document.createElement('span');
    checkbox.type = 'checkbox';
    checkbox.className = 'checkbox';
    customCheckbox.append(checkbox);
    customCheckbox.append(spanElement);
    customCheckbox.addEventListener('change', ()=>{
        if(checkbox.checked){
            customCheckbox.parentElement.style = `background: #DDDDDD`;
        }else{
            customCheckbox.parentElement.style = `background: white`;
        }
    })
    return customCheckbox;
}

function createElement(value){
    let deleteButton = createDeleteButton();
    let text = createText(value);
    let checkbox = createCheckbox();
    let newTask = document.createElement('div');
    newTask.className = 'newTask';
    newTask.append(checkbox);
    newTask.append(text);
    newTask.append(deleteButton);
    return newTask;
}

export function addHighTask(value){
    let newTask = createElement(value);
    UI_ElEMENTS.HIGH_NEW_TASK_CONTEINER.append(newTask);
    UI_ElEMENTS.HIGH_INPUT_FIELD.value = "";
    height_mainContent += 52;
    UI_ElEMENTS.MAIN_CONTENT.style.height = `${height_mainContent}px`;
}

export function addLowTask(value){
    let newTask = createElement(value);
    UI_ElEMENTS.LOW_NEW_TASK_CONTEINER.append(newTask);
    UI_ElEMENTS.LOW_INPUT_FIELD.value = "";
    height_mainContent += 52;
    UI_ElEMENTS.MAIN_CONTENT.style.height = `${height_mainContent}px`;
}



export function addTask(value, priority){
    if (priority == 'high'){
        addHighTask(value);
    }else{
        addLowTask(value);
    }
}