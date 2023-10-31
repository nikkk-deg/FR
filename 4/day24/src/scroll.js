import { redArr } from "./render.js";
import { UI_EL } from "./vies.js";


UI_EL

let number = 20;
export const chatScroll = () => {
    let scroll = UI_EL.CHAT_PARENT.scrollTop;
    if(scroll <= 0 && number<300){
        redArr(number);
        number += 20;
        if(number >= 300){
            document.getElementById('chatEnd').style.display = "block";
        }
    }
}
