
// Variables;
var firstOperator=0;
var secondOperator=0;
var mOperation=["+","-","*","/","="];
//
//Buttons
const num1=document.querySelector("#button1");
const num2=document.querySelector("#button2");
const num3=document.querySelector("#button3");
const num4=document.querySelector("#button4");
const num5=document.querySelector("#button5");
const num6=document.querySelector("#button6");
const num7=document.querySelector("#button7");
const num8=document.querySelector("#button8");
const num9=document.querySelector("#button9");
const addoperator=document.querySelector("#button+");
const suboperator=document.querySelector("#button-");
const divoperator=document.querySelector("#button/");
const muloperator=document.querySelector("#button*");
const equaloperator=document.querySelector("#button=");
const display=document.querySelector(".display");

function add(first,second){
    return first+second;
}
function substract(first,second){
    return first-second;
}
function multiply(first,second){
    return first*second;
}
function divide(first,second){
    return first/second;
}


function operate(firstoperator,operator,secondOperator){
    if(second===0&&operator==="/")
        return "ERROR";
    switch(operator){
        case "+":
            return first+second;
        case"-":
            return first-second;
        case"*":
            return first*second;
        case"/":
            return first/second;
    }
}
