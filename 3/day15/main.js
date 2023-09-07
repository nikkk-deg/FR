import { UI_ELEMENTS, PERMANENTS } from "./view.js";
import { compareAsc, format } from 'date-fns';

console.log(format(new Date(2014, 1, 11), 'yyyy-MM-dd'));

async function fetchData(url){
    const response = await fetch(url);
    
    return await response.json();
}

async function changeCurrentCity(url){
    try{
        const data = await fetchData(url);
        callFun(data);
    }catch(error){
        console.log(error);
    }
}

async function changeFutureWeatherData(url){
    try {
        const data = await fetchData(url);
        changeFutureWeather(data)
    } catch (error) {
        alert('город не найден!')
    }
}


let isAddButtonPress = false;

const createSavedCitiesArr = ()=>{
    let arr = [];
    for(let key in localStorage) {
        if (!localStorage.hasOwnProperty(key)) {
          continue;
        }
        if(key != 'current'){
            arr.push(`${key}`);
        }
      }
    return arr;
    
}

let savedCities =  createSavedCitiesArr();


const saveCurrentCity = city =>{
     localStorage.setItem('current', city);
}

const getURL = cityName =>`${PERMANENTS.SERVER_URL}?q=${cityName}&appid=${PERMANENTS.API_KEY}`;

const getURLFutureTime = cityName => `${PERMANENTS.BASE_URL_FORECAST}?q=${cityName}&appid=${PERMANENTS.API_KEY}${PERMANENTS.METRIC}`

const changeToFdegrees = degrees => Math.round(degrees-273);

const change_temp = temp => UI_ELEMENTS.TEMP.textContent = temp;

const changeCurrentFavCity = city => UI_ELEMENTS.CURRENT_FAV_CITY.textContent = city;

const changeFeelsLikeTemp = temp => UI_ELEMENTS.FEELS_LIKE_DEGREES.textContent = temp;

const getRightMinutes = time =>{
    let minutes = new Date(time).getMinutes();
    if(minutes < 10){ return '0'+ minutes.toString();}
    else {return minutes.toString();}
}

const getRightHours = (time, timeZone) =>{
    timeZone /= 3600;
    let newTime = new Date(time).getUTCHours()+timeZone;
    if(newTime>24){ return Math.abs(24-newTime);}
    if(timeZone < 0 && newTime<0){return 24+newTime;}
    else{ return newTime;}
}

const changeSunTime = (time, timeZone, obj) =>{
    obj.textContent = (`${Math.floor(getRightHours(time*1000, timeZone))}:${getRightMinutes(time*1000)}`);
}

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
        let deleteCity = deleteButton.parentElement.lastChild.textContent;
        delete localStorage[deleteCity];
        savedCities = createSavedCitiesArr();
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
          changeFutureWeatherData(getURLFutureTime(element));
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
  if (arr.length >= 12){
    return false;
  }return true;
}

const changeFutureTime = (time, timeZone) => {
    timeZone /= 3600;
    let newTime = new Date(time*1000).getUTCHours()+timeZone;
    while(newTime%3!=0){
        newTime+=1;
    }
    for(let i=1; i<=3; i++){
        newTime+=6
        if(newTime>24){
            newTime-=24;
        }
        let str = `TIME${i}`
        let pro = newTime;
        if(newTime == 24){
            pro='00';
        }
        UI_ELEMENTS[str].textContent = `${pro}:00`;
    }
}

const changeFutureWeather = (obj) => {
    for(let i=1; i<=3; i++){
        let strTemp = `TEMP_INFO${i}`;
        let strWeather =`WEATHER_ICON${i}`;
        let strFeelsLike = `FEELS_LIKE_DEGREES${i}`;
        UI_ELEMENTS[strTemp].textContent = Math.floor(obj.list[i*2].main.temp);
        UI_ELEMENTS[strFeelsLike].textContent = Math.floor(obj.list[i*2].main.feels_like);
        UI_ELEMENTS[strWeather].setAttribute(PERMANENTS.SRC, `https://openweathermap.org/img/wn/${obj.list[i*2].weather[0].icon}@2x.png`)
    }
}

const callFun = data => {
    saveCurrentCity(data.name)
    change_temp(changeToFdegrees(data.main.temp));
    changeCurrentFavCity(data.name);
    changeWeatherIcon(data); 
    changeFeelsLikeTemp(changeToFdegrees(data.main.feels_like));
    changeSunTime(data.sys.sunrise, data.timezone, UI_ELEMENTS.SUNRISE_TIME);
    changeSunTime(data.sys.sunset, data.timezone, UI_ELEMENTS.SUNSET_TIME);
    changeFutureTime(data.dt,data.timezone);
    UI_ELEMENTS.SС_FIELD.value = PERMANENTS.EMPTY;
    if(savedCities.includes(data.name)){
        UI_ELEMENTS.ADD_TO_FAV.setAttribute('src', PERMANENTS.IMAGE_FAVOURITE);
    }else{
        UI_ELEMENTS.ADD_TO_FAV.setAttribute('src', PERMANENTS.IMAGE_NOT_FAVOURITE);
    }
    isAddButtonPress = false;

}

UI_ELEMENTS.ADD_TO_FAV.addEventListener('click', ()=>{

    if(savedCities.includes(UI_ELEMENTS.CURRENT_FAV_CITY.textContent)){
        let deleteCity = UI_ELEMENTS.CURRENT_FAV_CITY.textContent;
        delete localStorage[deleteCity];
        savedCities = createSavedCitiesArr();
        deleteAll();
        render();
        isAddButtonPress = true;
    }
    
    if (!isAddButtonPress){
        UI_ELEMENTS.ADD_TO_FAV.setAttribute('src', PERMANENTS.IMAGE_FAVOURITE);
        isAddButtonPress = true;
        localStorage.setItem(UI_ELEMENTS.CURRENT_FAV_CITY.textContent, UI_ELEMENTS.CURRENT_FAV_CITY.textContent);
        savedCities =  createSavedCitiesArr();
        deleteAll();
        render();
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
    changeFutureWeatherData(getURLFutureTime(UI_ELEMENTS.SС_FIELD.value));
  
})



const deleteAll = () =>{
    UI_ELEMENTS.LIST_FAV_CITIES.innerHTML = ""
}

const firstRender = () =>{
    changeCurrentCity(getURL(localStorage.getItem('current')));
    changeFutureWeatherData(getURLFutureTime(localStorage.getItem('current')));
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