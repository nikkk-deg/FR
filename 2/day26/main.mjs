import data from './data.json' assert {type: "json"};
import { UI_ELEMENTS, PERMANENTS } from './view.js';


export function writeSavedCities(){
    data.savedCities.forEach(element => {
        let newEl = document.createElement('div');
        let savedCity = document.createElement('div');
        let deleteButton = document.createElement('img');
        deleteButton.setAttribute('src', './images/close_icon.png');
        deleteButton.className = PERMANENTS.DELETE_BUTTON;
        deleteButton.addEventListener('click', ()=>{
            deleteButton.parentElement.remove();
        })
        savedCity.className = PERMANENTS.SAVED_CITIES_CLASS;
        savedCity.textContent = element.name;
        newEl.append(deleteButton);
        newEl.append(savedCity);
        UI_ELEMENTS.LIST_FAV_CITIES.append(newEl);
    })
}