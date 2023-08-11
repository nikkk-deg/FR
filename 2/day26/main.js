import { UI_ELEMENTS, PERMANENTS } from "./view.js";
import { writeSavedCities } from "./main.mjs";

let isAddButtonPress = false;
const getURL = cityName =>`${PERMANENTS.SERVER_URL}?q=${cityName}&appid=${PERMANENTS.API_KEY}`;

const changeToFdegrees = degrees => Math.round(degrees-273);

const change_temp = temp => UI_ELEMENTS.TEMP.textContent = temp;

const changeCurrentFavCity = city => UI_ELEMENTS.CURRENT_FAV_CITY.textContent = city;

const changeWeatherIcon = data => {
    UI_ELEMENTS.WEATHER_ICON.setAttribute('src', `https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`);
    UI_ELEMENTS.ADD_TO_FAV.style.marginTop = '-28px'
}

const getJSON = url => fetch(url)
    .then(response => {
        if(response.status === 404){
            throw new Error('Город не найден!');
        }
        return response.json();
    })
    .then(data => {
        console.log(data);
        change_temp(changeToFdegrees(data.main.temp));
        changeCurrentFavCity(data.name);
        changeWeatherIcon(data);        
        UI_ELEMENTS.SС_FIELD.value = "";
        UI_ELEMENTS.ADD_TO_FAV.setAttribute('src', './images/favourites_icon.png');
        isAddButtonPress = false;

    })
    .catch(error => alert(error));

    
UI_ELEMENTS.SC_FORM.addEventListener('submit', event => {
    event.preventDefault();
    getJSON(getURL(UI_ELEMENTS.SС_FIELD.value));
  
})

UI_ELEMENTS.ADD_TO_FAV.addEventListener('click', ()=>{
    if (!isAddButtonPress){
        UI_ELEMENTS.ADD_TO_FAV.setAttribute('src', './images/favourites_icon_red.png');
        isAddButtonPress = true;
    }else{
        UI_ELEMENTS.ADD_TO_FAV.setAttribute('src', './images/favourites_icon.png');
        isAddButtonPress = false;
    }
    
})

writeSavedCities();   


