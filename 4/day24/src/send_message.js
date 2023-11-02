import { UI_EL, PERMANENTS } from "./vies.js";
import { getCookie } from "./cookie.js";
import { renderMessage } from "./render.js";

const sendMessageToServer = (message) => {
    const socket = new WebSocket(`${PERMANENTS.API_WEB_SOCKET}${getCookie(PERMANENTS.TOKEN)}`);
    socket.onopen = () => socket.send(JSON.stringify({ text: message}));
    socket.onmessage = (event) => {
        renderMessage(JSON.parse(event.data))
    };
}

export const sendMessage = (event) => {
    event.preventDefault();
    sendMessageToServer(UI_EL.MESSAGE_TEXT.value);
    UI_EL.MESSAGE_TEXT.value = PERMANENTS.EMPTY;
}