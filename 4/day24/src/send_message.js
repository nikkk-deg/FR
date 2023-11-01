import { UI_EL, PERMANENTS } from "./vies.js";
import { getCookie } from "./cookie.js";
import { renderMessageFromHistory } from "./render.js";

const sendMesToServer = (mes) => {
    const socket = new WebSocket(`${PERMANENTS.API_WEB_SOCKET}${getCookie(PERMANENTS.TOKEN)}`);
    socket.onopen = () => socket.send(JSON.stringify({ text: mes}));
    socket.onmessage = (event) => {
        renderMessageFromHistory(JSON.parse(event.data))
    };
}

export const sendMessage = (event) => {
    event.preventDefault();
    sendMesToServer(UI_EL.MESSAGE_TEXT.value);
    UI_EL.MESSAGE_TEXT.value = PERMANENTS.EMPTY;
}
