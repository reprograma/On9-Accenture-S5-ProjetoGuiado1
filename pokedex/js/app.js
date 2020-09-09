let pokemonList = [];

function filterPokemon(name, type) { //dois parâmetros, nome e tipo
    const listaFiltrada = pokemonList.filter(pokemon => {
        const searchName = new RegExp(name, 'i');
        const checkName = searchName.test(pokemon.name);
        return checkName; 
    })
    return listaFiltrada;
}

function sortPokemon(filteredList, sortExpression) {
    // Seu código aqui

    // Retorne a lista ordenada
    return [];
}

function deletePokemon(id) {
    // Seu código aqui
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