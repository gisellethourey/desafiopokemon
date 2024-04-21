import React, { useContext, useState } from 'react';
import { PokemonContext } from '../context/PokemonContext';
import Button from 'react-bootstrap/Button';
import { useNavigate } from 'react-router-dom';

const Selector = () => {
  const pokemonList = useContext(PokemonContext);
  const [selectedPokemon, setSelectedPokemon] = useState('');
  const navigate = useNavigate();

  const handleChange = (event) => {
    setSelectedPokemon(event.target.value);
  };

  const handleVerDetalle = () => {
    if (selectedPokemon) {
      navigate(`/pokemones/${selectedPokemon}`);
    }
  };

  return (
    <div className="container mt-4 d-flex flex-column align-items-center">
      <h2>Selector de Pokémon</h2>
      <select className="form-select mb-3" value={selectedPokemon} onChange={handleChange} style={{ width: '30%' }}>
        <option value="">Selecciona un Pokémon</option>
        {pokemonList.map((pokemonName, index) => (
          <option key={index} value={pokemonName}>
            {pokemonName}
          </option>
        ))}
      </select>
      <div className="d-grid" style={{ width: '15%' }}>
        <Button variant="dark" className="mb-4" onClick={handleVerDetalle}>Ver Detalle</Button>
      </div>
    </div>
  );
};

export default Selector;
