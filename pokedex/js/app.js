
let pokemonList = [];

function filterPokemon(name, type) {
    const listaFiltrada = pokemonList.filter(pokemon => {
        //filtrando por nome
        const searchName = new RegExp(name, "i");
        const checkName = searchName.test(pokemon.name);
       
        //filtrando por tipo
        const searchType = new RegExp(type);
        const checkType = searchType.test(pokemon.type);
        
        //pedindo retorno dos dois
        return checkName && checkType
    })
    return listaFiltrada;
}


function sortPokemon(filteredList, sortExpression) {
   
   let listaOrdenada = [];
   //ordenando por id crescente
   if(sortExpression == "ID (asc)" || (sortExpression == "")) {
       listaOrdenada = filteredList.sort((pokemonA, pokemonB) => {
           return pokemonA.id - pokemonB.id;
       });
     }
     //ordenando por id decrescente
     if(sortExpression == "ID (desc)") {
         listaOrdenada = filteredList.sort((pokemonA, pokemonB) => {
            return pokemonA.id - pokemonB.id;
     });
     listaOrdenada.reverse();
    }

    //ordenando por a-z
    if(sortExpression == "A-Z") {
        listaOrdenada =filteredList.sort((pokemonA, pokemonB)=> {
            if(pokemonA.name > pokemonB.name) {
                return 1;
            }
            if(pokemonA.name < pokemonB.name) {
                return -1;
            }
            return 0;
        })
    }
    //ordenando po z-a
    if(sortExpression == "Z-A") {
        listaOrdenada =filteredList.sort((pokemonA, pokemonB)=> {
            if(pokemonA.name > pokemonB.name) {
                return -1;
            }
            if(pokemonA.name < pokemonB.name) {
                return 1;
            }
            return 0;
        })
    }
    return listaOrdenada 
}


function deletePokemon(id) {

}

function addPokemon(name, hp, attack, defense, speed, specialAttack, specialDefense, types) {
    // Seu código aqui
    // Atenção: types vem como uma stringona, cabe a você transformar num array
}

function getPokemon(id) {
    // Seu código aqui

    // Retorne um pokemon da lista que tenha o id enviado
    return {};
}

function editPokemon(id, name, hp, attack, defense, speed, specialAttack, specialDefense, types) {
    // Seu código aqui
    // Atenção: types vem como uma stringona, cabe a você transformar num array
} 
