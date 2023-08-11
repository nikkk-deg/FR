import data from './data.json' assert {type: "json"};
import { UI_ELEMENTS, PERMANENTS } from './view.js';

export function writeSavedCities(){
    data.savedCities.forEach(element => {
        let newEl = document.createElement('div');
        newEl.className = PERMANENTS.SAVED_CITIES_CLASS;
        newEl.textContent = element.name;
        UI_ELEMENTS.LIST_FAV_CITIES.append(newEl);
    })
}