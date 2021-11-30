"use strict";

/*
    Variable definition.
*/
// input/output button
const input = document.getElementById("input");
// number buttons
const number = document.querySelectorAll(".numbers div");
// operators buttons
const operator = document.querySelectorAll(".operators div");
// equal button
const result = document.getElementById("result");
// clear button
const clear = document.getElementById("clear");
// flag to keep an eye on what output is displayed
let resultDisplayed = false;

/*
    Adding click handlers to number buttons
*/

for (let i = 0; i < number.length; i++) {
    number[i].addEventListener("click", function(e) {
        // storing current input string and its last character in variables - used later
        let currentString = input.innerHTML;
        let lastChar = currentString[currentString.length -1];

        // if result is not displayed, just keep adding
        if (resultDisplayed === false) {
            input.innerHTML += e.target.innerHTML;
        } else if (resultDisplayed === true && lastChar === "+" || lastChar === "-" || lastChar === "×" || lastChar === "÷"){
            /* 
                if result is currently displayed and user pressed an operator we need to keep on adding to the string for next
                operation
            */
            resultDisplayed = false;
            input.innerHTML += e.target.innerHTML;
        } else {
            /*
                if result is currently displayed and user pressed a number we need to clear the input string
                and add the new input to the start the new operation
            */
           resultDisplayed = false;
           input.innerHTML = "";
           input.innerHTML += e.target.innerHTML;
        }
    });
}

/* 
    Adding click handlers to operator buttons
*/

for (let i = 0; i < operator.length; i++) {
    operator[i].addEventListener("click", function(e) {
        // storing current input string and its last character in variables - used later
        let currentString = input.innerHTML;
        let lastChar = currentString[currentString.length -1];
        // if last character entered is an operator, replace it with the currently pressed one
        if (lastChar === "+" || lastChar === "-" || lastChar === "×" || lastChar === "÷") {
            let newString = currentString.substring(0, currentString.length -1) + e.target.innerHTML;
            input.innerHTML = newString;
        } else if (currentString.length == 0) {
            // if first key pressed is an operator, don't do anything
            console.log("enter a number first");
        } else {
            // else just add the operator pressed to the input
            input.innerHTML += e.target.innerHTML;
        }
    });
}

/*
    On click of equal button
*/

result.addEventListener("click", function() {
    let inputString = input.innerHTML;
    let numbers = inputString.split(/\+|\-|\×|\÷/g);
    let operators = inputString.replace(/[0-9]|\./g, "").split("");

    let divide = operators.indexOf("÷");
    while (divide != -1) {
        numbers.splice(divide, 2, numbers[divide] / numbers[divide + 1]);
        operators.splice(divide, 1);
        divide = operators.indexOf("÷");
    }

    let multiply = operators.indexOf("×");
    while (multiply != -1) {
        numbers.splice(multiply, 2, numbers[multiply] * numbers[multiply + 1]);
        operators.splice(multiply, 1);
        multiply = operators.indexOf("×");
    }

    let substract = operators.indexOf("-");
    while (substract != -1) {
        numbers.splice(substract, 2, numbers[substract] - numbers[substract + 1]);
        operators.splice(substract, 1);
        substract = operators.indexOf("-");
    }

    let add = operators.indexOf("+");
    while (add != -1) {
        numbers.splice(add, 2, parseFloat(numbers[add]) + parseFloat(numbers[add + 1]));
        operators.splice(add, 1);
        add = operators.indexOf("+");
    }

    input.innerHTML = numbers[0];
    resultDisplayed = true;
});

clear.addEventListener("click", function() {
    input.innerHTML = "";
});