const digitButtons = document.querySelectorAll(".number");
const operators = document.querySelectorAll(".operator");
const equalButton = document.querySelector("#equal");
const rebootButton = document.querySelector("#reboot");
const display = document.getElementById("visual-display");
const addButton = document.querySelector("#add");
const subtractButton = document.querySelector("#sub");
const multiplyButton = document.querySelector("#multip");
const divideButton = document.querySelector("#division");
const decimalButton = document.getElementById("decimal");
let firstOperand = 0;
let secondOperand = null;
let operator = null;
let isNewNumber = true;
let lastAction = false;

addButton.addEventListener('click', () => handleOperator('+'));
subtractButton.addEventListener('click', () => handleOperator('-'));
multiplyButton.addEventListener('click', () => handleOperator('*'));
divideButton.addEventListener('click', () => handleOperator('/'));

function updateDisplay(value) {
    display.textContent = value;
}

function add(a, b) {
    return a + b;
}

function subtract(a, b) {
    return a - b;
}

function multiply(a, b) {
    return a * b;
}

function divide(a, b) {
    return b === 0 ? 'Error' : a / b;
}

function operate(firstOperand, operator, secondOperand) {
    switch (operator) {
        case "+":
            return add(firstOperand, secondOperand);
        case "-":
            return subtract(firstOperand, secondOperand);
        case "*":
            return multiply(firstOperand, secondOperand);
        case "/":
            if(secondOperand===0){
                return "ERROR";
            }else{
            return divide(firstOperand, secondOperand)
        };
        default:
            return 0;
    }
}

digitButtons.forEach(button => {
    button.addEventListener("click", () => {
        if (isNewNumber) {
            display.textContent = button.textContent;
            isNewNumber = false;
        } else {
            display.textContent += button.textContent;
        }
    });
});

decimalButton.addEventListener("click", () => {
    if (isNewNumber) {
        display.textContent = "0.";
        isNewNumber = false;
    } else if (!display.textContent.includes('.')) {
        display.textContent += '.';
    }
});

operators.forEach(button => {
    button.addEventListener("click", () => {
        if (operator === null) { 
            firstOperand = parseFloat(display.textContent);
        } else if (secondOperand === null) { 
            secondOperand = parseFloat(display.textContent);
            let result = operate(firstOperand, operator, secondOperand);
            updateDisplay(result);
            firstOperand = result;
        }
        operator = button.textContent;
        isNewNumber = true;
    });
});

equalButton.addEventListener("click", () => {
    if (!isNewNumber || !lastAction) {
        secondOperand = parseFloat(display.textContent);
    }
    let result = operate(firstOperand, operator, secondOperand);
    updateDisplay(result);
    firstOperand = result;
    isNewNumber = true;
    lastAction = true;
});

rebootButton.addEventListener("click", () => {
    lastAction=false;
    updateDisplay("0");
    firstOperand=0;
    secondOperand=0;
    operator=null;
    isNewNumber=true;
});

function handleOperator(selectedOperator) {
    if (operator && !isNewNumber) {
        secondOperand = parseFloat(display.textContent);
        let result = operate(firstOperand, operator, secondOperand);
        updateDisplay(result);
        firstOperand = result;
    } else if (!operator || isNewNumber) {
        firstOperand = parseFloat(display.textContent);
    }
    operator = selectedOperator;
    isNewNumber = true;
    lastAction = false;
}
//En una proxima actualizacion del codigo....
document.addEventListener("keydown",(event)=>{
    const key=event.key;
    if(!isNaN(key)&&key!==" "){

    }
})