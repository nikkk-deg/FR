import { UI_ElEMENTS } from "./view.js";


function createText(value){
    let text = document.createElement('p');
    text.textContent = value;
    return text;
}

function createElement(value){
    let newTask = document.createElement('div');
    let deleteButton = createDeleteButton();
    let text = createText(value);
    newTask.className = 'newTask';
    newTask.append(text);
    newTask.append(deleteButton);
    return newTask;
}

function createDeleteButton(){
    let deleteButton = document.createElement('input');
    deleteButton.type = 'image';
    deleteButton.src = "images/close_icon.png"
    return deleteButton;
}

export function addTask(value){
    let newTask = createElement(value);
    document.body.append(newTask)
    UI_ElEMENTS.HIGH_INPUT_FIELD.value = "";
}