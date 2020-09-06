let pokemonList = [];

function filterPokemon(name, type, pokemonList) {
  let list = pokemonList;
  if (name !== "") {
    list = pokemonList.filter((item) => {
      console.log(item);
      return item.name == name;
    });
  }

  if (type) {
    list = pokemonList.filter((item) => {
      const types = item.type;
      const hasType = types.find((tipo) => tipo == type);
      if (hasType) {
        return item;
      }
    });
  }
  return list;
}

function sortPokemon(filteredList, sortExpression) {
  let list = filteredList;
  switch (sortExpression) {
    case "ID (asc)":
      return list.sort(function (currentItem, anteriorItem) {
        if (currentItem.id < anteriorItem.id) {
          return -1;
        }
        if (currentItem.id > anteriorItem.id) {
          return 1;
        }
        return 0;
      });

    case "ID (desc)":
      return list
        .sort(function (currentItem, anteriorItem) {
          if (currentItem.id < anteriorItem.id) {
            return -1;
          }
          if (currentItem.id > anteriorItem.id) {
            return 1;
          }
          return 0;
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
