const createEl = (text) => {
    const templateRoot = document.createElement('div'); 
    templateRoot.className = 'my_message';
    const templateContent = myMessage.content.cloneNode(true);
    templateRoot.append(templateContent);
    templateRoot.firstChild.nextSibling.textContent = text;
    let time = new Date();
    let hours = time.getHours();
    let minutes = time.getMinutes();
    let formatedMinutes = minutes < 10 ? '0'+minutes : minutes;
    templateRoot.firstChild.nextSibling.nextSibling.nextSibling.textContent = `${hours}:${formatedMinutes}`;
    const chat = document.getElementById('prosloika');
    chat.append(templateRoot);
}


const submit = document.getElementById('send_message_form');
submit.addEventListener('submit', event => {
    event.preventDefault();
    const inputField = document.getElementById('input_text_field');
    alert(inputField.value);
    createEl(inputField.value);
})

