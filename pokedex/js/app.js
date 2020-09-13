let pokemonList = [];

function filterPokemon(name, type) {
    const listafiltrada = pokemonList.filter(pokemon => {
        const searchName = new RegExp(name, 'i');
        const checkName = searchName.test(pokemon.name)
        const checkType = type.length == 0 ? true : pokemon.type.includes(type);

        return checkName && checkType;
        
    })
    
    return listafiltrada;
}

function sortPokemon(filteredList, sortExpression) {
    let listaOrdenada = [];
    if(sortExpression == 'ID (asc)'{
        listaOrdenada = filteredList.sort((pokemonA, PokemonB) => {
            return pokemonA.id - pokemonB.id; 
        });
    }

    if(sortExpression == 'ID (desc)'{
        listaOrdenada = filteredList.sort((pokemonA, pokemonB) =>{
            return pokemonA.id - pokemonB.id;
        });
        listaOrdenada.reverse();
    }

    if(sortExpression == 'A-Z'){
        listaOrdenada = filteredList.sort((pokemonA, pokemonB) => {
            if(pokemonA.name > pokemonB.name){
                return 1;
            }
            if(pokemonA.name < pokemonB.name){
                return -1;
            }
        })
    }

    if(sortExpression == 'Z-A'){
        listaOrdenada = filteredList.sort((pokemonA, pokemonB) => {
            if(pokemonA.name > pokemonB.name){
                return -1;
            }
            if(pokemonA.name < pokemonB.name){
                return 1;
            }
        })
    }

    return listaOrdenada;
}

function deletePokemon(id) {
    
    let pokemon = getPokemon(id);
    let indice = pokemonList.indexOf(pokemon);
    pokemonList.splice(indice, 1);

function addPokemon(name, hp, attack, defense, speed, specialAttack, specialDefense, types) {
    let pokemon = Object();

    const listaMap = pokemonList.map(pokemon => pokemon.id);
    const arrayTypes = types.split(";").filter(type => type != "");

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
            'sp-def': specialDefense
        }
    }
}
pokemonList.push(pokemon);
}

function getPokemon(id) {
    let pokemon = [];
    let encontrado = false;
    let contador = 0;

    if(pokemonList[contador].id === id) {
        pokemon = pokemonList[contador];
        encontrado = true;
    } else {
        contador++;
    }
};

return pokemon

function editPokemon(id, name, hp, attack, defense, speed, specialAttack, specialDefense, types) {
    
    let pokemon = getPokemon(id);
    let listType = types.split(';');
    listType.splice(indice, 1);

    this.name = name;
    this.stats.hp = hp;
    this.stats.attack = attack;
    this.stats.defense = defense;
    this.stats.speed = speed;
    this['stats']['sp-atk'] = specialAttack;
    this['stats']['sp-def'] = specialDefense
    pokemon.type = listType;
}