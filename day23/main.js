
let  changeFirstLetter = string => {
    if(string[0] == 's'){
        return `S${string.slice(1)}`
    }
    return string;
}
let showVerticalMessage = (string) => {
    string = changeFirstLetter(string);
    for(let letter of string.slice(0,7)){
        console.log(letter);
    }
}

let string = 'strada123';

showVerticalMessage(string);