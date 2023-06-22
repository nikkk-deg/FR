function calc(operation = 'mul', firstNumber = 0, secondNumber = 1){
    switch(operation){
        case 'sum':
            return firstNumber + secondNumber;
        case 'mul':
            return firstNumber * secondNumber;
        case 'del':
            return firstNumber/secondNumber;
        case 'min':
            return firstNumber - secondNumber;
    }
}

result = calc('sum', 1000, 4)
console.log(result)