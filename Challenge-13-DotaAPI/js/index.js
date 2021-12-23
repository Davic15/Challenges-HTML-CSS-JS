
const divEl = document.getElementById("container-heroes");

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
        divEl.innerHTML += `
            <div class="card">
                <div class="header">
                    <h3 class="hero-name">${data.npc_dota_hero_abaddon.localized_name}</h3>
                </div>
                <div class="container">
                <div>
                <img src="${img}" alt="${data.npc_dota_hero_abaddon.localized_name}" />
                </div>
                    
                    <p>Type Hero: ${data.npc_dota_hero_abaddon.attack_type}</p>
                    <p>Attack: ${data.npc_dota_hero_abaddon.attack_type}</p>
                    <p>Defense: ${data.npc_dota_hero_abaddon.attack_type}</p>
                    <p>Mobility: ${data.npc_dota_hero_abaddon.move_speed}</p>
                    <p>Roles: ${data.npc_dota_hero_abaddon.roles.join(", ")}</p>
                </div>
            </div>

            <div class="card">
                <div class="header">
                    <h3 class="hero-name">${data.npc_dota_hero_abaddon.localized_name}</h3>
                </div>
                <div class="container">
                    <img src="${img}" alt="${data.npc_dota_hero_abaddon.localized_name}" />
                    <p>Type Hero: ${data.npc_dota_hero_abaddon.attack_type}</p>
                    <p>Attack: ${data.npc_dota_hero_abaddon.attack_type}</p>
                    <p>Defense: ${data.npc_dota_hero_abaddon.attack_type}</p>
                    <p>Mobility: ${data.npc_dota_hero_abaddon.move_speed}</p>
                    <p>Roles: ${data.npc_dota_hero_abaddon.roles.join(", ")}</p>
                </div>
            </div>

            <div class="card">
                <div class="header">
                    <h3 class="hero-name">${data.npc_dota_hero_abaddon.localized_name}</h3>
                </div>
                <div class="container">
                    <img src="${img}" alt="${data.npc_dota_hero_abaddon.localized_name}" />
                    <p>Type Hero: ${data.npc_dota_hero_abaddon.attack_type}</p>
                    <p>Attack: ${data.npc_dota_hero_abaddon.attack_type}</p>
                    <p>Defense: ${data.npc_dota_hero_abaddon.attack_type}</p>
                    <p>Mobility: ${data.npc_dota_hero_abaddon.move_speed}</p>
                    <p>Roles: ${data.npc_dota_hero_abaddon.roles.join(", ")}</p>
                </div>
            </div>

            <div class="card">
                <div class="header">
                    <h3 class="hero-name">${data.npc_dota_hero_abaddon.localized_name}</h3>
                </div>
                <div class="container">
                    <img src="${img}" alt="${data.npc_dota_hero_abaddon.localized_name}" />
                    <p>Type Hero: ${data.npc_dota_hero_abaddon.attack_type}</p>
                    <p>Attack: ${data.npc_dota_hero_abaddon.attack_type}</p>
                    <p>Defense: ${data.npc_dota_hero_abaddon.attack_type}</p>
                    <p>Mobility: ${data.npc_dota_hero_abaddon.move_speed}</p>
                    <p>Roles: ${data.npc_dota_hero_abaddon.roles.join(", ")}</p>
                </div>
            </div>

            <div class="card">
                <div class="header">
                    <h3 class="hero-name">${data.npc_dota_hero_abaddon.localized_name}</h3>
                </div>
                <div class="container">
                    <img src="${img}" alt="${data.npc_dota_hero_abaddon.localized_name}" />
                    <p>Type Hero: ${data.npc_dota_hero_abaddon.attack_type}</p>
                    <p>Attack: ${data.npc_dota_hero_abaddon.attack_type}</p>
                    <p>Defense: ${data.npc_dota_hero_abaddon.attack_type}</p>
                    <p>Mobility: ${data.npc_dota_hero_abaddon.move_speed}</p>
                    <p>Roles: ${data.npc_dota_hero_abaddon.roles.join(", ")}</p>
                </div>
            </div>
        `
       
        console.log(data);
        console.log(data.npc_dota_hero_abaddon.localized_name)
        console.log(data.npc_dota_hero_abaddon.attack_type)
        console.log(data.npc_dota_hero_abaddon.img)

    })
    .catch(err => {
        console.log(err);
    });
