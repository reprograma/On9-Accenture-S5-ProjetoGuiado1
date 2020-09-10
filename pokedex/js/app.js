let pokemonList = [];

function filterPokemon(name, type) {
	const listaFiltrada = pokemonList.filter((pokemon) => {
		const searchName = new RegExp(name, 'i');
		const checkName = searchName.test(pokemon.name);
		const checkType =
			type.length === 0 ? true : pokemon.type.includes(type);
		return checkName && checkType;
	});
	return listaFiltrada;
}

function sortPokemon(filteredList, sortExpression) {
	let listaOrdenada = [];

	if (sortExpression == 'ID (asc)' || sortExpression == '') {
		listaOrdenada = filteredList.sort((pokemonA, pokemonB) => {
			return pokemonA.id - pokemonB.id;
		});
	}

	if (sortExpression == 'ID (desc)') {
		listaOrdenada = filteredList.sort(function (pokemonA, pokemonB) {
			return pokemonA.id - pokemonB.id;
		});
		listaOrdenada.reverse();
	}

	if (sortExpression == 'A-Z') {
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

	if (sortExpression == 'Z-A') {
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
    const selecaoID = pokemonList.findIndex( pokemon => pokemonList.id === id);
    const listaAposDelecao = pokemonList.splice(selecaoID, 1)
    return listaAposDelecao; 
}

function addPokemon(
	name,
	hp,
	attack,
	defense,
	speed,
	specialAttack,
	specialDefense,
	types
) {

	}

function getPokemon(id) {
	const selecaoID = pokemonList.findIndex( pokemon => pokemonList.id === id);
	return selecaoID; 
	}

function editPokemon(
	id,
	name,
	hp,
	attack,
	defense,
	speed,
	specialAttack,
	specialDefense,
	types
) {
	// Seu código aqui
	// Atenção: types vem como uma stringona, cabe a você transformar num array
}
