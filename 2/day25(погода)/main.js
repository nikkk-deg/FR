import { UI_ELEMENTS, PERMANENTS } from "./view.js";


const getURL = cityName =>`${PERMANENTS.SERVER_URL}?q=${cityName}&appid=${PERMANENTS.API_KEY}`;

const getJSON = url => fetch(url)
    .then(response => {
        if(response.status === 404){
            throw new Error('Город не найден!');
        }
        return response.json();
    })
    .then(data => {
        change_temp(changeToFdegrees(data.main.temp));
        changeCurrentFavCity(formatCity(UI_ELEMENTS.SС_FIELD.value));
        UI_ELEMENTS.SС_FIELD.value = "";
    })
    .catch(error => alert(error));


const changeToFdegrees = degrees => Math.round(degrees-273);

const change_temp = temp => UI_ELEMENTS.TEMP.textContent = temp;

const changeCurrentFavCity = city => UI_ELEMENTS.CURRENT_FAV_CITY.textContent = city;

const formatCity = city => city.charAt(0).toUpperCase() + city.slice(1);

UI_ELEMENTS.SC_FORM.addEventListener('submit', event => {
    event.preventDefault();
    getJSON(getURL(UI_ELEMENTS.SС_FIELD.value));
    
})


