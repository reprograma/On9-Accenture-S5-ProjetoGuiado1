let pokemonList = [];

function filterPokemon(name, type) {
  const listaFiltrada = pokemonList.filter((pokemon) => {
    const searchName = new RegExp(name, "i");
    const checkName = searchName.test(pokemon.name);
    const checkType = type.length == 0 ? true : pokemon.type.includes(type);
    return checkName && checkType;
  });

  return listaFiltrada;
}

function sortPokemon(filteredList, sortExpression) {
  let listaOrdenada = [];
  console.log(sortExpression);
  switch (sortExpression) {
    case "ID (desc)":
      listaOrdenada = filteredList.sort(function (pokemonA, pokemonB) {
        return pokemonA.id - pokemonB.id;
      });
      listaOrdenada.reverse();
      break;
    case "A-Z":
      listaOrdenada = filteredList.sort((pokemonA, pokemonB) => {
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
      listaOrdenada = filteredList.sort((pokemonA, pokemonB) => {
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
      listaOrdenada = filteredList.sort((pokemonA, pokemonB) => {
        return pokemonA.id - pokemonB.id;
      });
      break;
  }

  return listaOrdenada;
}

function deletePokemon(id) {
  // Seu código aqui
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
  // Seu código aqui
  // Atenção: types vem como uma stringona, cabe a você transformar num array
}

function getPokemon(id) {
  // Seu código aqui

  // Retorne um pokemon da lista que tenha o id enviado
  return {};
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
