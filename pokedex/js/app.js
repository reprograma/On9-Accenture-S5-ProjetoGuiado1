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
    // pode ser usado o if else, mas switch case fica mais "enxuto"
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
    let pokemonDelete = getPokemon(id);
    let indice = pokemonList.indexOf(pokemonDelete); 
    return pokemonList.splice(indice, 1);

}

function addPokemon(name, hp, attack, defense, speed, specialAttack, specialDefense, types) {
    
    let type = types.split(";");
    type.pop(); // não era necessário o slice, pop deixa mais simples
    const pokemon = {
        name: name,
        stats: {
            hp: hp,
            attack: attack,
            defense: defense,
            speed:speed,
            'sp-atk': specialAttack,
            'sp-def': specialDefense,
        },
        type:  type,
        id: pokemonList.length + 1,
    };
    
    return pokemonList.push(pokemon);
}

function getPokemon(id) {
    const getP = pokemonList.find(pokemon => pokemon.id == id);
    return getP;
}

function editPokemon(id, name, hp, attack, defense, speed, specialAttack, specialDefense, types) {
    // Seu código aqui
    // Atenção: types vem como uma stringona, cabe a você transformar num array
}
    
    