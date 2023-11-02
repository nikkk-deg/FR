// import { getCookie } from "./cookie";
// import { createMessage, getAllMessages, renderAllMessages } from "./render.js";
// import { PERMANENTS, UI_EL } from "./vies.js";



// // let messagesCount = PERMANENTS.COUNT;

// // export const chatScroll = () => {
// //     let scroll = UI_EL.CHAT_PARENT.scrollTop;
// //     if(scroll <= 0 && messagesCount<300){
// //         renderAllMessages(messagesCount);
// //         messagesCount += PERMANENTS.COUNT;
// //         if(messagesCount >= 300){
// //             document.getElementById('chatEnd').style.display = "block";
// //         }
// //     }
// // }

// const renderMessage2 = (message) => {
//     UI_EL.CHAT.prepend(createMessage(message));
//     const space = document.createElement(PERMANENTS.DIV)
//     space.className = UI_EL.SPACE_CLASS;
//     UI_EL.CHAT.prepend(space);
// }

// getAllMessages().then(response => console.log(response));

// let position = PERMANENTS.COUNT;

// const renderMessage3 = async () => {
//     let messages = await getAllMessages(getCookie(PERMANENTS.TOKEN));
//     for(let i = position; i<position+PERMANENTS.COUNT; i++){
//         renderMessage2(messages[i]);
//     }
//     position += PERMANENTS.COUNT;
//     UI_EL.CHAT_PARENT.scrollTop =  1100;
// }

// export const chatScroll = () => {
//     let scroll = UI_EL.CHAT_PARENT.scrollTop;
//     if(scroll <= 0 && position<=300){
//         renderMessage3();
//     }
// }




// // import { getCookie } from "./cookie.js";
// // import { getAllMessages, renderAllMessages } from "./render.js";
// // import { PERMANENTS, UI_EL } from "./vies.js";


// // let position = PERMANENTS.COUNT;
// // let arr = getAllMessages(getCookie(PERMANENTS.TOKEN));
// // console.log(arr.then(console.log(arr.value)))

// // export const chatScroll = async () => {
// //     let scroll = UI_EL.CHAT_PARENT.scrollTop;
// //     let messagesArr = [];
// //     for(let i = (arr.length - position - PERMANENTS.COUNT); i < arr.length; i++){
// //         messagesArr.push(arr[i]);
// //     }
// //     if(scroll <= 0){
// //         messagesArr.forEach(item => {
// //             renderAllMessages(item);
// //         })    
// //     }
// //     position += PERMANENTS.COUNT;
// // }
