import { UI_ElEMENTS } from "./view.js";

let checkboxCount = 0;


function createText(value){
    let text = document.createElement('p');
    text.textContent = value;
    return text;
}

function createDeleteButton(){
    let deleteButton = document.createElement('input');
    deleteButton.type = 'image';
    deleteButton.src = "images/close_icon.png"
    return deleteButton;
}

function createCheckbox(){
    let customCheckbox = document.createElement('label');
    let checkbox = document.createElement('input');
    let spanElement = document.createElement('span');
    checkbox.type = 'checkbox';
    checkbox.setAttribute('id', `checkbox${checkboxCount}`);
    checkboxCount++;
    customCheckbox.append(checkbox);
    customCheckbox.append(spanElement);
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


export function addTask(value){
    let newTask = createElement(value);
    UI_ElEMENTS.HIGH_INPUT_CONTEINER.append(newTask)
    UI_ElEMENTS.HIGH_INPUT_FIELD.value = "";
}