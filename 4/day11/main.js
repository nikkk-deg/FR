var UI_EL = {
    SETTINGS_BUTTON: document.getElementById("settings_conteiner"),
    EXIT_BUTTON: document.getElementById("exit_conteiner"),
    CHAT: document.getElementById("chat"),
    MY_MESSAGE: document.querySelectorAll("my_message"),
    ANOTHER_MESSAGE: document.querySelectorAll("another_message"),
    SEND_MESSAGE_FORM: document.getElementById("send_message_form"),
    INPUT_TEXT_FIELD: document.getElementById("input_text_field"),
    SEND_MESSAGE_BUTTON: document.getElementById("send_message"),
    SETTINGS_WINDOW: document.getElementById("popup_settings"),
    CHANGE_NAME_FORM: document.getElementById("change_name_form"),
    INPUT_NAME_FIELD: document.getElementById("input_name_field"),
    SEND_NAME: document.getElementById("send_name"),
    MY_MESSAGE_TEMP: document.getElementById("myMessage"),
};
var createMyMessage = function (text) {
    var templateContent = UI_EL.MY_MESSAGE_TEMP.content.cloneNode(true);
    var templateRoot = document.createElement('div');
    templateRoot.className = 'my_message';
    var textOfMessage = templateContent.querySelector('.text');
    textOfMessage.textContent = text;
    var timeOfMessage = templateContent.querySelector('.time');
    timeOfMessage.textContent = createTime();
    templateRoot.append(templateContent);
    return templateRoot;
};
var createTime = function () {
    var time = new Date();
    var hours = time.getHours();
    var minutes = time.getMinutes();
    var formatedMinutes = minutes < 10 ? '0' + minutes : minutes;
    return "".concat(hours, ":").concat(formatedMinutes);
};
var sendMyMessage = function (text) {
    var _a;
    (_a = UI_EL.CHAT) === null || _a === void 0 ? void 0 : _a.append(createMyMessage(text));
};
UI_EL.SEND_MESSAGE_FORM.addEventListener("submit", function (event) {
    event.preventDefault();
    sendMyMessage(UI_EL.INPUT_TEXT_FIELD.value);
});
