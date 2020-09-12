let pokemonList = [];

function filterPokemon(name, type) { //Prof fez
const listafiltrada = pokemonList.filter(pokemon => {
const searchName = new RegExp(name, 'i');
const checkName = searchName.test(pokemon.name);
        // condicão ? atente se verdadeiro : atende se falso
const listaTipos = pokemon.type
const checkType = type.length == 0 ? true : pokemon.type.includes(type);
        return checkName && checkType;
    })
    // Retorne a lista filtrada
    return listafiltrada;
}





function sortPokemon(filteredList, sortExpression) { //Prof fez
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
        // Retorne a lista ordenada
        return listaOrdenada;
}




function getPokemon(id) {  //prof fez
    const pokemon = pokemonList.find(pokemon => pokemon.id == id);
    return pokemon;
}





function deletePokemon(id) {
    
    let pokemon = getPokemon(id);
    console.log(pokemon);
    let indice = pokemonList.indexOf(pokemon);
    console.log(indice);
    return pokemonList.splice(indice, 1);


}

function addPokemon(name, hp, attack, defense, speed, specialAttack, specialDefense, types) {
    
    types = types.split(";");
    types = types.slice(0, types.length - 1);
    const pokemon = {
        name: name,
        stats:{
            hp: hp,
            attack: attack,
            defense: defense,
            speed: speed,
            'sp-atk': specialAttack,
            'sp-def': specialDefense,
        },
        type: types,
        id: (pokemonList.length + 1)

}
    return pokemonList.push(pokemon)
}


function editPokemon(id, name, hp, attack, defense, speed, specialAttack, specialDefense, types){

let pokemonIndex = pokemonList.findIndex(pokemon => pokemon.id == id);

types = types.split(";"); //porque types vem como uma stringona e preciso de um array
types = types.slice(0, types.length - 1);

pokemonList[pokemonIndex] = { //name, type e id ficam separados pois são únicos
    name: name,
    stats: {
        hp: hp,
        attack: attack,
        defense: defense,
        speed: speed,
        'sp-atk': specialAttack,
        'sp-def': specialDefense, 
    },
    type: types,
    id: id

}}