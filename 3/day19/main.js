import { UI_EL, changeTxtDays, changeTxtYear, changeTxtHours } from "./view.js";
import millisecondsToHours from 'date-fns/millisecondsToHours'


const getTimeFromDate = date => new Date(date).getTime() - new Date().getTime();

const getHoursFromTime = time => millisecondsToHours(time) + new Date().getTimezoneOffset()/60;

const getTimeArr = hours => {
    let timeArr = [];
    timeArr.push(Math.floor(hours/(24*365)));
    timeArr.push(Math.floor((hours - timeArr[0]*24*365)/24));
    timeArr.push(hours - timeArr[0]*24*365 - timeArr[1]*24);
    return timeArr;
}

const changeTimeTxt = arr => {
    changeTxtYear(arr[0]);
    changeTxtDays(arr[1]);
    changeTxtHours(arr[2]);
}

const changeUI = arr => {
    UI_EL.YEARS.textContent = arr[0];
    UI_EL.DAYS.textContent = arr[1];    
    UI_EL.HOURS.textContent = arr[2];   
    changeTimeTxt(arr);
}



class ValidationDateError extends Error {
    constructor(message){
        super(message);
        this.name = 'validationDateError';
    }
}

const readDate = (time, date) =>{
    let invalidDate = (new Date(time) - new Date()) > 0;
    if(!invalidDate){
        changeUI([0,0,0]);
        throw new ValidationDateError("Введена дата в прошлом.");
    }
    changeUI(getTimeArr(getHoursFromTime(date)));
}


UI_EL.DATE_FORM.addEventListener('submit', (()=>{
    let date = getTimeFromDate((UI_EL.DATE_FIELD.value));
    try{
        readDate(UI_EL.DATE_FIELD.value, date);   
    }catch(err){
        if(err instanceof ValidationDateError){
            alert('Некорректные данные: '+ err.message)
        }else{
            throw err;
        }
    }    
}))
