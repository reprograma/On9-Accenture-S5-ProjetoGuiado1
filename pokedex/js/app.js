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

function getPokemon(id) {
  // let pokemonBusca = pokemonList.filter((pokemon) => {
  //   return pokemon.id == id;
  // });
  // if (pokemonBusca.length == 0) {
  //   return;
  // }
  // return pokemonBusca[0];

  let pokemonBusca = pokemonList.find((pokemon) => pokemon.id == id);
  return pokemonBusca;
}

function deletePokemon(id) {
  // let pokemonDeletar = getPokemon(id);
  // let index = pokemonList.indexOf(pokemonDeletar[0]);
  // if (index > -1) {
  //   pokemonList.splice(index, 1);
  // }
  // return pokemonList;

  // let pokemonDeletar = getPokemon(id);
  // let index = pokemonList.indexOf(pokemonDeletar);
  // pokemonList.splice(index, 1);

  pokemonList = pokemonList.filter((pokemon) => pokemon.id != id);
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
  for (let index = 0; index < pokemonList.length; index++) {
    if (pokemonList[index].id == id) {
      pokemonList[index].name = name;
      pokemonList[index].stats.hp = hp;
      pokemonList[index].stats.attack = attack;
      pokemonList[index].stats.defense = defense;
      pokemonList[index].stats.speed = speed;
      pokemonList[index].stats["sp-atk"] = specialAttack;
      pokemonList[index].stats["sp-def"] = specialDefense;
      pokemonList[index].stats.total =
        hp + attack + defense + speed + specialAttack + specialDefense;
      pokemonList[index].type = types.split(";");
      break;
    }
  }

  return pokemonList;
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
  pokemonList.push({
    id: pokemonList[pokemonList.length - 1].id + 1,
    name: name,
    stats: {
      hp: hp,
      attack: attack,
      defense: defense,
      speed: speed,
      "sp-atk": specialAttack,
      "sp-def": specialDefense,
      total: hp + attack + defense + speed + specialAttack + specialDefense,
    },
    type: types.split(";"),
  });
}
