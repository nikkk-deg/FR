import { UI_EL, PERMANENTS } from "./vies.js";
import { setCookie } from "./cookie.js";


export const getUser = async (token) => {
    const response = await fetch(PERMANENTS.API_GET_NAME, {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json; charset=utf-8',
            Authorization: `Bearer ${token}`,
        },
    });
    const valueRequest = await response.json();
}

export const login = event => {
    event.preventDefault();
    getUser(UI_EL.CODE_FROM_EMAIL.value);
    setCookie(PERMANENTS.TOKEN, UI_EL.CODE_FROM_EMAIL.value);
    UI_EL.CODE_FROM_EMAIL.value = PERMANENTS.EMPTY;
}