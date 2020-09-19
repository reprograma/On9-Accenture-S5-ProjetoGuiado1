// Lista contendo todos os pokemons
let pokemonList = [];

// Busca pokemon por nome e tipo
function filterPokemon(name, type) {
	const listaFiltrada = pokemonList.filter((pokemon) => {
        const searchName = new RegExp(name, 'i');
        const checkName = searchName.test(pokemon.name);
        let checkType = type.length === 0 ? true : pokemon.type.includes(type);
        return checkName && checkType;
    });
	return listaFiltrada;
}

// Ordena lista de pokemons
const sortPokemon = (filteredList, sortExpression) => {
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
            return pokemonA.name > pokemonB.name ? -1 : pokemonA.name < pokemonB.name ? 1 : 0;
        });
	}

	return listaOrdenada;
};

// Busca pokemon por ID
const getPokemon = id => {
	const pokemon = pokemonList.find(pokemon => {
        return pokemon.id == id;
    });
	return pokemon;
};

// Deleta pokemon por ID
function deletePokemon(id) {
	pokemonList = pokemonList.filter((pokemon) => pokemon.id != id);
}

// Cadastra pokemon
const addPokemon = (name, hp, attack, defense, speed, specialAttack, specialDefense, types) => {
	let pokemon = Object();

	const listaMap = pokemonList.map((pokemon) => pokemon.id);
	const max = Math.max.apply(null, listaMap);

	const arrayTypes = types.split(';').filter((type) => type != '');

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
			'sp-def': specialDefense,
		},
	};

	pokemonList.push(pokemon);
};

// Altera pokemon
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
	let pokemon = getPokemon(id);
	let listaType = types.split(';');
	let indice = listaType.indexOf('');
	listaType.splice(indice, 1);

	pokemon.name = name;
	pokemon.stats.hp = hp;
	pokemon.stats.attack = attack;
	pokemon.stats.defense = defense;
	pokemon.stats.speed = speed;
	pokemon['stats']['sp-atk'] = specialAttack;
	pokemon['stats']['sp-def'] = specialDefense;
	pokemon.type = listaType;
}
