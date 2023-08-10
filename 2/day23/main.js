// // fetch('https://jsonplaceholder.typicode.com/todos/1').then(response =>response.json()).then(data => console.log(data));


// function getJSON(id){
//     return fetch(`https://jsonplaceholder.typicode.com/todos/${id}`)
//         .then(response => {
//             if(response.status === 404){
//                 throw new Error('Запись не найдена');
//             }
//             return response.json();
//         })
// }


// function getResult(id){try{
//     getJSON(id)
//     .then(data => console.log(data))
// }catch(error){
//     console.error(error);
// }
// }

// getResult(-5);

let name_form = document.getElementById('get_name_form');
let inputField = document.getElementById('name_field');



name_form.addEventListener('submit', (event)=>{
    event.preventDefault();
    let name = inputField.value;
    let url = getURL(name);
    getJSON(url);
})

function getURL(name_1){
    return `https://api.genderize.io?name=${name_1}`;
}

function getJSON(url){
    return fetch(url).then(response => response.json().then(data => alert(data.gender)))
}


