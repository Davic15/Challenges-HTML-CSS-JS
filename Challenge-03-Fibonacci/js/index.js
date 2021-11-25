const buttonEl = document.querySelector(".calculate");
let spanEl = document.querySelector(".result");
let f1 = 0, f2 = 0, f3 = 0;

buttonEl.addEventListener("click", fibonacci);

function fibonacci() {
    let sum = 0;
    let counter = -1;
    do {
        counter++;
        if (counter == 0) {
            f1 = 0;
            console.log(f1);
            continue;
        } else if (counter == 1) {
            f2 = 1
            console.log(f2);
            continue;
        }
        f3 = f1 + f2;
        f1 = f2;
        f2 = f3
        if (f3 % 2 == 0) {
            sum = sum + f3;
        } 
    } while (sum <= 4000000)
    spanEl.textContent = sum;
}

