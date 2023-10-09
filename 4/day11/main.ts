const UI_EL = {
    SETTINGS_BUTTON: document.getElementById("settings_conteiner"),
    EXIT_BUTTON: document.getElementById("exit_conteiner"),
    CHAT: document.getElementById("chat"),
    MY_MESSAGE: document.querySelectorAll("my_message"),
    ANOTHER_MESSAGE: document.querySelectorAll("another_message"),
    SEND_MESSAGE_FORM: document.getElementById("send_message_form") as HTMLElement,
    INPUT_TEXT_FIELD: document.getElementById("input_text_field") as HTMLInputElement,
    SEND_MESSAGE_BUTTON: document.getElementById("send_message"),
    SETTINGS_WINDOW: document.getElementById("popup_settings"),
    CHANGE_NAME_FORM: document.getElementById("change_name_form"),
    INPUT_NAME_FIELD: document.getElementById("input_name_field"),
    SEND_NAME: document.getElementById("send_name"),
    MY_MESSAGE_TEMP: document.getElementById("myMessage") as HTMLTemplateElement,
}

const createMyMessage = (text: string)=> {
    const templateContent = UI_EL.MY_MESSAGE_TEMP.content.cloneNode(true) as HTMLElement;
    const templateRoot = document.createElement('div') as HTMLElement;
    templateRoot.className = 'my_message';
    const textOfMessage = templateContent.querySelector('.text') as HTMLElement;
    textOfMessage.textContent = text;
    const timeOfMessage = templateContent.querySelector('.time') as HTMLElement;
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

const sendMyMessage = (text: string) => {
    UI_EL.CHAT?.append(createMyMessage(text));
}

UI_EL.SEND_MESSAGE_FORM.addEventListener("submit", event => {
    event.preventDefault();
    sendMyMessage(UI_EL.INPUT_TEXT_FIELD.value);
});