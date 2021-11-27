    const appendTens = document.getElementById("tens");
    const appendSeconds = document.getElementById("seconds");
    const buttonStart = document.getElementById("button-start");
    const buttonStop = document.getElementById("button-stop");
    const buttonReset = document.getElementById("button-reset");
    let interval;
    let seconds = 00;
    let tens = 00;

    buttonStart.addEventListener("click", function() {
        clearInterval(interval);
        interval = setInterval(startTimer, 10);
    });

    buttonStop.addEventListener("click", function() {
        clearInterval(interval);
    });

    buttonReset.addEventListener("click", function() {
        clearInterval(interval);
        tens = "00";
        seconds = "00";
        appendTens.innerHTML = tens;
        appendSeconds.innerHTML = seconds;
    });

    function startTimer() {
        tens++;
        if (tens <= 9){
            appendTens.innerHTML = "0" + tens;
        }
        if (tens > 9) {
            appendTens.innerHTML = tens;
        }
        if (tens > 99) {
            console.log("seconds");
            seconds++;
            appendSeconds.innerHTML = "0" + seconds;
            tens = 0;
            appendTens.innerHTML = "0" + 0;
        }
        if (seconds > 9) {
            appendSeconds.innerHTML = seconds;
        }
    }