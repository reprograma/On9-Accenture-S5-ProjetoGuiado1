let pokemonList = [];

// Filtro

function filterPokemon(name, type) {
    const listaFiltrada = pokemonList.filter(pokemon => {
       
        const searchName = new RegExp(name, 'i'); 
        const checkName = searchName.test(pokemon.name);
        const checkType = type.length == 0 ? true : pokemon.type.includes(type);

            return checkName && checkType;
        })

       return listaFiltrada;
    }

    // Filtro nome e tipo

function validPokemon (pokemon, name, type){
        const searchName = new RegExp(name,'i');
        const checkName = searchName.test(pokemon.name);
        const checkType = type.length == 0 ? true : pokemon.type.includes(type);
        return checkName && checkType;

    }


// Filtro ID Crescente
 
function sortPokemon(filteredList, sortExpression) {
    let listaOrdenada = [];

   switch (sortExpression){
       // O Ascendente está no escopo do Default
        //case 'ID (asc)':
            //listaOrdenada = filteredList.sort((pokemonA,pokemonB) => {
                //return pokemonA.id - pokemonB.id;
            //});
           // break;
        case 'ID (desc)':
            listaOrdenada = filteredList.sort (function(pokemonA, pokemonB) {
                return pokemonA.id - pokemonB.id;  
                
            });
            listaOrdenada.reverse();
            break;
        case 'A-Z':
                listaOrdenada = filteredList.sort((pokemonA, pokemonB) => {
                    if(pokemonA.name > pokemonB.name) {
                        return 1;
                }
                    if(pokemonA.name < pokemonB.name) {
                        return -1;
                    }
        
                    return 0;
        
                })
                 break;


        case 'Z-A':
        listaOrdenada = filteredList.sort((pokemonA, pokemonB) => {
            if(pokemonA.name > pokemonB.name) {
                return -1;
        }
            if(pokemonA.name < pokemonB.name) {
                return 1;
            }

            return 0;

            })
            break;

        default:
            listaOrdenada = filteredList.sort((pokemonA,pokemonB) => {
                return pokemonA.id - pokemonB.id;
            });
            break;    
    }
    
    return listaOrdenada;
}

  
function getPokemon(id) {
    const pokemon = pokemonList.find(pokemon =>
    {
        console.log (pokemonList.indexOf(pokemon));
        return pokemon.id == id

    });
   
    return pokemon;
}

function deletePokemon(id) {
    //Encontrar pokemon, na pokemonList e deletar o pokemon que eu encontrei da pokemon list

   // let pokemon = getPokemon (id);
    //let indice = pokemonList.indexOf(pokemon);
    //console.log(indice);
    //pokemonList.splice(indice,1);

    pokemonList = pokemonList.filter(pokemon => pokemon.id != id);

    }
    

function editPokemon(id, name, hp, attack, defense, speed, specialAttack, specialDefense, types) {
   let pokemon = getPokemon(id);
   let listaType = type.splite(';');
   let indice = listaType.indexOf ("");

   listaType=lista.splice (indice,1);


   pokemon.name = name;
   pokemon.stats.hp = hp;
   pokemon.stats.attack = attack;
   pokemon.stats.defense = defense;
   pokemon.stats.speed = speed;
   pokemon['stats'] ['sp-atk'] = specialAttack;
   pokemon['stats'] ['sp-def'] = specialDefense;
   pokemon.type = listaType;
   
}

function addPokemon(name, hp, attack, defense, speed, specialAttack, specialDefense, types) {
    // Seu código aqui
    // Atenção: types vem como uma stringona, cabe a você transformar num array




}