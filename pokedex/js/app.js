let pokemonList = [];

function filterPokemon(name, type) {
    // Seu código aqui
    const listaNome = pokemonList.filter( index => {
        const searchName = new RegExp(name, "i");
        const checkName = searchName.test(index.name);
        const checkType = type.length == 0 ? true : index.type.includes(type);

        return checkName && checkType;
    })
    // Retorne a lista filtrada
    return listaNome;
    
}

function sortPokemon(filteredList, sortExpression) {
    // Seu código aqui
    
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

function getPokemon(id){
    let nova = pokemonList.findIndex(poke => poke.id == id)
        //console.log(nova)
        return pokemonList[nova];
}


function deletePokemon(id) {
    // Seu código aqui
let pokemon = getPokemon(id); //chama a função para localizar o id
let index = pokemonList.indexOf(pokemon)
pokemonList.splice(index, 1); //vai deletar a posição index
//console.log("index " + index)
return index;
} 

   
 

function addPokemon(name, hp, attack, defense, speed, specialAttack, specialDefense, types) {
    let pokemon = Object();

    const listaMap = pokemonList.map(pokemon => pokemon.id);
    const max = Math.max.apply(null, listaMap);

    const arrarTypes = types.split(";").filter(type => type != "");

    pokemon = {
        id: max + 1,
        name: name,
        type: arrarTypes,
        stats: {
            hp: hp,
            attack: attack,
            defense: defense,
            speed: speed,
            'sp-atk': specialAttack,
            'sp-def': specialDefense
        }
    }

    pokemonList.push(pokemon);
}


function editPokemon(id, name, hp, attack, defense, speed, specialAttack, specialDefense, types) {
    // Seu código aqui
    let pokemon = getPokemon(id);
    let listaType = types.split(";");
    let index = listaType.indexOf("");
    listaType.splice(index, 1);

    pokemon.name = name;
    pokemon.stats.hp = hp;
    pokemon.stats.attack = attack;
    pokemon.stats.defense =defense;
    pokemon.stats.speed = speed;
    pokemon.stats['sp-atk'] = specialAttack;
    pokemon.stats["sp-def"] = specialDefense;
    pokemon.type = listaType;

}