let pokemonList = [];


function filterPokemon(name, type) {
    const filterName = pokemonList.filter(pokemon => {

        const searchName = new RegExp(name, 'i');
        const checkName = searchName.test(pokemon.name);
        const checkType = type.length == 0 ? true : pokemon.type.includes(type);
        return checkName && checkType;
    })

    return filterName;
}

function sortPokemon(filteredList, sortExpression) {
    let listaOrdenada = [];

    switch (sortExpression) {
        case 'ID (desc)':
            listaOrdenada = filteredList.sort((pokemonA, pokemonB) => {
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

function addPokemon(name, hp, attack, defense, speed, specialAttack, specialDefense, types) {

    types = types.split(';');
    types.pop();

    const addingPokemon = {
        id: pokemonList.length + 1,
        name: name,
        type: types,
        stats: {
            hp: hp,
            attack: attack,
            defense: defense,
            speed: speed,
            'sp-atk': specialAttack,
            'sp-def': specialDefense
        }
    };

    pokemonList.push(addingPokemon);
    // Atenção: types vem como uma stringona, cabe a você transformar num array

}


function getPokemon(id) {
    /* const findPokemon = pokemonList.findIndex(pokemon => pokemon.id === id);

    return findPokemon; */ // retorna id do pokemon
    const findPokemon = pokemonList.find(pokemon => pokemon.id == id);
    return findPokemon;
}

function deletePokemon(id) {

    //pokemonList.splice(getPokemon(id), 1);

    let pokemonId = getPokemon(id);
    let position = pokemonList.indexOf(pokemonId)
    return pokemonList.splice(position, 1);
}


function editPokemon(id, name, hp, attack, defense, speed, specialAttack, specialDefense, types) {

    let arrayType = types.split(';');

    arrayType.pop()

    getPokemon(id).name = name;
    getPokemon(id).stats.hp = hp;
    getPokemon(id).stats.attack = attack;
    getPokemon(id).stats.defense = defense;
    getPokemon(id).stats.speed = speed;
    getPokemon(id)['stats']['sp-atk'] = specialAttack;
    getPokemon(id)['stats']['sp-def'] = specialDefense;
    getPokemon(id).type = arrayType;


}