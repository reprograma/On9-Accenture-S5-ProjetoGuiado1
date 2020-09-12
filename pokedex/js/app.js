let pokemonList = [];

function filterPokemon(name, type) {
    const filteredList = pokemonList.filter(pokemon => {
        const searchName = new RegExp(name, 'i');
        const checkName = searchName.test(pokemon.name);
        
        const typeList = pokemon.type;
        const checkType = type.length == 0 ? true : pokemon.type.includes(type);
        return checkName && checkType
    });
    return filteredList;
}


function sortPokemon(filteredList, sortExpression) {

    let listaOrdenada = [];
    
    switch (sortExpression) {
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
            })
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
            })
            break;
        default:
            listaOrdenada = filteredList.sort((pokemonA, pokemonB) => {
                return pokemonA.id - pokemonB.id;
            });
            break;

    }

    return listaOrdenada;
}
function deletePokemon(id) {
    
        let pokemon = getPokemon(id);
        let indice = pokemonList.indexOf(pokemon);
        return pokemonList.splice(indice, 1);
}

function addPokemon(name, hp, attack, defense, speed, specialAttack, specialDefense, types) {
    // Seu código aqui
    // Atenção: types vem como uma stringona, cabe a você transformar num array
    let arrayTypes = types.split(';');
    arrayTypes = arrayTypes.filter(types => types != "");

    let pokemon = Object();
    const listaMap = pokemonList.map(pokemon => pokemon.id);
    let max = Math.max.apply(null, listaMap);
console.log(max);

    pokemon = {
        id: max + 1,
        name: name,
        type: arrayTypes,
        stats: {
            hp: hp,
            attack: attack,
            defense: defense,
            speed: speed,
            'sp-atk': specialAttack,
            'sp-def': specialDefense,
        },
        
    }

    pokemonList.push(pokemon);
}

function getPokemon(id) {
   const obterPokemon = pokemonList.find(pokemon => pokemon.id == id);

   return obterPokemon;

    // Retorne um pokemon da lista que tenha o id enviado
}

function editPokemon(id, name, hp, attack, defense, speed, specialAttack, specialDefense, types){
    let pokemon = getPokemon(id);
    let listaType = types.split(';');
    let indice = listaType.indexOf("");
    listaType.splice(indice, 1);

    pokemon.name = name;
    pokemon.stats.hp = hp;
    pokemon.stats.attack = attack;
    pokemon.stats.defense = defense;
    pokemon.stats.speed = speed;
    pokemon['stats']['sp-atk'] = specialAttack;
    pokemon['stats']['sp-def'] = specialDefense;
    pokemon.type = listaType;
}