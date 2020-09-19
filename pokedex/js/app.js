let pokemonList = [];

function filterPokemon(name, type) {
  // Seu código aqui
  const filterList = pokemonList.filter((pokemon) => {
    const searchName = new RegExp(name, "i");
    const checkName = searchName.test(pokemon.name);
    const checkType = type.length == 0 ? true : pokemon.type.includes(type);
    return checkName && checkType;
  });
  // Retorne a lista filtrada
  return filterList;
}

function sortPokemon(filteredList, sortExpression) {
  // Seu código aqui
  let orderedList = [];

  switch (sortExpression) {
    case "ID (desc)":
      orderedList = filteredList.sort((pokemonA, pokemonB) => {
        return pokemonA.id - pokemonB.id;
      });
      orderedList.reverse();
      break;
    case "A-Z":
      orderedList = filteredList.sort((pokemonA, pokemonB) => {
        if (pokemonA.name > pokemonB.name) {
          return 1;
        }
        if (pokemonA.name < pokemonB.name) {
          return -1;
        }
        return 0;
      });
      break;
    case "Z-A":
      orderedList = filteredList.sort((pokemonA, pokemonB) => {
        if (pokemonA.name > pokemonB.name) {
          return -1;
        }
        if (pokemonA.name < pokemonB.name) {
          return 1;
        }
        return 0;
      });
      break;
    default:
      orderedList = filteredList.sort((pokemonA, pokemonB) => {
        return pokemonA.id - pokemonB.id;
      });
  }
  return orderedList;
}

function deletePokemon(id) {
  // Seu código aqui
  let pokemon = getPokemon(id);
  let indice = pokemonList.indexOf(pokemon);
  pokemonList.splice(indice, 1);
}

function addPokemon(name, hp, attack, defense, speed, specialAttack, specialDefense, types) {
  // Seu código aqui
  // Atenção: types vem como uma stringona, cabe a você transformar num array
  let pokemon = Object();

  const listaMap = pokemonList.map(pokemon => pokemon.id);
  const max = Math.max.apply(null, listaMap);

  const arrayTypes = types.split(";").filter(type => type != "");

  pokemon = {
    id: max + 1,
    name: name,
    stats: {
      hp: hp,
      attack: attack,
      defense: defense,
      'sp-atk': specialAttack,
      'sp-def': specialDefense
    },
    type: arrayTypes
  }
  pokemonList.push(pokemon);
}

function getPokemon(id) {
  // Seu código aqui
  const searchPokemon = pokemonList.find(pokemon => pokemon.id == id);
  // Retorne um pokemon da lista que tenha o id enviado
  return searchPokemon;
}

function editPokemon(id, name, hp, attack, defense, speed, specialAttack, specialDefense, types) {
  // Seu código aqui
  // Atenção: types vem como uma stringona, cabe a você transformar num array

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
}
