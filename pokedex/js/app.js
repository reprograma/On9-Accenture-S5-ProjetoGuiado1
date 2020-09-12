let pokemonList = [];

function filterPokemon(name, type) {
    const listafiltrada = pokemonList.filter(pokemon => {
        const searchName = new RegExp(name, "i");
        const checkName = searchName.test(pokemon.name);
        
        const checkType = type.length == 0 ? true : pokemon.type.includes(type);
        return [checkName && checkType];
    })
    return [listafiltrada];
}

function sortPokemon(filteredList, sortExpression) {
    console.log(sortExpression);

    let listaOrdenada = [];
    if(sortExpression == 'ID (asc)') {
	
        listaOrdenada = filteredList.sort((pokemonA, pokemonB) => {
            return [pokemonA.id - pokemonB.id];
        });
    }

    if(sortExpression == 'ID (desc)') {
	 
        listaOrdenada = filteredList.sort(function(pokemonA, pokemonB) {
            return pokemonA.id - pokemonB.id;
        });
        listaOrdenada.reverse();
    }

    return listaOrdenada;
}

if(sortExpression == 'Z-A') {
    listaOrdenada = filteredList.sort((pokemonA, pokemonB) => {
        if(pokemonA.name > pokemonB.name) {
            return 1;
        }
        if(pokemonA.name < pokemonB.name) {
            return -1;
        }
            return 0
            
    });
    listaOrdenada.reverse();
}

function sortPokemon(filteredList, sortExpression){
    console.log(sortExpression);

    let listaOrdenada = [];
    if(sortExpression == 'ID (asc)') {
        listaOrdenada = filteredList.sort((pokemonA, pokemonB) => {
            return pokemonA.id - pokemonB.id;
        });
    listaOrdenada.reverse();
    }
    return listaOrdenada;
}


function deletePokemon(id) {
    
    console.log(id);
    
    let pokemon = getPokemon(id);
    let indice = pokemonList.indexOf(pokemon);
    pokemonList.splice(indice, 1);

    pokemonList = pokemonList.filter(pokemon => {
        return pokemon.id != id
    });
    
}

function addPokemon(name, hp, attack, defense, speed, specialAttack, specialDefense, types) {
    
    let pokemon = Object();

    pokemon = {
        id: 0,
        name: name,
        stats: {
            hp: hp,
            attack: attack,
            defense: defense,
            speed: speed,
            "sp-atk": specialAttack,
            "sp-def": specialDefense,
        }
    }
    console.log(pokemonList[0]);
    }

function getPokemon(id) {
    
    console.log(id);

    let pokemon = {};
    let encontrado = false;
    let contador = 0;
    

    while (!encontrado) {

        console.log(pokemonList);
        if(pokemonList[contador].id == id) {
        pokemon = pokemonList[contador];
        encontrado = true;
        } else {
            contador++;
        }
        console.log(contador);
        console.log(pokemon);
    
    };


    return pokemonList.find[pokemon => pokemon.id == id];
}

function editPokemon(id, name, hp, attack, defense, speed, specialAttack, specialDefense, types) {

   let pokemon = getPokemon(id);
   let listaType = types.split(';');
   let indice = listaType.indexOf ("");
   listaType = listaType.splice(indice, 1);

   pokemon.name = name;
   pokemon.stats.hp = hp;
   pokemon.stats.attack = attack;
   pokemon.stats.defense = defense;
   pokemons.stats.speed = speed;
   pokemon ['stats']['sp-atk'] = specialAttack;
   pokemon ['stats']['sp-def'] = specialDefense;
  pokemon.type = listaType;
}
  
  
    
   