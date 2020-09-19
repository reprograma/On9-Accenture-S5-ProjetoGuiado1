
let pokemonList = [];

function filterPokemon(name, type) {
    const listafiltrada = pokemonList.filter(pokemon => {
        const searchName = new RegExp(name, 'i');
        const checkName = searchName.test(pokemon.name);
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


function deletePokemon(id) {
    console.log('ID do pke', id)
    const selecaoId = pokemonList.findIndex(pokemonList => pokemonList.id === id);
    pokemonList.splice(selecaoId, 1)
    console.log(selecaoId)
    console.log('pokemonList', pokemonList)
}

function addPokemon(name, hp, attack, defense, speed, specialAttack, specialDefense, types) {
    let pokemon = Object();
    const arrartype = types.split(";").filter(type => type != "")

    pokemon = {
        id: 0,
        name: name,
        stats: {
          hp: hp,
          attack: attack,
          defense: defense,
          speed: speed,
          'sp-atk': specialAttack,
          'sp-def': specialDefense

        },
        type: arrartype

    }
    
    pokemonList.push(pokemon);
    console.log(pokemon)
   
}
 
function getPokemon(id) {
   
    let pokemon = {};
    let encontrado = false;
    let contador = 0;
    

    while (encontrado === false) {

        console.log(pokemonList);
        if(pokemonList[contador].id === parseInt(id)){
            pokemon = pokemonList[contador];
            encontrado = true;
        } else{
            contador++;

        }
        }
        console.log(contador);
        console.log(pokemon);
        return pokemon
    };
    

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
    pokemon.stats['sp-atk'] = specialAttack
    pokemon.stats['sp-def'] = specialDefense
    pokemon.type = listaType.splice(indice, 1);

    console.log(pokemon);
    console.log(types)
    console.log(listaType)
    console.log(id, name, hp, attack, defense, speed, specialAttack, specialDefense, types)
    

}


