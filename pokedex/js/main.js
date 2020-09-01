$(document).ready(function () {
  let warning
  let allPokemons = [];
  let pokedexChilds
  let pokedexValues
  let pokemonTypes = []
  const pokedexElement = $('.pokedex')
  const filterName = $('#filter-name')
  const filterType = $('#filter-type')
  const sortType = $('#sort-type')

  fetch('https://borgesdn.github.io/pokedex-source/pokedex.json')
    .then(res => res.json())
    .then(json => {
      allPokemons = json
      loadPokedex(allPokemons, sortType.value)
    })

  $(document).on('keyup', e => {
    if (e.key === 'Escape') {
      filterType.options[0].selected = 'selected'
      sortType.options[0].selected = 'selected'
      filterName.value = ''
      filterName.blur()
      loadPokedex(pokedexValues, sortType.value)
      filter()
    }
  })

  filterName.on('keyup', e => {
    filter()
  })

  filterType.on('change', e => {
    e.preventDefault()
    filter()
    filterType.blur()
  })

  sortType.on('change', e => {
    e.preventDefault() 
    sort()   
    sortType.blur()
  })

  function filter() {
    const name = filterName.val()
    const type = filterType.val()

    const filteredList = filterPokemon(allPokemons, name, type);
    loadPokedex(filteredList);

    return filteredList;
  }

  function sort(){
    const pokemonList = filter();
    const sortExpression = sortType.val()
    const sortedList = sortPokemon(pokemonList, sortExpression)

    loadPokedex(sortedList);
  }

  function loadPokedex(pokedex) {
    const view = pokedex
      .map(p => pokemonCard(p))
      .join('')
    pokedexElement.html(view + '<div class="warning hidden">Nenhum pokemon foi encontrado.</div>')
    pokedexChilds = Array.from($('.pokemon'))
    warning = $('.warning')
    loadTypeFilter(pokemonTypes.uniq().sort())
    pokedexValues = pokedex
  }

  function pokemonCard(pokemon) {
    const types = pokemon.type
      .map(t => `<span class="pokemon-type background-${t}">${t}</span>`)
      .join('')
    const img = pokemon.name.replace(/['\.]/g, '').replace(/\s/g, '-')
    pokemonTypes = pokemonTypes.concat(pokemon.type)
    return `<div class="pokemon" data-name="${pokemon.name}" data-type="${pokemon.type}" tabindex="${pokemon.id}">
      <figure class="pokemon-figure">
        <img src="img/${img.toLowerCase()}.png" alt="${pokemon.name}">
      </figure>
      <section class="pokemon-description">
        <span class="pokemon-id">#${Number(pokemon.id).toString().padStart(3, '0')}</span>
        <h1 class="pokemon-name">${pokemon.name}</h1>
        <div class="pokemon-types">${types}</div>
      </section>
      <section class="pokemon-stats">${loadStats(pokemon.stats)}</section>
    </div>`
  }

  function loadTypeFilter(types) {
    types.map(t => filterType.append(`<option>${t}</option>`))
  }

  function loadStats(stats) {
    return Object.entries(stats)
      .filter(([name, value]) => !['total'].includes(name))
      .map(([name, value]) =>
        `<div class="stat-row">
        <div>${name}</div>
        <div class="stat-bar">
          <div class="stat-bar-bg" style="width: ${100 * value / 250}%">${value}</div>
        </div>
      </div>`
      )
      .join('')
  }

  Array.prototype.uniq = function () {
    return this.filter(function (value, index, self) {
      return self.indexOf(value) === index
    })
  }
});