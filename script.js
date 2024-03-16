
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
function operate(first,operator,second){
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
var probsum=operate(12,"/",0);
var sum=add(12,14)
var sub=substract(13,14)
var mul=multiply(45,2)
var div=divide(45,5)
console.log(sum)
console.log(sub)
console.log(mul)
console.log(div)
const container =document.querySelector(".container");
const adding=document.createElement("p");
adding.textContent="Sum "+sum+"Sub "+sub+" MUL"+ mul+"Div "+ div+" "+probsum
                        ;
container.appendChild(adding)