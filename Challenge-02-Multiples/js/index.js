
const buttonEl = document.getElementById("calculate");
const resultEl = document.querySelector(".cal-result");
const textEl = document.getElementById("value-calculate");

buttonEl.addEventListener("click", calculateMultiples);

function calculateMultiples() {
    let counter = 0;
    let acu = 0;
    if (textEl.value){
        counter = textEl.value;
    } else {
        textEl.value = 10;
        counter = 10;
    }
    for (let i = 1; i < counter; i++){
        if (i % 3 == 0 || i % 5 == 0){
            acu = acu + i;
        }
    }
    resultEl.textContent = acu;
}
