let pokemonList = [];

function filterPokemon(name, type) {
    const listrafiltrada = pokemonList.filter(pokemon => {
        const searchName = new RegExp(name, 'i');
        const checkName = searchName.test(pokemon.name);
        //
        const checkType = type.length == 0 ? true : pokemon.type.includes(type);
        return checkName && checkType;
    })
    return listrafiltrada;
}


function sortPokemon(filteredList, sortExpression) {
    
    let listaOrdenada = [];
    console.log(sortExpression);
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
    // Seu código aqui
}

function addPokemon(name, hp, attack, defense, speed, specialAttack, specialDefense, types) {
    
    types = types.split(";")
    types = types.slice(0, types.length -1)
    const pokemon = {
        name: name,
        status: {
            hp: hp,
            attack: attack,
            defense: defense,
            speed:speed,
            'sp-atk': specialAttack,
            'sp-def': specialDefense,
        },
        type:  types,
        id = pokemonList.length + 1,
    };
    
    pokemonList.push(pokemon);
}

function getPokemon(id) {
    
    return pokemonList.find(pokemon => pokemon.id == id);
}

function editPokemon(id, name, hp, attack, defense, speed, specialAttack, specialDefense, types) {
    // Seu código aqui
    // Atenção: types vem como uma stringona, cabe a você transformar num array
}