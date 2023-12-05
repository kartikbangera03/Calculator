function display(stringValue){
    if(Number.isInteger(parseFloat(stringValue))){
        displayResult.textContent = parseInt(stringValue);
    }else{
    displayResult.textContent = stringValue;
    }
}


function add(num1 , num2) {
    value1 = parseFloat(num1);
    value2 = parseFloat(num2);
    let sum = (value1 + value2).toFixed(2) ;
    console.log(`Adding ${value1}  ${value2} = ${sum}`);
    return sum;
}


function subtract(num1 , num2) {
    value1 = parseFloat(num1).toFixed(2);
    value2 = parseFloat(num2).toFixed(2);
    let difference = parseFloat(value1 - value2).toFixed(2);
    console.log(`Subtracting ${value1}  ${value2} = ${difference}`);
    return difference;
} 


function multiply(num1 , num2) {
    value1 = parseFloat(num1).toFixed(2);
    value2 = parseFloat(num2).toFixed(2);
    let product = parseFloat(value1 * value2).toFixed(2) ;
    console.log(`Multiplying ${value1}  ${value2} = ${product}`);
    return product;
}


function divide(num1 , num2){
    value1 = parseFloat(num1).toFixed(2);
    value2 = parseFloat(num2).toFixed(2);
    let division = parseFloat(value1 / value2).toFixed(2);
    console.log(`Dividing ${value1}  ${value2} = ${division}`);
    return division;
}


function operate(operator, num1, num2){
    switch(operator){
        case "+":
            return add(num1,num2);
            break;
        case "-":
            return subtract(num1,num2);
            break;
        case "*":
            return multiply(num1,num2);
            break;
        case "/":
            return divide(num1,num2);
            break;
    }

}


let firstNumber = '';
let operator ='';
let secondNumber= '';
let interimResult ;
let decimalStatus = false;
let operatorStatus = false;

const numberButton1 =document.querySelector(".button1") ;
const numberButton2 =document.querySelector(".button2");
const numberButton3 =document.querySelector(".button3") ;
const numberButton4 =document.querySelector(".button4");
const numberButton5 =document.querySelector(".button5") ;
const numberButton6 =document.querySelector(".button6");
const numberButton7 =document.querySelector(".button7") ;
const numberButton8 =document.querySelector(".button8");
const numberButton9 =document.querySelector(".button9") ;
const displayResult = document.querySelector(".output");

const sumButton = document.querySelector(".addButton");
const prodButton = document.querySelector(".multiplyButton");
const diviButton = document.querySelector(".divideButton");
const diffButton = document.querySelector(".subtractButton");
const resultButton = document.querySelector(".equalButton");
const resetButton = document.querySelector(".clearButton");
const decimalButton = document.querySelector(".decimal");
const deleteLastButton = document.querySelector(".deleteButton");

deleteLastButton.addEventListener('click',()=>{
    if(operatorStatus)
    {
        secondNumber = secondNumber.slice(0,-1);
        display(secondNumber);
    }else{
        firstNumber = firstNumber.slice(0,-1);
        display(firstNumber);
    }
});


decimalButton.addEventListener('click', ()=>{
    if(operatorStatus){
        if(secondNumber===''){
            secondNumber+="0."; 

        }else if(!decimalStatus){
            secondNumber+=".";
            decimalStatus = true;
        }
         
        display(secondNumber);
    }else{
        if(firstNumber===''){
            firstNumber+="0.";    
        }else if(!decimalStatus){
            firstNumber+=".";
            decimalStatus = true;
        }
        display(firstNumber);
    }
});


numberButton1.addEventListener("click", ()=>{
    let numValue = "1";
    // operatorStatus ? secondNumber+=numValue; display(secondNumber) : firstNumber+=numValue; display(firstNumber);

    if(operatorStatus){
        secondNumber+=numValue; 
        display(secondNumber);
    }else{
        firstNumber+=numValue; 
        display(firstNumber);
    }
});

numberButton2.addEventListener("click", ()=>{
    let numValue = "2";
    // operatorStatus ? secondNumber+=numValue : firstNumber+=numValue;
    if(operatorStatus){
        secondNumber+=numValue; 
        display(secondNumber);
    }else{
        firstNumber+=numValue; 
        display(firstNumber);
    }
});

