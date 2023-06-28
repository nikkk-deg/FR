const ACTIONS = {
    ADD: 'sum',
    DIF: 'dif',
    DIV: 'div',
    MUL: 'mul',
    ERROR_MESSAGE_0: 'zero division',
    ERROR_MESSAGE_1: 'number error'
}


function chekNumberIsNumber(firstNumber, secondNumber){
    return (!(isNaN(firstNumber)) && !(isNaN(secondNumber)))
}

function returnTrueDivision(firstNumber, secondNumber){
    if(secondNumber != 0){
        return firstNumber/secondNumber;
    }else{
        return ACTIONS.ERROR_MESSAGE_0
    }
}


function calc(operation = ACTIONS.ADD, firstNumber = 0, secondNumber = 0){
    if(chekNumberIsNumber(firstNumber, secondNumber)){
        switch(operation){
            case ACTIONS.ADD:
                return firstNumber + secondNumber;
            case ACTIONS.MUL:
                return firstNumber * secondNumber;
            case ACTIONS.DIV:
                return returnTrueDivision(firstNumber, secondNumber);
            case ACTIONS.DIF:
                return firstNumber - secondNumber;
        }
    }else{
        return ACTIONS.ERROR_MESSAGE_1
    }
    
}