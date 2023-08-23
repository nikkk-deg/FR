import { UI_ELEMENTS, PERMANENTS } from "./view.js";

let isAddButtonPress = false;
let savedCities =  ["Delhi", "London", "Beijing", "Washington"];

const getURL = cityName =>`${PERMANENTS.SERVER_URL}?q=${cityName}&appid=${PERMANENTS.API_KEY}`;

const changeToFdegrees = degrees => Math.round(degrees-273);

const change_temp = temp => UI_ELEMENTS.TEMP.textContent = temp;

const changeCurrentFavCity = city => UI_ELEMENTS.CURRENT_FAV_CITY.textContent = city;

const changeWeatherIcon = data => {
    UI_ELEMENTS.WEATHER_ICON.setAttribute(PERMANENTS.SRC, `https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`);
    UI_ELEMENTS.ADD_TO_FAV.style.marginTop = PERMANENTS.MOVE_DOWN_ICON;
}

 const createDeleteButton = () =>{
    let deleteButton = document.createElement('img');
    deleteButton.setAttribute('src', PERMANENTS.CLOSE_ICON);
    deleteButton.className = PERMANENTS.DELETE_BUTTON;
    deleteButton.addEventListener('click', ()=>{
        deleteButton.parentElement.remove();
        let index = savedCities.indexOf(deleteButton.parentElement.lastChild.textContent);
        if(index != -1){
          savedCities.splice(index, 1);
        }
        deleteAll();
        render();
        UI_ELEMENTS.ADD_TO_FAV.setAttribute('src', PERMANENTS.IMAGE_NOT_FAVOURITE);
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

const appendToFav = city =>{
  if (!(savedCities.includes(city))){
    savedCities.push(city);
    deleteAll();
    render();
  } 
}

const isFullFavList = arr => {
  if (arr.length >= 5){
    return false;
  }return true;
}

const isFavCityPressLike = city =>{
  if(savedCities.includes(city)){
    let index = savedCities.indexOf(city);
    if(index != -1){
      savedCities.splice(index, 1);
    }
    deleteAll();
    render();
  }
}

UI_ELEMENTS.ADD_TO_FAV.addEventListener('click', ()=>{

    if(savedCities.includes(UI_ELEMENTS.CURRENT_FAV_CITY.textContent)){
        isFavCityPressLike(UI_ELEMENTS.CURRENT_FAV_CITY.textContent);
        isAddButtonPress = true;
    }
    
    if (!isAddButtonPress){
        UI_ELEMENTS.ADD_TO_FAV.setAttribute('src', PERMANENTS.IMAGE_FAVOURITE);
        isAddButtonPress = true;
        if (isFullFavList(savedCities)){
            appendToFav(UI_ELEMENTS.CURRENT_FAV_CITY.textContent);
        }else{
            alert(PERMANENTS.ERROR_MASSEGE_1);
            UI_ELEMENTS.ADD_TO_FAV.setAttribute('src', PERMANENTS.IMAGE_NOT_FAVOURITE);
            isAddButtonPress = false;
        }       
        
    }else{
        
        UI_ELEMENTS.ADD_TO_FAV.setAttribute('src', PERMANENTS.IMAGE_NOT_FAVOURITE);
        isAddButtonPress = false;
    }    
})

UI_ELEMENTS.SC_FORM.addEventListener('submit', event => {
    event.preventDefault();
    changeCurrentCity(getURL(UI_ELEMENTS.SС_FIELD.value));
  
})

const changeCurrentCity = url => fetch(url)
    .then(response => {
        if(response.status === 404){
            throw new Error(PERMANENTS.ERROR_CITY_NOT_FOUND);
        }
        return response.json();
    })
    .then(data => {
        change_temp(changeToFdegrees(data.main.temp));
        changeCurrentFavCity(data.name);
        changeWeatherIcon(data);        
        UI_ELEMENTS.SС_FIELD.value = PERMANENTS.EMPTY;
        if(savedCities.includes(data.name)){
            UI_ELEMENTS.ADD_TO_FAV.setAttribute('src', PERMANENTS.IMAGE_FAVOURITE);
        }else{
            UI_ELEMENTS.ADD_TO_FAV.setAttribute('src', PERMANENTS.IMAGE_NOT_FAVOURITE);
        }
        isAddButtonPress = false;

    })
    .catch(error => alert(error));


const deleteAll = () =>{
    UI_ELEMENTS.LIST_FAV_CITIES.innerHTML = ""
}

const firstRender = () =>{
    changeCurrentCity(getURL(UI_ELEMENTS.CURRENT_FAV_CITY.textContent));
}

const render = () => {
    savedCities.forEach(element => {
        let newEl = document.createElement('div');
        newEl.append(createDeleteButton());
        newEl.append(createNewElement(element));
        UI_ELEMENTS.LIST_FAV_CITIES.append(newEl);
    })
}


firstRender();
render();