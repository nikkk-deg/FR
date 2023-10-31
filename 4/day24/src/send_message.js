import { UI_EL, PERMANENTS } from "./vies.js";
import { getCookie, setCookie } from "./cookie.js";
import { renderMessageFromHistory } from "./render.js";

const sendMesToServer = (message) => {
    const socket = new WebSocket(`wss://edu.strada.one/websockets?${getCookie('code')}`);
    socket.onopen = ()=> socket.send(JSON.stringify({ text: message}));
    socket.onmessage = function(event) {renderMessageFromHistory(JSON.parse(event.data))};
}

export const sendMessage = (event) => {
    event.preventDefault();
    sendMesToServer(UI_EL.MESSAGE_TEXT.value);
    UI_EL.MESSAGE_TEXT.value = "";
}