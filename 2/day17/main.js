import { UI_ElEMENTS } from "./view.js";
import {addTask} from "./functions.js";

UI_ElEMENTS.HIGH_INPUT_CONTEINER.addEventListener('submit', (event)=>{
    event.preventDefault();
    addTask(UI_ElEMENTS.HIGH_INPUT_FIELD.value);
})
