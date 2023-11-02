import { UI_EL, PERMANENTS } from "./vies.js";
import { getCookie } from "./cookie.js";
import { getUser } from "./login_chat.js";


const createText = (message) => {
    const templateContent = UI_EL.TEMPLATE_MESSAGE.content.cloneNode(true);
    templateContent.querySelector(PERMANENTS.SELECTOR_TEXT).textContent = message.text;
    templateContent.querySelector(PERMANENTS.SELECTOR_USER).textContent = message.user.name;
    templateContent.querySelector(PERMANENTS.SELECTOR_TIME).textContent = message.createdAt.substr(11,5);
    return templateContent;
}


export const createMessage = (message)=> {
    const text = createText(message);
    const newMessage = document.createElement(PERMANENTS.DIV);
    newMessage.style.maxWidth = message.text.length < 10 ? PERMANENTS.MIN_WIDTH : PERMANENTS.MAX_WIDTH;
    newMessage.className = message.user.email == getCookie(PERMANENTS.EMAIL) ? UI_EL.MY_MES : UI_EL.USER_MES;
    newMessage.append(text);
    return newMessage;    
}

export const renderMessage = (message) => {
    UI_EL.CHAT.append(createMessage(message));
    const space = document.createElement(PERMANENTS.DIV)
    space.className = UI_EL.SPACE_CLASS;
    UI_EL.CHAT.append(space);
   
}

export const getAllMessages = async (token) => {
    const response = await fetch(PERMANENTS.API_GET_MESSAGES, {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json; charset=utf-8',
            Authorization: `Bearer ${token}`,
        },
    });
    console.log('используется промис')
    return await response.json();    
}



export const getMesArray = async (token) => {
    let response = await getAllMessages(token);
    let messagesArray = [];
    response.messages.slice().reverse().forEach((item)=>{
        messagesArray.push(item);
    })
    return(messagesArray);
}

let response = await getMesArray(getCookie(PERMANENTS.TOKEN));
console.log(response);

export const renderAllMessages = async (position) => {
    let arr = await getMesArray(getCookie(PERMANENTS.TOKEN));
    UI_EL.CHAT.innerHTML = PERMANENTS.EMPTY;
    if(arr.length - position - PERMANENTS.COUNT >= 0){
        for(let i = (arr.length - position - PERMANENTS.COUNT); i < arr.length; i++){
            renderMessage(arr[i]);
        }
    }
    UI_EL.CHAT_PARENT.scrollTop = 1e10;
 }

export const render = () => {
    getUser(getCookie(PERMANENTS.TOKEN));
    renderAllMessages(PERMANENTS.START);
}