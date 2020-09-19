let pokemonList = [];

function filterPokemon(name, type) {
    const listaFiltrada = pokemonList.filter(pokemon => {
        const searchName = new RegExp(name, 'i');
        const checkName = searchName.test(pokemon.name);

        const listaTipos = pokemon.type;
        const checkType = type.length == 0 ? true : listaTipos.includes(type);

        return checkName && checkType
    });
    // Retorne a lista filtrada
    return listaFiltrada;

}

function sortPokemon(filteredList, sortExpression) {
    let listaOrdenada;

    switch (sortExpression) {
        case 'ID (asc)':
            listaOrdenada = filteredList.sort((pokemonA, pokemonB) => {
                return pokemonA.id - pokemonB.id;
            });
            break;

        case 'ID (desc)':
            listaOrdenada = filteredList.sort(function (pokemonA, pokemonB) {
                return pokemonA.id - pokemonB.id;
            });
            listaOrdenada.reverse();
            break;

        case 'A-Z':
            listaOrdenada = filteredList.sort((pokemonA, pokemonB) => {
                if (pokemonA.name > pokemonB.name) {
                    return 1;
                }
                if (pokemonA.name < pokemonB.name) {
                    return -1;
                }
                return 0;
            });
            break;

        case 'Z-A':
            listaOrdenada = filteredList.sort((pokemonA, pokemonB) => {
                if (pokemonA.name > pokemonB.name) {
                    return -1;
                }
                if (pokemonA.name < pokemonB.name) {
                    return 1;
                }
                return 0;
            });
            break;
        default:
            listaOrdenada = filteredList.sort((pokemonA, pokemonB) => {
                return pokemonA.id - pokemonB.id;
            });
            break;

    }
    return listaOrdenada;
}

function getPokemon(id) {
    const gottenPokemon = pokemonList.find(pokemon => pokemon.id == id);
    return gottenPokemon
    // Retorne um pokemon da lista que tenha o id enviado
}

function deletePokemon(id) {
    //let position = pokemonList.findIndex(pokemon => pokemon.id == id)
    let pokemon = getPokemon(id);
    let position = pokemonList.indexOf(pokemon)
    return pokemonList.splice(position, 1);
}

function editPokemon(id, name, hp, attack, defense, speed, specialAttack, specialDefense, types) {


    // let pokemon = getPokemon(id);
    let listaType = types.split(';');
    //let indice = listaType.indexOf("");
    listaType.pop()

    getPokemon(id).name = name;
    getPokemon(id).stats.hp = hp;
    getPokemon(id).stats.attack = attack;
    getPokemon(id).stats.defense = defense;
    getPokemon(id).stats.speed = speed;
    getPokemon(id)['stats']['sp-atk'] = specialAttack;
    getPokemon(id)['stats']['sp-def'] = specialDefense;
    getPokemon(id).type = listaType;

}


function addPokemon(name, hp, attack, defense, speed, specialAttack, specialDefense, types) {

    types = types.split(';');
    types.pop()

    const newPokemon = {
        id: (pokemonList.length + 1),
        name: name,
        stats: {
            hp: hp,
            attack: attack,
            defense: defense,
            speed: speed,
            'sp-atk': specialAttack,
            'sp-def': specialDefense
        },
        type: types
    }
    return pokemonList.push(newPokemon);    // Atenção: types vem como uma stringona, cabe a você transformar num array
}


