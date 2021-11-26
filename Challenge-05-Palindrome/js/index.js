const buttonEl = document.querySelector(".calculate");
buttonEl.addEventListener("click", calculatePalindrome);
let temp = 0;
let reversedNumber = 0;
let currentDigit = 0;
let copyNumber = 0;

function calculatePalindrome() {
    for (let i = 10; i < 100; i++) {
        for (let j = i; j < 100; j++) {
            checkPalindrome(i * j);
        }
    }
}

function checkPalindrome(number) {
    //console.log(number)
    copyNumber = number;
    do {
       currentDigit = copyNumber % 10;
       reversedNumber = (reversedNumber * 10) + currentDigit;
       copyNumber = copyNumber / 10; 
    }while (copyNumber != 0)
    if (number == reversedNumber) {
        console.log(number);
    }
    currentDigit = 0;
    reversedNumber = 0;
    copyNumber = 0;
}