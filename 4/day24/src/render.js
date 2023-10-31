import { UI_EL, PERMANENTS } from "./vies.js";
import { getCookie, setCookie } from "./cookie.js";
import { getUser } from "./login_chat.js";

const createMessageFromHistory = (message)=> {
    const templateContent = UI_EL.TEMPLATE_MESSAGE.content.cloneNode(true);
    const templateRoot = document.createElement('div');
    const textOfMessage = templateContent.querySelector('.text');
    const userName = templateContent.querySelector('.userName');
    userName.textContent = message.user.name;
    textOfMessage.textContent = message.text;
    if(message.text.length < 10){
        templateRoot.style.maxWidth = "max-content";
    }
    if(message.user.email == getCookie('email')){
        templateRoot.className = UI_EL.MY_MESS_CLASS;
    }else{
        templateRoot.className = UI_EL.USER_MESSAGE_CLASS;
    }
    const timeOfMessage = templateContent.querySelector('.time');
    timeOfMessage.textContent = message.createdAt.substr(11,5);       
    templateRoot.append(templateContent);
    return templateRoot;    
}

export const renderMessageFromHistory = (message) => {
    UI_EL.CHAT.append(createMessageFromHistory(message));
    const space = document.createElement('div');
    space.className = UI_EL.SPACE_CLASS;
    UI_EL.CHAT.append(space);
    UI_EL.CHAT_PARENT.scrollTop =  1100;
}




const renderMessagesFromHistory = async () => {
    let messagesArray = [];
    let messageHistory = await getHistoreOfMessages(getCookie('code'));
    messageHistory.messages.slice().reverse().forEach((item)=>{
        messagesArray.push(item);
    })
    return(messagesArray);
}

export const redArr = async (number) => {
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
    getUser(getCookie('code'));
    redArr(0);
}