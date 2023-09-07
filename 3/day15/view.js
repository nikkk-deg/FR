// SC-search city
import img1 from './images/favourites_icon_red.png';
import img2 from './images/favourites_icon.png';
import img3 from './images/close_icon.png'

export const UI_ELEMENTS = {
    SC_FORM: document.getElementById("search_city"),
    SС_FIELD: document.getElementById("search_city_field"),
    CURRENT_CITY: document.getElementById("current_cyty_info"),
    TEMP: document.getElementById("temperature"),
    DEGREES: document.getElementById("degrees"),
    WEATHER_ICON: document.getElementById("weather_icon"),
    CURRENT_FAV_CITY: document.getElementById("city_to_favourites"),
    ADD_TO_FAV: document.getElementById("add_to_favourites"),
    FAV_CITIES: document.getElementById("favourites_cities"),
    LIST_FAV_CITIES: document.getElementById("list_of_favourites_cities"),
    FEELS_LIKE_DEGREES: document.getElementById("weather_feels_like"),
    SUNRISE_TIME: document.getElementById("sunrise_time"),
    SUNSET_TIME: document.getElementById("sunset_time"),
    TIME1: document.getElementById("time1"),
    TEMP_INFO1: document.getElementById("Temperature_info1"),
    WEATHER_ICON1: document.getElementById("weather_info_icon1"),
    FEELS_LIKE_DEGREES1: document.getElementById("feels_like_temp1"),
    TIME2: document.getElementById("time2"),
    TEMP_INFO2: document.getElementById("Temperature_info2"),
    WEATHER_ICON2: document.getElementById("weather_info_icon2"),
    FEELS_LIKE_DEGREES2: document.getElementById("feels_like_temp2"),
    TIME3: document.getElementById("time3"),
    TEMP_INFO3: document.getElementById("Temperature_info3"),
    WEATHER_ICON3: document.getElementById("weather_info_icon3"),
    FEELS_LIKE_DEGREES3: document.getElementById("feels_like_temp3"),
}

export const PERMANENTS = {
    SERVER_URL: 'http://api.openweathermap.org/data/2.5/weather',
    API_KEY: 'f660a2fb1e4bad108d6160b7f58c555f',//придется потом менять
    SAVED_CITIES_CLASS: 'saved_city',
    DELETE_BUTTON: 'delete_button',
    ERROR_MASSEGE_1: "Предельное количесиво добавленных локаций",
    SRC: 'src',
    IMAGE_FAVOURITE: img1,
    IMAGE_NOT_FAVOURITE: img2,
    MOVE_DOWN_ICON: '-28px',
    ERROR_CITY_NOT_FOUND: 'Город не найден!!!',
    EMPTY: '',
    CLOSE_ICON: img3,
    BASE_URL_FORECAST: "http://api.openweathermap.org/data/2.5/forecast",
    METRIC: `&units=metric`
}