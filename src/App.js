import logo from './logo.svg';
import { getAll, getByName } from './main'
import React, { useState, useEffect } from 'react'
import './App.css';

function App() {
  const [pokemons, setpokemons] = React.useState([]);

  const [pokebyname, setpokebyname] = React.useState([]);

  const getInfo = async () => {
    const pokemon = await getAll()
    console.log(pokemon.results)

    setpokemons(pokemon.results)
    return pokemon.results;
  }

  const getInfobyName = async (nombre) => {
    const poke = await getByName(nombre)
    console.log(poke.sprites.front_default)

    setpokebyname(poke)
    return poke
  }

  function buscarpokemon() {
    console.log('buscando')
    const inputnombre = document.getElementById('nombredepokemon')
    getInfobyName(inputnombre.value)
  }

  useEffect(() => {
    getInfo()
  }, [])
  if (!pokebyname){
    return <div>
    <input type="text" name="nombre" id="nombredepokemon"></input>
    <button onclick="buscarpokemon()" >buscar</button>
  </div>
  }

  return (
    <div className="App">
      {pokemons.map((pokemon) => {
        return (
          <div>
            <p>{pokemon.name}</p>
          </div>

        )
      })}
      <div>
        <input type="text" name="nombre" id="nombredepokemon"></input>
        <button onClick={() => buscarpokemon()} >buscar</button>
      </div>
      


    </div>
  );
}

export default App;