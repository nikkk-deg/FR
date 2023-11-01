import { UI_EL, PERMANENTS } from "./vies.js";
import { getCookie } from "./cookie.js";
import { getUser } from "./login_chat.js";



// const createMessage = (message)=> {
//     const text = UI_EL.TEMPLATE_MESSAGE.content.cloneNode(true);
//     text.querySelector(PERMANENTS.SELECTOR_TEXT).textContent = message.text;
//     text.querySelector(PERMANENTS.SELECTOR_USER).textContent = message.user.name;
//     text.querySelector(PERMANENTS.SELECTOR_TIME).textContent = message.createdAt.substr(11,5);
//     const newMessage = document.createElement(PERMANENTS.DIV);
//     newMessage.style.maxWidth = message.text.length < 10 ? PERMANENTS.MIN_WIDTH : PERMANENTS.MAX_WIDTH;
//     newMessage.className = message.user.email == getCookie(PERMANENTS.EMAIL) ? UI_EL.MY_MES : UI_EL.USER_MES;
//     newMessage.append(text);
//     return newMessage;    
// }

const createText = (message) => {
    const templateContent = UI_EL.TEMPLATE_MESSAGE.content.cloneNode(true);
    templateContent.querySelector(PERMANENTS.SELECTOR_TEXT).textContent = message.text;
    templateContent.querySelector(PERMANENTS.SELECTOR_USER).textContent = message.user.name;
    templateContent.querySelector(PERMANENTS.SELECTOR_TIME).textContent = message.createdAt.substr(11,5);
    return templateContent;
}


const createMessage = (message)=> {
    const text = createText(message);
    const newMessage = document.createElement(PERMANENTS.DIV);
    newMessage.style.maxWidth = message.text.length < 10 ? PERMANENTS.MIN_WIDTH : PERMANENTS.MAX_WIDTH;
    newMessage.className = message.user.email == getCookie(PERMANENTS.EMAIL) ? UI_EL.MY_MES : UI_EL.USER_MES;
    newMessage.append(text);
    return newMessage;    
}

export const renderMessageFromHistory = (message) => {
    UI_EL.CHAT.append(createMessage(message));
    const space = document.createElement('div');
    space.className = UI_EL.SPACE_CLASS;
    UI_EL.CHAT.append(space);
    UI_EL.CHAT_PARENT.scrollTop =  1100;
}




const renderMessagesFromHistory = async () => {
    let messagesArray = [];
    let messageHistory = await getHistoreOfMessages(getCookie(PERMANENTS.TOKEN));
    messageHistory.messages.slice().reverse().forEach((item)=>{
        messagesArray.push(item);
    })
    return(messagesArray);
}

export const renderOldMessages = async (number) => {
    let arr = await renderMessagesFromHistory();
    UI_EL.CHAT.innerHTML = "";
    let number1 = arr.length - number - 20;
    let number2 = arr.length;
    if(number1 >= 0){
        for(let i =number1; i<number2; i++){
            renderMessageFromHistory(arr[i]);
        }
    }
 }

 const getHistoreOfMessages = async (token) => {
    const response = await fetch(PERMANENTS.API_GET_MESSAGES, {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json; charset=utf-8',
            Authorization: `Bearer ${token}`,
        },
    });
    const valueRequest = await response.json();
    return valueRequest;
}

export const render = () => {
    getUser(getCookie(PERMANENTS.TOKEN));
    renderOldMessages(PERMANENTS.FROM_THAT_MES);
}