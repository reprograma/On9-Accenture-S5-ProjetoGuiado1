let pokemonList = [];

function filterPokemon(name, type) {  
const listaFiltrada = pokemonList.filter(pokemon => {
   const searchName = new RegExp(name , 'i');
   const checkName = searchName.test(pokemon.name);  
   const checkType = type.length == 0 ? true : pokemon.type.includes(type);
   return checkName && checkType;
})
    return listaFiltrada;
}

function sortPokemon(filteredList, sortExpression) {
console.log(sortExpression);
let listaOrdenada = [];
switch (sortExpression) {
    case 'ID (desc)':
        listaOrdenada = filteredList.sort(function(pokemonA,pokemonB){
            return pokemonA.id - pokemonB.id
        }); 
        listaOrdenada.reverse();
        break;
        case 'A-Z':
        listaOrdenada = filteredList.sort((pokemonA, pokemonB)=>{
            if(pokemonA.name > pokemonB.name){
                return 1;
            }
            if (pokemonA.name < pokemonB.name){
                return -1;
            }
            return 0;
        });
        break;
        case 'Z-A':
            listaOrdenada = filteredList.sort((pokemonA, pokemonB)=>{
                if(pokemonA.name > pokemonB.name){
                    return -1;
                }
                if (pokemonA.name < pokemonB.name){
                    return 1;
                }
                return 0;
            }); 
            break
            default: 
            listaOrdenada = filteredList.sort((pokemonA, pokemonB)=>{
            return pokemonA.id - pokemonB.id;
            });
            break
        }
        return listaOrdenada;
    }

function getPokemon(id) {
    const pokemon = pokemonList.find(pokemon => pokemon.id == id);
    return pokemon;
}

function deletePokemon(id) {
  pokemonList.splice(getPokemon(id),1)
}
       
function addPokemon(name, hp, attack, defense, speed, specialAttack, specialDefense, types) {
   
    let pokemon = Object();

    let arrayTypes = types.split(';');
    arrayTypes = arrayTypes.filter(type => type != "");

    const listMap = pokemonList.map(pokemon => pokemon.id);
    const max = Math.max.apply(null, listMap);
    
    pokemon = {
        id : max + 1, 
        name: name,
        stats:{
            hp:hp,
            attack:attack,
            defense:defense,
            speed:speed,
            'sp-atk':specialAttack,
            'sp-def':specialDefense
        },
        type:arrayTypes,    
    
    };
    pokemonList.push(pokemon);
}

function editPokemon(id, name, hp, attack, defense, speed, specialAttack, specialDefense, types) {
    let pokemon = getPokemon(id);
    let arrayTypes = types.split(';');
    let indice = arrayTypes.indexOf("");
    arrayTypes.splice(indice,1)

    pokemon.name = name;
    pokemon.stats.hp = hp;
    pokemon.stats.attack = attack;
    pokemon.stats.defense = defense;
    pokemon.stats.speed = speed;
    pokemon.stats['sp-atk']= specialAttack;
    pokemon.stats['sp-def']= specialDefense;
    pokemon.type = arrayTypes;
}