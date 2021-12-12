const priceEl = document.getElementById("price");
const baseEl = document.getElementById("base");
const currencyEl = document.getElementById("currency");
const timeEl = document.getElementById("time-check")


fetch("https://api.cryptonator.com/api/ticker/btc-usd")
    .then(response => response.json())
    .then(data => {
        console.log(data)
        console.log(data.ticker.price)
        priceEl.innerText = data.ticker.price;
        baseEl.innerText = data.ticker.base;
        currencyEl.innerText = data.ticker.target;
        let date = new Date(data.timestamp * 1000).toLocaleTimeString('en-GB')
        timeEl.innerText = `Checked: ${date}`;
    })