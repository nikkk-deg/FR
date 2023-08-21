import { addHighTask, addLowTask } from "./functions.js";
import { render } from "./main.mjs";
import { UI_ElEMENTS } from "./view.js";

render();

UI_ElEMENTS.HIGH_INPUT_CONTEINER.addEventListener('submit', (event)=>{
    event.preventDefault();
    // addTaskInJSON(UI_ElEMENTS.HIGH_INPUT_FIELD.value);
    addHighTask(UI_ElEMENTS.HIGH_INPUT_FIELD.value);
})

UI_ElEMENTS.LOW_ADD_BUTTON.addEventListener('click', (event)=>{
    event.preventDefault();
    // addTaskInJSON(UI_ElEMENTS.LOW_INPUT_FIELD.value);
    addLowTask(UI_ElEMENTS.LOW_INPUT_FIELD.value);
})



