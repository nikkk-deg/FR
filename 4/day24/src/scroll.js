import { getCookie } from "./cookie";
import { createMessage, getMesArray } from "./render.js";
import { PERMANENTS, UI_EL } from "./vies.js";

const rebderMessage = (message) => {
    UI_EL.CHAT.prepend(createMessage(message));
    const space = document.createElement(PERMANENTS.DIV)
    space.className = UI_EL.SPACE_CLASS;
    UI_EL.CHAT.prepend(space);
}

let position = PERMANENTS.COUNT;

const addOldMessages = async () => {
    let messages = await getMesArray(getCookie(PERMANENTS.TOKEN));
    for(let i = position; i<position+PERMANENTS.COUNT; i++){
        rebderMessage(messages[i]);
    }
    position += PERMANENTS.COUNT;
    UI_EL.CHAT_PARENT.scrollTop =  1100;
}

export const chatScroll = () => {
    let scroll = UI_EL.CHAT_PARENT.scrollTop;
    if(scroll <= 0 && position<=300){
        addOldMessages();
    }
}
