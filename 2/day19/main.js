import { showJSON } from "./main.mjs";
import { UI_ElEMENTS } from "./view.js";
import {addHighTask, addLowTask} from "./functions.js";

UI_ElEMENTS.HIGH_INPUT_CONTEINER.addEventListener('submit', (event)=>{
    event.preventDefault();
    showJSON();
    addHighTask(UI_ElEMENTS.HIGH_INPUT_FIELD.value);
})

// UI_ElEMENTS.LOW_ADD_BUTTON.addEventListener('click', (event)=>{
//     event.preventDefault();
//     addLowTask(UI_ElEMENTS.LOW_INPUT_FIELD.value);
// })



