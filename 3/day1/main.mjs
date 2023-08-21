import data from './data.json' assert {type: "json"};
import { addTask } from './functions.js';


// export function addTaskInJSON(value, progress = 'done', priority='high'){
//     let obj = {
//         "name": value,
//         "priority": priority,
//         "progress": progress
//     }
//     var json = JSON.stringify(obj);
//     var fs = require('fs');
//     fs.writeFile('data.json', json, 'utf8', callback);
    
// }


export function render(){
    data.tasks.forEach(el => {
        addTask(el.name, el.priority);
    })
} 