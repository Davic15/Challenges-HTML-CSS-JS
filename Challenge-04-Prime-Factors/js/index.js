const buttonEl = document.querySelector(".calculate");
let resultEl = document.querySelector(".result");
buttonEl.addEventListener("click", primeNumbers);

let val = 13195;
let array = [];
function primeNumbers() {
    let counter = 0;
    for(let i = 1; i <= val; i++){
        for(let j = 1; j <= i; j++){
            if (i % j == 0) {
                counter++;
            }
        }
        if (counter == 2){
            array.push(i)
        }
        counter = 0;
    } 

    for(let i = 0; i < array.length; i++){
        if (val % array[i] == 0){
            val = val / array[i];
            resultEl.textContent += " " + array[i];

        }
        else {
            continue;
        }
    }
}
