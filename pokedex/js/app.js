let pokemonList = [];

filterPokemon();

function filterPokemon(name, type) {
    const listafiltrada = pokemonList.filter(pokemon => {
        const searchName = new RegExp(name, 'i');
        const checkName = searchName.test(pokemon.name);
        // condicão ? atente se verdadeiro : atende se falso
        const checkType = type.length == 0 ? true : pokemon.type.includes(type);
        return checkName && checkType;
    })
    return listafiltrada;
}

function sortPokemon(filteredList, sortExpression) {

    let listaOrdenada = [];

    if((sortExpression == 'ID (asc)') || (sortExpression == '')) {
        listaOrdenada = filteredList.sort((pokemonA, pokemonB) => {
            return pokemonA.id - pokemonB.id;
        });
    }

    if(sortExpression == 'ID (desc)') {
        listaOrdenada = filteredList.sort(function(pokemonA, pokemonB) {
            return pokemonA.id - pokemonB.id;
        });
        listaOrdenada.reverse();
    }

    if(sortExpression == 'A-Z') {
        listaOrdenada = filteredList.sort((pokemonA, pokemonB)=> {
            if(pokemonA.name > pokemonB.name) {
                return 1;
            }
            if(pokemonA.name < pokemonB.name) {
                return -1;
            }
            return 0;
        })
    }

    if(sortExpression == 'Z-A') {
        listaOrdenada = filteredList.sort((pokemonA, pokemonB)=> {
            if(pokemonA.name > pokemonB.name) {
                return -1;
            }
            if(pokemonA.name < pokemonB.name) {
                return 1;
            }
            return 0;
        })
    }

    return listaOrdenada;
}


function deletePokemon(id) {
    // Seu código aqui
    console.log(id);
    //encontrar pokemon da pokemonList
    //deletar esse pokemon que eu encontrei

    let pokemon = getPokemon(id);
    console.log(pokemon);
    let indice = pokemonList.indexOf(pokemon);
    console.log(indice);
    //pokemonList.splice(indice, 1); //exclui um a partir do indice (O 1 significa, a partir do índice, remova 1 posição)
    pokemonList.pop(indice);
    console.log(pokemonList[indice]);

}

function addPokemon(name, hp, attack, defense, speed, specialAttack, specialDefense, types) {
    let pokemon = Object();

    const listaMap = pokemonList.map(pokemon => pokemon.id);
    const max = Math.max.apply(null, listaMap);

    const arrayTypes = types.split(";").filter(type => type != "");

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
            'sp-def': specialDefense
        }
    }

    pokemonList.push(pokemon);
}

function getPokemon(id) {
    // Seu código aqui
    // Retorne um pokemon da lista que tenha o id enviado
    console.log(id);

    let pokemon = {};
    let encontrado = false;
    let contador = 0;
    //encontrar ele na lista de pokemons pokemonList
    //preencher o objeto pokemon 

    while(!encontrado){
        
        if(pokemonList[contador].id == id){
            pokemon = pokemonList[contador];
            encontrado = true;
        } else{
            contador++;
        }
        
        console.log(contador);
        console.log(pokemon);

    };

    return pokemon;
}

function editPokemon(id, name, hp, attack, defense, speed, specialAttack, specialDefense, types) {
    // Seu código aqui
    // Atenção: types vem como uma stringona, cabe a você transformar num array

    // para editar um pokemon eu tenho que buscar um pokemon (usando o get)
    let pokemon = getPokemon(id);
    let listaType = types.split(';');
    let indice = listaType.indexOf("");

    listaType.splice(indice, 1);

    pokemon.name = name;
    pokemon.stats.hp = hp;
    pokemon.stats.attack = attack;
    pokemon.stats.defense = defense;
    pokemon.stats.speed = speed;
    pokemon.stats['sp-atk'] = specialAttack;
    pokemon.stats['sp-def'] = specialDefense;
    pokemon.type = listaType;

    //console.log(pokemon);
    //console.log(types);
    //console.log(listaType);
}