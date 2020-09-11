let pokemonList = [];

function filterPokemon(name, type) {
    const listafiltrada = pokemonList.filter(pokemon => {
        const searchName = new RegExp(name, 'i');
        const checkName = searchName.test(pokemon.name);
        // condicão ? atente se verdadeiro : atende se falso
        const checkType = type.length == 0 ? true : pokemon.type.includes(type);
        return checkName && checkType;
    })
    return listafiltrada;
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
    return pokemonList.push(newPokemon); 
}

function getPokemon(id) {

    let pokemon = {};
    let encontrado = false;
    let contador = 0;

    while(!encontrado){

    if(pokemonList[contador].id == id) {
         pokemon = pokemonList[contador];
           encontrado = true;
    } else {
         contador++;
     }
    };

   return pokemon;

    const pokemon = pokemonList.find(pokemon => pokemon.id == id);
    return pokemon;
}

function editPokemon(id, name, hp, attack, defense, speed, specialAttack, specialDefense, types) {
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