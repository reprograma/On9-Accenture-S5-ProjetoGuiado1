let pokemonList = [];

function filterPokemon(name, type) {
    // Seu código aqui
    // Retorne a lista filtrada
    const listaFiltrada = pokemonList.filter(pokemon => {
        const searchName = new RegExp(name, 'i');
        const checkName = searchName.test(pokemon.name);
        const checkType = type.length == 0 ? true : pokemon.type.includes(type);
        return checkName && checkType;     
    })
    return listaFiltrada;
}
function sortPokemon(filteredList, sortExpression) {
    // Seu código aqui
    // Retorne a lista ordenada  
    let listaOrdenada = [];
    console.log (sortExpression)
    if ((sortExpression == 'ID (asc)') || (sortExpression.length == "") ) {
        listaOrdenada = filteredList.sort((pokemonA,pokemonB) => {
            return pokemonA.id - pokemonB.id;
        });    
    } 
    if (sortExpression == 'ID (desc)'){
        listaOrdenada = filteredList.sort((pokemonA,pokemonB) => {
            return pokemonA.id - pokemonB.id;
        });    
        listaOrdenada.reverse();    
    }    
    if (sortExpression == 'A-Z'){
        listaOrdenada = filteredList.sort((pokemonA, pokemonB) => {
        if (pokemonA.name > pokemonB.name) {
          return 1;
        }
        if (pokemonA.name < pokemonB.name) {
          return -1;
        }
        return 0;
    }); 
    }
    if (sortExpression == 'Z-A'){
        listaOrdenada = filteredList.sort((pokemonA, pokemonB) => {
        if (pokemonA.name > pokemonB.name) {
          return -1;
        }
        if (pokemonA.name < pokemonB.name) {
          return 1;
        }
        return 0;
    });
    }
     return listaOrdenada;
}
function deletePokemon(id) {
    let pokemonDeletado = pokemonList.indexOf(getPokemon(id))
       
        return pokemonList.splice(pokemonDeletado,1);
    }



function addPokemon(name, hp, attack, defense, speed, specialAttack, specialDefense, types) {
    // Seu código aqui
    // Atenção: types vem como uma stringona, cabe a você transformar num array
    
    types = types.split(";");

    let newPokemon = {
        type:types,
        id: pokemonList.length + 1,
        name: name,
        stats: {
            hp: hp,
            attack:attack,
            defense:defense,
            speed: speed,
            'sp-atk': specialAttack,
            'sp-def': specialDefense,
        
        },
        

    };     
    pokemonList.push(newPokemon);
}

function getPokemon(id) {
    // Seu código aqui
    // Retorne um pokemon da lista que tenha o id enviado
    const gotPokemon = pokemonList.find(pokemon =>pokemon.id == id);{
  
    return gotPokemon
}
}

function editPokemon(id, name, hp, attack, defense, speed, specialAttack, specialDefense, types) {
    // Seu código aqui
    // Atenção: types vem como uma stringona, cabe a você transformar num array
        listaType = types.split(";");
        
        getPokemon(id).type = listaType;
        getPokemon(id).name = name;
        getPokemon(id).stats.hp = hp;
        getPokemon(id).stats.attack = attack;
        getPokemon(id).stats.defense = defense;
        getPokemon(id).stats.speed = speed;
        getPokemon(id)['stats']['sp-atk']= specialAttack;
        getPokemon(id)['stats']['sp-def'] = specialDefense;
        
        listaType.pop(); 
    };    
        
   