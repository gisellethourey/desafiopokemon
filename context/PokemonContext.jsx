import React, { createContext, useState, useEffect } from 'react';

export const PokemonContext = createContext();

export const PokemonProvider = ({ children }) => {
  const [pokemonList, setPokemonList] = useState([]);

  useEffect(() => {
    const fetchPokemonList = async () => {
      try {
        const response = await fetch('https://pokeapi.co/api/v2/pokemon?limit=151');
        if (!response.ok) {
          throw new Error('Failed to fetch Pokemon list');
        }
        const data = await response.json();
        setPokemonList(data.results.map(pokemon => pokemon.name));
      } catch (error) {
        console.error('Error fetching Pokemon list:', error);
      }
    };

    fetchPokemonList();
  }, []);

  return (
    <PokemonContext.Provider value={pokemonList}>
      {children}
    </PokemonContext.Provider>
  );
};
