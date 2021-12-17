/*
    DOM elements selection
*/
const btnSearchPokemonEl = document.getElementById("btn-search-pokemon");
const txtSearchPokemonEl = document.getElementById("txt-name-pokemon");


btnSearchPokemonEl.addEventListener("click", pokemonSearch);

function pokemonSearch() {
    console.log(txtSearchPokemonEl.value)
    console.log("hi")
}



fetch("https://pokeapi.co/api/v2/pokemon/pikachu/")
    .then(res => {
        if(!res.ok){
            throw Error("There is an error with the server");
        } else {
            return (res.json());
        }
    })
    .then(data => {
        console.log(data)
    })
    .catch(err => {
        console.log(err);
    })