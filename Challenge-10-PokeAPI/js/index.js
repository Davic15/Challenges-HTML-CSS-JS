/*
    DOM elements selection
*/
const btnSearchPokemonEl = document.getElementById("btn-search-pokemon");
const txtSearchPokemonEl = document.getElementById("txt-name-pokemon");
const headerDescriptionEl = document.getElementById("description");
const pokemonInformationEl = document.getElementById("pokemon-information");

btnSearchPokemonEl.addEventListener("click", pokemonSearch);

function pokemonSearch() {
    console.log(txtSearchPokemonEl.value)
    console.log("hi")
}

function getImagePokemon (pokemonName) {
    fetch(`https://pokeapi.co/api/v2/pokemon/${pokemonName}`)
    .then (res => {
        if(!res.ok){
            throw Error("There is an error with the server");
        } else {
            return(res.json());
        }
    })
    .then (data => {
        console.log(data.sprites.front_default)
        pokemonInformationEl.innerHTML += `
        <p>${pokemonName}</p><br>
        <img src="${data.sprites.front_default}" />
        `;
    })
    .catch (err => {
        console.log(err);
    })
}


fetch("https://pokeapi.co/api/v2/pokedex/kanto")
    .then(res => {
        if(!res.ok){
            throw Error("There is an error with the server");
        } else {
            return (res.json());
        }
    })
    .then(data => {
        console.log(data);
        headerDescriptionEl.innerText = data.descriptions[3].description;
        for (const element of data.pokemon_entries){
            getImagePokemon(element.pokemon_species.name);
        }
    })
    .catch(err => {
        console.log(err);
    });