numberButton3.addEventListener("click", ()=>{
    let numValue = "3";
    // operatorStatus ? secondNumber+=numValue : firstNumber+=numValue;
    if(operatorStatus){
        secondNumber+=numValue; 
        display(secondNumber);
    }else{
        firstNumber+=numValue; 
        display(firstNumber);
    }
});

numberButton4.addEventListener("click", ()=>{
    let numValue = "4";
    // operatorStatus ? secondNumber+=numValue : firstNumber+=numValue;
    if(operatorStatus){
        secondNumber+=numValue; 
        display(secondNumber);
    }else{
        firstNumber+=numValue; 
        display(firstNumber);
    }
});

numberButton5.addEventListener("click", ()=>{
    let numValue = "5";
    // operatorStatus ? secondNumber+=numValue : firstNumber+=numValue;
    if(operatorStatus){
        secondNumber+=numValue; 
        display(secondNumber);
    }else{
        firstNumber+=numValue; 
        display(firstNumber);
    }
});

numberButton6.addEventListener("click", ()=>{
    let numValue = "6";
    // operatorStatus ? secondNumber+=numValue : firstNumber+=numValue;
    if(operatorStatus){
        secondNumber+=numValue; 
        display(secondNumber);
    }else{
        firstNumber+=numValue; 
        display(firstNumber);
    }
});

numberButton7.addEventListener("click", ()=>{
    let numValue = "7";
    // operatorStatus ? secondNumber+=numValue : firstNumber+=numValue;
    if(operatorStatus){
        secondNumber+=numValue; 
        display(secondNumber);
    }else{
        firstNumber+=numValue; 
        display(firstNumber);
    }
});

numberButton8.addEventListener("click", ()=>{
    let numValue = "8";
    // operatorStatus ? secondNumber+=numValue : firstNumber+=numValue;
    if(operatorStatus){
        secondNumber+=numValue; 
        display(secondNumber);
    }else{
        firstNumber+=numValue; 
        display(firstNumber);
    }
});

numberButton9.addEventListener("click", ()=>{
    let numValue = "9";
    // operatorStatus ? secondNumber+=numValue : firstNumber+=numValue;
    if(operatorStatus){
        secondNumber+=numValue; 
        display(secondNumber);
    }else{
        firstNumber+=numValue; 
        display(firstNumber);
    }
});


sumButton.addEventListener("click", ()=>{
    let operatorValue = "+";
    decimalStatus = false;
    if(operatorStatus == false){
        operator = operatorValue;
        operatorStatus = true;
    }else if (operatorStatus == true){
        firstNumber=operate(operator, firstNumber, secondNumber);
        display(firstNumber);
        secondNumber = '';
        operator = operatorValue;
    }
});

prodButton.addEventListener("click", ()=>{
    let operatorValue = "*";
    decimalStatus = false;

    if(operatorStatus == false){
        operator = operatorValue;
        operatorStatus = true;
    }else if (operatorStatus == true){
        firstNumber=operate(operator, firstNumber, secondNumber);
        secondNumber = '';
        display(firstNumber);
        operator = operatorValue;
    }
});

diviButton.addEventListener("click", ()=>{
    let operatorValue = "/";
    decimalStatus = false;
    if(operatorStatus == false){
        operator = operatorValue;
        operatorStatus = true;
    }else if (operatorStatus == true){
        firstNumber=operate(operator, firstNumber, secondNumber);
        secondNumber = '';
        display(firstNumber);
        operator = operatorValue;
    }
});

diffButton.addEventListener("click", ()=>{
    let operatorValue = "-";
    decimalStatus = false;
    if(operatorStatus == false){
        operator = operatorValue;
        operatorStatus = true;
    }else if (operatorStatus == true){
        firstNumber=operate(operator, firstNumber, secondNumber);
        secondNumber = '';
        display(firstNumber);
        operator = operatorValue;
    }
});



resultButton.addEventListener("click", ()=>{
    display(operate(operator, firstNumber, secondNumber));
    operator = '';
    firstNumber = '';
    secondNumber = '';
    operatorStatus = false;
    decimalStatus = false;
});

resetButton.addEventListener('click',()=>{
    operator = '';
    firstNumber = '';
    secondNumber = '';
    operatorStatus = false;
    decimalStatus = false;
    display("0");
});







