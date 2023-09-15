export const UI_EL = {
    DATE_FIELD: document.getElementById("date_field"),
    DATE_ICON:document.getElementById("dateIcon"),
    SEARCH_BUTTON:document.getElementById("search_button"),
    YEARS :document.getElementById("years"),
    YEARS_TXT:document.getElementById("yearsTxt"),
    DAYS :document.getElementById("days"),
    DAYS_TXT :document.getElementById("daysTxt"),
    HOURS :document.getElementById("hours"),
    HOURS_TXT :document.getElementById("hoursTxt"),
    DATE_FORM :document.getElementById("dateForm"),
    
};

export const changeTxtYear = years => {
    if(years > 20){
        years %= 10;
    }
    switch (years) {
        case 1:
            UI_EL.YEARS_TXT.textContent = 'год';
            break;
        case 2:
        case 3:
        case 4:
            UI_EL.YEARS_TXT.textContent = 'года';       
            break;
    
        default:
            UI_EL.YEARS_TXT.textContent = 'лет';
            break;
    }
}

export const changeTxtDays = days => {
    if(days > 20){
        days %= 10;
    }
    switch (days) {
        case 1:
            UI_EL.DAYS_TXT.textContent = 'день';
            break;
        case 2:
        case 3:
        case 4:
            UI_EL.DAYS_TXT.textContent = 'дня';
            break;
  
        default:
            UI_EL.DAYS_TXT.textContent = 'дней';
            break;
    }
}

export const changeTxtHours = hours => {
    if(hours > 20){
        hours %= 10;
    }
    switch (hours) {
        case 1:
            UI_EL.HOURS_TXT.textContent = 'час';
            break;
        case 2:
        case 3:
        case 4:
            UI_EL.HOURS_TXT.textContent = 'часа';
            break;
  
        default:
            UI_EL.HOURS_TXT.textContent = 'часов';
            break;
    }
}