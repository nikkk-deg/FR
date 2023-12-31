const IDS = {
    settings: "settings",
    BUTTONSETTINGS: "buttonSETTINGS",
    LOGOUT: "logout",
    BUTTONLOGIN: "buttonLOGIN",
    CHATCONTENT: "chatContent",
    CHAT: "chat",
    MYMESSAGE: "myMessage",
    TEXT: "text",
    TIME: "time",
    USERMESSAGE: "userMessage",
    MESSAGETEMPLATE: "messageTemplate",
    SENDFORM: "sendForm",
    TEXTFIELD: "textField",
    BUTTONSEND: "buttonSEND",
    SETTINGSPOPUP: "settingsPOPUP",
    SETTINGSPOPUP_BODY: "settingsPOPUP_body",
    SETTINGSPOPUP_TEXT: "settingsPOPUP_text",
    CLOSEPOPUP: "closePOPUP",
    SETTINGSPOPUP_CHANGENAMEFORM: "settingsPOPUP_changeNameForm",
    SETTINGSPOPUP_TEXTFIELD: "settingsPOPUP_textField",
    SETTINGSPOPUP_BUTTONSEND: "settingsPOPUP_buttonSEND",
    LOGINPOPUP: "loginPOPUP",
    LOGINPOPUP_BODY: "loginPOPUP_body",
    LOGINPOPUP_INPUTMAILFORM: "loginPOPUP_inputMailForm",
    LOGINPOPUP_TEXTFIELD: "loginPOPUP_textField",
    LOGINPOPUP_BUTTONSEND: "loginPOPUP_buttonSEND",
    LOGINPOPUP_BUTTONINPUT: "loginPOPUP_buttonInput",
    CONFIRMPOPUP: "confirmPOPUP",
    CONFIRMPOPUP_BODY: "confirmPOPUP_body",
    CONFIRMPOPUP_CODE: "confirmPOPUP_code",
    CONFIRMPOPUP_INPUTCODEFORM: "confirmPOPUP_inputCodeForm",
    CONFIRMPOPUP_TEXTFIELD: "confirmPOPUP_textField",
    CONFIRMPOPUP_BUTTONSEND: "confirmPOPUP_buttonSEND",
    SPACE: "space",
    NAME_IN_CHAT: "nameInChat",
}

export const UI_EL = {
    MAIL_FORM: document.getElementById(IDS.LOGINPOPUP_INPUTMAILFORM),
    MAIL: document.getElementById(IDS.LOGINPOPUP_TEXTFIELD),
    TEMPLATE_MESSAGE: document.getElementById(IDS.MESSAGETEMPLATE),
    MY_MESS_CLASS: IDS.MYMESSAGE,
    USER_MESSAGE_CLASS: IDS.USERMESSAGE,
    CHAT: document.getElementById(IDS.CHAT),
    MESSAGE_TEXT: document.getElementById(IDS.TEXTFIELD),
    SEND_MESSAGE: document.getElementById(IDS.SENDFORM),
    SPACE_CLASS: IDS.SPACE,
    LOGIN_IN_CHAT: document.getElementById(IDS.CONFIRMPOPUP_INPUTCODEFORM),
    CODE_FROM_EMAIL: document.getElementById(IDS.CONFIRMPOPUP_TEXTFIELD),
    CHANGE_NAME: document.getElementById(IDS.SETTINGSPOPUP_CHANGENAMEFORM),
    NEW_NAME: document.getElementById(IDS.SETTINGSPOPUP_TEXTFIELD),
    NAME_IN_CHAT: document.getElementById(IDS.NAME_IN_CHAT),
    LOGOUT_BUTTON: document.getElementById(IDS.LOGOUT),
    CHAT_PARENT: document.getElementById(IDS.CHATCONTENT),


}

export const PERMANENTS = {
    API_GET_CODE: "https://edu.strada.one/api/user",
    API_CHANGE_NAME: "https://edu.strada.one/api/user",
    API_GET_NAME: "https://edu.strada.one/api/user/me",
    API_GET_MESSAGES: "https://edu.strada.one/api/messages/",
}