// send email
import { UI_EL, PERMANENTS } from "./vies.js";
import { getCookie, setCookie } from "./cookie.js";

const postData =async (mail_address) => {
    const data = {
        email: `${mail_address}`
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
        setCookie("email", UI_EL.MAIL.value);
        UI_EL.MAIL.value = "";
    }
}
