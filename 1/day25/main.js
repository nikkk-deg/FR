// function getNumberArray(number){
//     let arr = [];
//     for (let i=0; i<number; i++){
//         arr.push(i);
//     }
//     return arr;
// }


// array1 = getNumberArray(11);
// array1.forEach(element => {
//     console.log(`Number is ${element}`)
// });


// array = ['cat', 'dog', 'elephant', 'tiger', 'lion'];

// const indexSeven = array.findIndex(string => string.length > 7);
// console.log(array[indexSeven]);

// let arr = [1, 11, -2, 3, -10, 4];
// console.log(arr.filter(number => number < 0));

// let arr = [1, 11, -2, 3, -10, 4];
// console.log(arr.map(number => {
//     if(number < 0){
//         return number * (-1);
//     }
//     return number;
// }))

let arr = [1, 11, -2, 3, -10, 4];

console.log(arr.sort((number1, number2) => number2 - number1));

