function showTime() {
    console.log("Page is fully loaded");
    let date = new Date();
    // 0 - 23
    let h = date.getHours();
    // 0 - 59
    let m = date.getMinutes();
    // 0 - 59
    let s = date.getSeconds();
    let session = "AM";

    if (h == 0) {
        h = 12;
    }

    if (h > 12) {
        h = h - 12;
        session = "PM";
    }

    h = (h < 10) ? "0" + h : h;
    m = (m < 10) ? "0" + m : m;
    s = (s < 10) ? "0" + s : s;

    let time = h + ":" + m + ":" + s + " " + session;
    document.getElementById("myClockDisplay").innerText = time;
    document.getElementById("myClockDisplay").textContent = time;

    setTimeout(showTime, 1000);
}

showTime();