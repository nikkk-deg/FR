// send email
import { UI_EL, PERMANENTS } from "./vies.js";
import { setCookie } from "./cookie.js";

const postData =async (emailAddress) => {
    const data = {
        email: `${emailAddress}`
    }
    const response = await fetch(PERMANENTS.API_GET_CODE, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json; charset=utf-8',
        },
        body: JSON.stringify(data)
    })
    return response.json(); 
}

export const sendMail = (event) => {
    event.preventDefault();
    if(UI_EL.MAIL.value){
        postData(UI_EL.MAIL.value);
        setCookie(PERMANENTS.EMAIL, UI_EL.MAIL.value);
        UI_EL.MAIL.value = PERMANENTS.EMPTY;
    }
}
