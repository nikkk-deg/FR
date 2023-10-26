import { UI_EL, PERMANENTS } from "./vies.js";


// change name in chat
const change_name_in_chat = (name) =>  UI_EL.NAME_IN_CHAT.textContent = name;



// send email
const postData =async (mail_address) => {
    const data = {
        email: `${mail_address}`
    }
    const response = await fetch(PERMANENTS.API_GET_CODE, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json; charset=utf-8',
        },
        body: JSON.stringify(data)
    })
    return response.json(); 
}


const sendMail = (event) => {
    event.preventDefault();
    if(UI_EL.MAIL.value){
        postData(UI_EL.MAIL.value);
        UI_EL.MAIL.value = "";
    }
}

UI_EL.MAIL_FORM.addEventListener('submit', sendMail);



// send sms
const createMyMessage = (text)=> {
    const templateContent = UI_EL.TEMPLATE_MESSAGE.content.cloneNode(true);
    const templateRoot = document.createElement('div');
    templateRoot.className = UI_EL.MY_MESS_CLASS;
    const textOfMessage = templateContent.querySelector('.text');
    textOfMessage.textContent = text;
    const timeOfMessage = templateContent.querySelector('.time');
    timeOfMessage.textContent = createTime();       
    templateRoot.append(templateContent);
    return templateRoot;    
}

const createTime = () => {
    let time = new Date();
    let hours = time.getHours();
    let minutes = time.getMinutes();
    let formatedMinutes = minutes < 10 ? '0'+minutes : minutes;
    return `${hours}:${formatedMinutes}`;    
}

const sendMessage = (event) => {
    event.preventDefault();
    UI_EL.CHAT.append(createMyMessage(UI_EL.MESSAGE_TEXT.value));
    const space = document.createElement('div');
    space.className = UI_EL.SPACE_CLASS;
    UI_EL.CHAT.append(space);
    UI_EL.MESSAGE_TEXT.value = "";
}

UI_EL.SEND_MESSAGE.addEventListener("submit", sendMessage);

// save code from mail in cookie
function getCookie(name) {
    let matches = document.cookie.match(new RegExp(
      "(?:^|; )" + name.replace(/([\.$?*|{}\(\)\[\]\\\/\+^])/g, '\\$1') + "=([^;]*)"
    ));
    return matches ? decodeURIComponent(matches[1]) : undefined;
  }

const saveCodeInCookie = (value) =>{
    let name = "code";
    // let value = UI_EL.CODE_FROM_EMAIL.value;
    document.cookie = encodeURIComponent(name) + '=' + encodeURIComponent(value);
}

UI_EL.LOGIN_IN_CHAT.addEventListener("submit", saveCodeInCookie);

// login in chat
const getUser = async (token) => {
    const response = await fetch(PERMANENTS.API_GET_NAME, {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json; charset=utf-8',
            Authorization: `Bearer ${token}`,
        },
    });
    const valueRequest = await response.json();
    change_name_in_chat(valueRequest.name);
}

const login = event => {
    event.preventDefault();
    saveCodeInCookie(UI_EL.CODE_FROM_EMAIL.value);
    getUser(UI_EL.CODE_FROM_EMAIL.value);
    UI_EL.CODE_FROM_EMAIL.value = "";
}

UI_EL.LOGIN_IN_CHAT.addEventListener('submit', login);


// change name in settings

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
    const valueRequest = await response.json();
    console.log(valueRequest);
    change_name_in_chat(valueRequest.name);
    return valueRequest;
}


const changeName = (event) => {
    event.preventDefault();
    getName(getCookie('code'), UI_EL.NEW_NAME.value);
    UI_EL.NEW_NAME.value = "";
}

UI_EL.CHANGE_NAME.addEventListener('submit', changeName);


// render history of messages

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
const createMessageFromHistory = (message)=> {
    const templateContent = UI_EL.TEMPLATE_MESSAGE.content.cloneNode(true);
    const templateRoot = document.createElement('div');
    templateRoot.className = UI_EL.USER_MESSAGE_CLASS;
    const textOfMessage = templateContent.querySelector('.text');
    textOfMessage.textContent = message.text;
    if(message.text.length < 10){
        templateRoot.style.maxWidth = "max-content";
    }
    const timeOfMessage = templateContent.querySelector('.time');
    timeOfMessage.textContent = message.createdAt.substr(11,8);       
    templateRoot.append(templateContent);
    return templateRoot;    
}

const renderMessageFromHistory = (message) => {
    UI_EL.CHAT.append(createMessageFromHistory(message));
    const space = document.createElement('div');
    space.className = UI_EL.SPACE_CLASS;
    UI_EL.CHAT.append(space);
}


const renderMessagesFromHistory = () => {
    let message_history = getHistoreOfMessages(getCookie('code'));
    message_history.then(value =>{
        value.messages.slice().reverse().forEach((item)=>{
            renderMessageFromHistory(item);
    });
})
}




// first render
const firstRender = () => {
    console.log('производится первая загрузка страницы')
    getUser(getCookie('code'));
    renderMessagesFromHistory();
}

firstRender();



