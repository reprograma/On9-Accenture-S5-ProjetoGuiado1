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

function getPokemon(id) {
    const pokemon = pokemonList.find(pokemon => pokemon.id == id);
    return pokemon;
}

function deletePokemon(id) {
    pokemonList = pokemonList.filter(pokemon => pokemon.id != id);
    alert("Pokemon removido com sucesso!");
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

    alert("Pokemon editado com sucesso!");
}   

function addPokemon(name, hp, attack, defense, speed, specialAttack, specialDefense, types) {
    let max;
    for (let i = 0; i < pokemonList.length; i++) {
        let a, b;

        a = pokemonList[i];
        b = pokemonList[i + 1];

        if (!b) {
            b = 0;
        }

        if (a.id > b.id) {
            max = a.id;
        } else if (b.id > a.id) {
            max = b.id;
        } else if (a.id === b.id) {
            max = a.id;
        }
    }

    let arrayTypes = types.split(';');
    arrayTypes = arrayTypes.filter(type => type != "");

    let pokemon = new Object();

    pokemon = {
        id: max + 1,
        name: name,
        stats: {
            hp: hp,
            attack: attack,
            defense: defense,
            speed: speed,
            'sp-atk': specialAttack,
            'sp-def': specialDefense,
        },
        type: arrayTypes
    }

    pokemonList.push(pokemon);

    alert("Pokemon adicionado com sucesso!");
}
