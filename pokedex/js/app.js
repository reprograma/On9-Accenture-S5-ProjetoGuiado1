let pokemonList = [];
/*function filterPokemon(name, type) {
  const listafiltrada = pokemonList.filter((pokemon) => {
    const searchName = new RegExp(name, "i");
    const checkName = searchName.test(pokemon.name);
    // condicão ? atente se verdadeiro : atende se falso
    const checkType = type.length == 0 ? true : pokemon.type.includes(type);
    return checkName && checkType;
  });
  return listafiltrada;
}*/
function filterPokemon(name, type, pokemonList) {
  let list = pokemonList;

  if (name && type) {
    list = pokemonList
      .filter((pokemon) => {
        const searchName = new RegExp(name, "i");
        const checkName = searchName.test(pokemon.name);
        return checkName;
      })
      .filter((item) => {
        const types = item.type;
        const hasType = types.find((tipo) => tipo == type);
        if (hasType) {
          return item;
        }
      });
  } else if (!name && type) {
    list = pokemonList.filter((item) => {
      const types = item.type;
      const hasType = types.find((tipo) => tipo == type);
      if (hasType) {
        return item;
      }
    });
  } else {
    list = pokemonList.filter((pokemon) => {
      const searchName = new RegExp(name, "i");
      const checkName = searchName.test(pokemon.name);
      return checkName;
    });
  }

  return list;
}

function sortPokemon(filteredList, sortExpression) {
  let list = filteredList;
  switch (sortExpression) {
    case "ID (asc)":
      return list.sort(function (currentItem, anteriorItem) {
        return currentItem.id - anteriorItem.id;
      });

    case "ID (desc)":
      return list
        .sort(function (currentItem, anteriorItem) {
          return currentItem.id - anteriorItem.id;
        })
        .reverse();
    case "A-Z":
      return list.sort(function (currentItem, anteriorItem) {
        if (currentItem.name < anteriorItem.name) {
          return -1;
        }
        if (currentItem.name > anteriorItem.name) {
          return 1;
        }
        return 0;
      });
    case "Z-A":
      return list
        .sort(function (currentItem, anteriorItem) {
          if (currentItem.name < anteriorItem.name) {
            return -1;
          }
          if (currentItem.name > anteriorItem.name) {
            return 1;
          }
          return 0;
        })
        .reverse();
  }

  return list;
}

function deletePokemon(id) {
  const index = pokemonList.findIndex((pokemon) => {
    return pokemon.id == id;
  });

  if (index >= 0) {
    pokemonList.splice(index, 1);
  } // Seu código aqui
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
  let newPokemon = Object();

  const listById = pokemonList.map((pokemon) => pokemon.id);
  const maxValue = Math.max.apply(null, listById);

  const listTypes = types.split(";").filter((type) => type != "");

  newPokemon = {
    id: maxValue + 1,
    name: name,
    type: listTypes,
    stats: {
      hp: hp,
      attack: attack,
      defense: defense,
      speed: speed,
      "sp-atk": specialAttack,
      "sp-def": specialDefense,
    },
  };

  pokemonList.push(newPokemon);
  alert("Pokemon adicionado com sucesso!");
}

function getPokemon(id) {
  const pokemon = pokemonList.find((pokemon) => pokemon.id == id);
  if (pokemon) {
    return pokemon;
  } else {
    return {};
  }
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
  let pokemon = getPokemon(id);
  let listTypes = types.split(";");
  let index = listTypes.indexOf("");
  listTypes.splice(index, 1);

  pokemon.name = name;
  pokemon.stats.hp = hp;
  pokemon.stats.attack = attack;
  pokemon.stats.defense = defense;
  pokemon.stats.speed = speed;
  pokemon["stats"]["sp-atk"] = specialAttack;
  pokemon["stats"]["sp-def"] = specialDefense;
  pokemon.type = listTypes;

  alert("Pokemon editado com sucesso!");
}
