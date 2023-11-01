import { renderOldMessages } from "./render.js";
import { PERMANENTS, UI_EL } from "./vies.js";

let messagesCount = PERMANENTS.ADD_MESSAGES;

export const chatScroll = () => {
    let scroll = UI_EL.CHAT_PARENT.scrollTop;
    if(scroll <= 0 && messages<300){
        renderOldMessages(messagesCount);
        messagesCount += PERMANENTS.ADD_MESSAGES;
        if(messagesCount >= 300){
            document.getElementById('chatEnd').style.display = "block";
        }
    }
}
