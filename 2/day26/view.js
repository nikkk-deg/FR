// SC-search city
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
}

export const PERMANENTS = {
    SERVER_URL: 'http://api.openweathermap.org/data/2.5/weather',
    API_KEY: 'f660a2fb1e4bad108d6160b7f58c555f',//придется потом менять
    SAVED_CITIES_CLASS: 'saved_city'

}