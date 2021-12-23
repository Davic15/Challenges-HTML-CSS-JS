
const divEl = document.getElementById("nuevo");

fetch("https://api.opendota.com/api/constants/hero_names")
//fetch("https://api.opendota.com/api/heroes/")
//fetch("https://api.opendota.com/api/heroes/1/itemPopularity")
//fetch("https://api.opendota.com/api/matches/6335980577")
    .then(res => {
        if(!res.ok) {
            throw Error("Error en el servidor");
        } else {
            return res.json();
        }
    })
    .then(data => {
        let img = "https://api.opendota.com" + data.npc_dota_hero_abaddon.img;
        divEl.innerHTML = `
            <h3>${data.npc_dota_hero_abaddon.localized_name}</h3>
            <p>Type: ${data.npc_dota_hero_abaddon.attack_type}</p>
            <img src="${img}" alt="${data.npc_dota_hero_abaddon.localized_name}" />
        `
        console.log(data);
        console.log(data.npc_dota_hero_abaddon.localized_name)
        console.log(data.npc_dota_hero_abaddon.attack_type)
        console.log(data.npc_dota_hero_abaddon.img)

    })
    .catch(err => {
        console.log(err);
    });
