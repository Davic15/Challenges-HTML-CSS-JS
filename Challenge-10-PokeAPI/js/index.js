/*
    DOM elements selection
*/
const btnSearchPokemonEl = document.getElementById("btn-search-pokemon");
const txtSearchPokemonEl = document.getElementById("txt-name-pokemon");
const headerDescriptionEl = document.getElementById("description");
const pokemonInformationEl = document.getElementById("pokemon-information");
const containerDexEl = document.getElementById("container-dex");

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
        let urlIMg = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-v/black-white/animated/${data.id}.gif`;
        containerDexEl.innerHTML += `
            <div class="card">
                <div class="header">
                    <h3 class="pokemon-name">${data.name}</h3>
                </div>
                <div class="container">
                    <img src="${urlIMg}" />
                    <p>Experience: ${data.base_experience}</p>
                    <p>Hp: ${data.stats[0].base_stat}</p>
                    <p>Attack: ${data.stats[1].base_stat}</p>
                    <p>Defense: ${data.stats[2].base_stat}</p>
                    <p>Special: ${data.stats[3].base_stat}</p>
                </div>
            </div>
        `;
    })
    .catch (err => {
        console.log(err);
    });
}


function loadPokeCards() {
    fetch("https://pokeapi.co/api/v2/pokedex/kanto")
    .then(res => {
        if(!res.ok){
            throw Error("There is an error with the server");
        } else {
            return (res.json());
        }
    })
    .then(data => {
        console.log(data)
        headerDescriptionEl.innerText = data.descriptions[3].description;
        for (const element of data.pokemon_entries){
            getImagePokemon(element.pokemon_species.name);
        }
    })
    .catch(err => {
        console.log(err);
    });
}

loadPokeCards();
