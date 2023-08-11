import { UI_ELEMENTS, PERMANENTS } from "./view.js";
import { render, isFullFavList, appendToFav, savedCities, isFavCityPressLike} from "./data.js";

let isAddButtonPress = false;

export const getURL = cityName =>`${PERMANENTS.SERVER_URL}?q=${cityName}&appid=${PERMANENTS.API_KEY}`;

const changeToFdegrees = degrees => Math.round(degrees-273);

const change_temp = temp => UI_ELEMENTS.TEMP.textContent = temp;

const changeCurrentFavCity = city => UI_ELEMENTS.CURRENT_FAV_CITY.textContent = city;

const changeWeatherIcon = data => {
    UI_ELEMENTS.WEATHER_ICON.setAttribute('src', `https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`);
    UI_ELEMENTS.ADD_TO_FAV.style.marginTop = '-28px'
}

const firstRender = () =>{
    changeCurrentCity(getURL(UI_ELEMENTS.CURRENT_FAV_CITY.textContent));
}

export const changeCurrentCity = url => fetch(url)
    .then(response => {
        if(response.status === 404){
            throw new Error('Город не найден!');
        }
        return response.json();
    })
    .then(data => {
        change_temp(changeToFdegrees(data.main.temp));
        changeCurrentFavCity(data.name);
        changeWeatherIcon(data);        
        UI_ELEMENTS.SС_FIELD.value = "";
        if(savedCities.includes(data.name)){
            UI_ELEMENTS.ADD_TO_FAV.setAttribute('src', './images/favourites_icon_red.png');
        }else{
            UI_ELEMENTS.ADD_TO_FAV.setAttribute('src', './images/favourites_icon.png');
        }
        isAddButtonPress = false;

    })
    .catch(error => alert(error));

    
UI_ELEMENTS.SC_FORM.addEventListener('submit', event => {
    event.preventDefault();
    changeCurrentCity(getURL(UI_ELEMENTS.SС_FIELD.value));
  
})

UI_ELEMENTS.ADD_TO_FAV.addEventListener('click', ()=>{
    if(savedCities.includes(UI_ELEMENTS.CURRENT_FAV_CITY.textContent)){
        console.log('удаляю задачу которая уже в избранном');
        isFavCityPressLike(UI_ELEMENTS.CURRENT_FAV_CITY.textContent);
        isAddButtonPress = true;
    }
    if (!isAddButtonPress){
        UI_ELEMENTS.ADD_TO_FAV.setAttribute('src', './images/favourites_icon_red.png');
        isAddButtonPress = true;
        if (isFullFavList(savedCities)){
            appendToFav(UI_ELEMENTS.CURRENT_FAV_CITY.textContent);
        }else{
            alert(PERMANENTS.ERROR_MASSEGE_1);
            UI_ELEMENTS.ADD_TO_FAV.setAttribute('src', './images/favourites_icon.png');
            isAddButtonPress = false;
        }
        
        
    }else{
        
        UI_ELEMENTS.ADD_TO_FAV.setAttribute('src', './images/favourites_icon.png');
        isAddButtonPress = false;
    }
    
})

firstRender();
render();