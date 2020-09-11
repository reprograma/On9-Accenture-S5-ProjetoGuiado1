let pokemonList = [];

function filterPokemon(name, type) {   
    const listafiltrada = pokemonList.filter(pokemon => {

    const searchName = new RegExp(name, 'i');  
    const checkName = searchName.test(pokemon.name);
   // condicao ? atende se for verdadeiro : atende ser for falso
    const checkType = type.length == 0 ? true : pokemon.type.includes(type);
  /*  if( type.length == 0) {
        return checkName;
    }
    else {
        return checkName && checkType;

    } */
    return checkName && checkType;
   });

   return listafiltrada;
}

function sortPokemon(filteredList, sortExpression) {
    
    let listaOrdenada = [];
    switch(sortExpression) {
        case 'ID (asc)':
            listaOrdenada = filteredList.sort((pokemonA, pokemonB) => {
            return pokemonA.id - pokemonB.id;            
            });
        break;
        
        case 'ID (desc)':
            listaOrdenada = filteredList.sort(function(pokemonA, pokemonB) {
            return pokemonA.id - pokemonB.id;
            });
            listaOrdenada.reverse();
        break;

        case 'A-Z': 
            listaOrdenada = filteredList.sort((pokemonA, pokemonB) => {
            if(pokemonA.name > pokemonB.name) {
                return 1;
            }
            if(pokemonA.name < pokemonB.name) {
                return -1;
            }
            return 0;
            });
        break;

        case 'Z-A':
             listaOrdenada = filteredList.sort((pokemonA, pokemonB) => {
            if(pokemonA.name > pokemonB.name) {
                return -1;
            }
            if(pokemonA.name < pokemonB.name) {
                return 1;
            }
            return 0;
            });
        break;
        
    }
    
    return listaOrdenada;
}

function deletePokemon(id) {

    //let pokemon = getPokemon(id);
    //let indice = pokemonList.indexOf(pokemon);
   // pokemonList.splice(indice, 1);

   pokemonList = pokemonList.filter(pokemon => pokemon.id != id);
   
}

function addPokemon(name, hp, attack, defense, speed, specialAttack, specialDefense, types) {
    // Seu código aqui
    let pokemon = Object();
    
    const listaMap = pokemonList.map(pokemon => pokemon.id);
    const max = Math.max.apply(null, listaMap);

    const arrarTypes = types.split(";").filter(type => type != "");

    pokemon = {
        id: max+1,
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

function getPokemon(id) {
    // Seu código aqui
   // let pokemon = {};
    //let find = false;
   // let i = 0;

    //while(find != true) {
      //  if(pokemonList[i].id == id) {
        //    pokemon = pokemonList[i];
          //  find = true;
        //}
       // else {
         //   i++;
       // }
   // }
    
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
    pokemon['stats']['sp-atk'] = specialAttack;
    pokemon['stats']['sp-def'] = specialDefense;
    pokemon.type = listaType;

}
