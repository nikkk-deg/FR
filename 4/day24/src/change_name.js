import { getCookie } from "./cookie.js";
import { UI_EL, PERMANENTS } from "./vies.js";

const getName = async (token, userName) => {
    const user = {
        'name': userName,
    }
    const response = await fetch(PERMANENTS.API_CHANGE_NAME, {
        method: 'PATCH',
        headers: {
            'Content-Type': 'application/json; charset=utf-8',
            Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify(user),
    })
    return await response.json();
}

export const changeName = (event) => {
    event.preventDefault();
    getName(getCookie(PERMANENTS.TOKEN), UI_EL.NEW_NAME.value);
    UI_EL.NEW_NAME.value = PERMANENTS.EMPTY;
}