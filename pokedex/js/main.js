$(document).ready(function () {
  let allPokemons = [];
  let pokemonTypes = ["bug", "dragon", "electric", "fairy", "fighting", "fire", "flying", "ghost", "grass", "ground", "ice", "normal", "poison", "psychic", "rock", "steel", "water"]

  fetch('https://borgesdn.github.io/pokedex-source/pokedex.json')
    .then(res => res.json())
    .then(json => {
      allPokemons = json
      load(allPokemons)
    })

  $('#filter-name').on('keyup', e => {
    filter()
  })

  $('#filter-type').on('change', e => {
    e.preventDefault()
    filter()
    $('#filter-type').blur()
  })

  $('#sort-type').on('change', e => {
    e.preventDefault()
    sort()
    $('#sort-type').blur()
  })

  $('.btn-new').on('click', function (e) {
    e.preventDefault()
    cleanForm()
    $(".modal-title").html("Cadastrar Pokemon")
    $(".modal").modal('show')
  })

  function cleanForm() {
    $("#name").val("")
    $("#hp").val("")
    $("#atk").val("")
    $("#def").val("")
    $("#speed").val("")
    $("#satk").val("")
    $("#def").val("")

    $('.type').prop('checked', false)
  }

  $(".btn-save").on('click', function (e) {
    e.preventDefault()

    let types = ''
    $('.type:checked').each(function(){
      types += `${$(this).val()};`;
    });

    addPokemon(allPokemons, $("#name").val(), $("#hp").val(), $("#atk").val(), $("#def").val(),
      $("#speed").val(), $("#satk").val(),
      $("#def").val(), types)
  })

  function filter() {
    const name = $('#filter-name').val()
    const type = $('#filter-type').val()

    const filteredList = filterPokemon(allPokemons, name, type);
    load(filteredList);

    return filteredList;
  }

  function sort() {
    const pokemonList = filter();
    const sortExpression = $('#sort-type').val();
    const sortedList = sortPokemon(pokemonList, sortExpression);

    load(sortedList);
  }

  function exclude(e) {
    e.preventDefault();

    $('#filter-name').val("")
    $('#filter-type').val("")
    $('#sort-type').val("")
    allPokemons = deletePokemon(allPokemons, $(this).data("id"))

    load(allPokemons)
  }

  function load(pokedex) {
    const view = pokedex
      .map(p => createCard(p))
      .join('')
    $('.pokedex').html(view + '<div class="warning hidden">Nenhum pokemon foi encontrado.</div>')

    $(".btn-trash").off("click")
    $(".btn-trash").on("click", exclude)
  }

  function createCard(pokemon) {
    const types = pokemon.type
      .map(t => `<span class="pokemon-type background-${t}">${t}</span>`)
      .join('')
    const img = pokemon.name.replace(/['\.]/g, '').replace(/\s/g, '-')
    return `<div class="pokemon" data-name="${pokemon.name}" data-type="${pokemon.type}" tabindex="${pokemon.id}">
    <div class="btn-toolbar float-right mt-2" role="toolbar" aria-label="Toolbar with button groups">
      <div class="btn-group btn-group-sm mr-2" role="group" aria-label="First group">
        <button type="button" class="btn btn-link">
          <svg width="1em" height="1em" viewBox="0 0 16 16" class="bi bi-pencil" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
            <path fill-rule="evenodd" d="M12.146.146a.5.5 0 0 1 .708 0l3 3a.5.5 0 0 1 0 .708l-10 10a.5.5 0 0 1-.168.11l-5 2a.5.5 0 0 1-.65-.65l2-5a.5.5 0 0 1 .11-.168l10-10zM11.207 2.5L13.5 4.793 14.793 3.5 12.5 1.207 11.207 2.5zm1.586 3L10.5 3.207 4 9.707V10h.5a.5.5 0 0 1 .5.5v.5h.5a.5.5 0 0 1 .5.5v.5h.293l6.5-6.5zm-9.761 5.175l-.106.106-1.528 3.821 3.821-1.528.106-.106A.5.5 0 0 1 5 12.5V12h-.5a.5.5 0 0 1-.5-.5V11h-.5a.5.5 0 0 1-.468-.325z"/>
          </svg>
        </button>
        <button type="button" class="btn btn-link btn-trash" data-id="${pokemon.id}">
          <svg width="1em" height="1em" viewBox="0 0 16 16" class="bi bi-trash" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
            <path d="M5.5 5.5A.5.5 0 0 1 6 6v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm2.5 0a.5.5 0 0 1 .5.5v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm3 .5a.5.5 0 0 0-1 0v6a.5.5 0 0 0 1 0V6z"/>
            <path fill-rule="evenodd" d="M14.5 3a1 1 0 0 1-1 1H13v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V4h-.5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1H6a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1h3.5a1 1 0 0 1 1 1v1zM4.118 4L4 4.059V13a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V4.059L11.882 4H4.118zM2.5 3V2h11v1h-11z"/>
          </svg>
        </button>
      </div>
    </div>  
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

  function loadTypes(types) {
    types.map(t => $('#filter-type').append(`<option>${t}</option>`))

    types.map(t => $('.ckb-types').append(`<div class="form-check form-check-inline"><input class="form-check-input type" type="checkbox"" value="${t}"><label class="form-check-label">${t}</label></div>`))
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

  loadTypes(pokemonTypes)
});