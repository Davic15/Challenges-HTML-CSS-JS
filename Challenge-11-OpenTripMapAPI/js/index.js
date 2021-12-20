/* Variable definition */
const apiKey = "5ae2e3f221c38a28845f05b67528fbe4cbcfa02035fddf302b67610a";
const btnSearch = document.getElementById("btn-search");
const txtSearch = document.getElementById("search-text");
const spanInformation = document.getElementById("information");
const divPlaces = document.getElementById("places");

/* Event listeners */
btnSearch.addEventListener("click", searchCity);

/* Main program */

function searchCity() {
    if (txtSearch.value){
        let valueTxtSearch = txtSearch.value;
        fetch(`http://api.opentripmap.com/0.1/en/places/geoname?name="${valueTxtSearch}"&apikey=${apiKey}`)
        .then(res => {
            if (!res.ok){
                spanInformation.innerText = "There is an error with the server!";
                throw Error("There is an error with the server");
            } else {
                return res.json();
            }
        })
        .then (data => {
            spanInformation.innerText = "Place found!";
            loadPlaces(data)
        })
        .catch(err => {
            console.log(err);
        });
    } else {
        spanInformation.innerText = "Type a city";
        console.log("Type a city!")
    }
}

function loadPlaces(information) {
    console.log(information)
    fetch(`https://api.opentripmap.com/0.1/en/places/radius?radius=1000&lon=${information.lon}&lat=${information.lat}&apikey=${apiKey}`)
    .then(res => {
        if (!res.ok){
            throw Error("There is an error with the server");
        } else {
            return res.json();
        }
    })
    .then (data => {
        console.log(data);
        //console.log(data.features[1].properties.name);
        for (const element of data.features){
            console.log(element.properties.xid);
            showPlaces(element.properties.xid);
        }
    })
    .catch(err => {
        console.log(err);
    });
}

function showPlaces(information) {
    console.log(information)
    fetch(`https://api.opentripmap.com/0.1/en/places/xid/${information}?apikey=${apiKey}`)
    .then(res => {
        if (!res.ok){
            throw Error("There is an error with the server");
        } else {
            return res.json();
        }
    })
    .then (data => {
        console.log(data);
        console.log(data.wikipedia_extracts);
        console.log(data.wikipedia)
        console.log(data.preview.source)
    })
    .catch(err => {
        console.log(err);
    })
}