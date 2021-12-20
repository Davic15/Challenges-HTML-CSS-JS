/* Variable definition */
const apiKey = "5ae2e3f221c38a28845f05b67528fbe4cbcfa02035fddf302b67610a";
const btnSearch = document.getElementById("btn-search");
const txtSearch = document.getElementById("search-text");

/* Event listeners */
btnSearch.addEventListener("click", searchCity);

/* Main program */

function searchCity() {
    if (txtSearch.value){
        let valueTxtSearch = txtSearch.value;
        fetch(`http://api.opentripmap.com/0.1/en/places/geoname?name="${valueTxtSearch}"&apikey=${apiKey}`)
        .then(res => {
            if (!res.ok){
                throw Error("There is an error with the server");
            } else {
                return res.json();
            }
        })
        .then (data => {
            loadPlaces(data)
        })
        .catch(err => {
            console.log(err);
        });
    } else {
        console.log("Type a city")
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
        console.log(data)
    })
    .catch(err => {
        console.log(err);
    });
}

function showPlaces(xid) {

}