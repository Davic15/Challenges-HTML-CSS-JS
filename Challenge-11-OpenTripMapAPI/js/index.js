/* Variable definition */
const apiKey = "5ae2e3f221c38a28845f05b67528fbe4cbcfa02035fddf302b67610a";
const btnSearch = document.getElementById("btn-search");
const txtSearch = document.getElementById("search-text");
const spanInformation = document.getElementById("information");
const divPlaces = document.getElementById("places");
const divPlacesInformation = document.getElementById("places-information")

/* Event listeners */
btnSearch.addEventListener("click", searchCity);

/* Main program */

function searchCity() {
    divPlaces.innerHTML = "";
    if (txtSearch.value){
        let valueTxtSearch = txtSearch.value;
        fetch(`https://api.opentripmap.com/0.1/en/places/geoname?name="${valueTxtSearch}"&apikey=${apiKey}`)
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
    fetch(`https://api.opentripmap.com/0.1/en/places/radius?radius=1000&lon=${information.lon}&lat=${information.lat}&apikey=${apiKey}`)
    .then(res => {
        if (!res.ok){
            throw Error("There is an error with the server");
        } else {
            return res.json();
        }
    })
    .then (data => {
        for (const element of data.features){
            showPlaces(element.properties.xid);
        }
    })
    .catch(err => {
        console.log(err);
    });
}

function showPlaces(information) {
    fetch(`https://api.opentripmap.com/0.1/en/places/xid/${information}?apikey=${apiKey}`)
    .then(res => {
        if (!res.ok){
            throw Error("There is an error with the server");
        } else {
            return res.json();
        }
    })
    .then (data => {
        if (data.wikipedia_extracts && data.wikipedia && data.preview.source) {
            divPlaces.innerHTML += `
            <div class="column-data">
                <img src="${data.preview.source}" alt="${data.wikipedia_extracts.title}">
                <div class="wiki">
                    <h3>${data.wikipedia_extracts.title}</h3>
                    <p>${data.wikipedia_extracts.text}</p>
                </div>
            </div>
            <br><hr>
            `;
        }
        
    })
    .catch(err => {
        console.log(err);
    });
}