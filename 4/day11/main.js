import { UI_EL, PERMANENTS } from "./vies.js";


// отправка mail
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


const sendMail = () => {
    if(UI_EL.MAIL.value){
        postData(UI_EL.MAIL.value);
    }
}

UI_EL.MAIL_FORM.addEventListener('submit', sendMail);



// отправка смс
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
}

UI_EL.SEND_MESSAGE.addEventListener("submit", sendMessage);