import data from './data.json' assert {type: "json"};

export function showJSON(){
    let jsonString = JSON.stringify(data.users)
    alert(jsonString);
}