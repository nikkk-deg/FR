import { UI_EL} from "./src/vies.js";
import { sendMail } from "./src/send_email.js";
import { sendMessage } from "./src/send_message.js";
import { render } from "./src/render.js";
import { login, getUser  } from "./src/login_chat.js";
import { changeName } from "./src/change_name.js";
import { logout } from "./src/logout.js";
import { chatScroll } from "./src/scroll.js";



// login in chat
UI_EL.LOGIN_IN_CHAT.addEventListener('submit', login);

// logout from chat
UI_EL.LOGOUT_BUTTON.addEventListener('click', logout);

//send email
UI_EL.MAIL_FORM.addEventListener('submit', sendMail);

// send message
UI_EL.SEND_MESSAGE.addEventListener("submit", sendMessage);

// change name
UI_EL.CHANGE_NAME.addEventListener('submit', changeName);

//chat scroll
UI_EL.CHAT_PARENT.addEventListener('scroll', chatScroll);

// first render
window.addEventListener('load', render)
