import { UI_ELEMENTS, PERMANENTS } from './view.js';
import { changeCurrentCity, getURL } from './main.js';

export let savedCities =  ["Delhi", "London", "Beijing", "Amsterdam"]

 const createDeleteButton = () =>{
    let deleteButton = document.createElement('img');
    deleteButton.setAttribute('src', './images/close_icon.png');
    deleteButton.className = PERMANENTS.DELETE_BUTTON;
    deleteButton.addEventListener('click', ()=>{
        deleteButton.parentElement.remove();
        let index = savedCities.indexOf(deleteButton.parentElement.lastChild.textContent);
        if(index != -1){
          savedCities.splice(index, 1);
        }
        deleteAll();
        render();
        UI_ELEMENTS.ADD_TO_FAV.setAttribute('src', './images/favourites_icon.png');
    })
    return deleteButton;
}

const createNewElement = (element) =>{
    let savedCity = document.createElement('div');
    savedCity.className = PERMANENTS.SAVED_CITIES_CLASS;
        savedCity.textContent = element;
        savedCity.addEventListener('click', ()=>{
          changeCurrentCity(getURL(element))
        })
    return savedCity;
}

export const render = () => {
    savedCities.forEach(element => {
        let newEl = document.createElement('div');
        newEl.append(createDeleteButton());
        newEl.append(createNewElement(element));
        UI_ELEMENTS.LIST_FAV_CITIES.append(newEl);
    })
}

const deleteAll = () =>{
  UI_ELEMENTS.LIST_FAV_CITIES.innerHTML = ""
}
export const appendToFav = city =>{
  if (!(savedCities.includes(city))){
    savedCities.push(city);
    deleteAll();
    render();
  } 
}

export const isFullFavList = arr => {
  if (arr.length >= 5){
    return false;
  }return true;
}
export const isFavCityPressLike = city =>{
  if(savedCities.includes(city)){
    let index = savedCities.indexOf(city);
    if(index != -1){
      savedCities.splice(index, 1);
    }
    deleteAll();
    render();
  }
}