import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

const Pokemones = () => {
  const { pokemonId } = useParams();
  const [pokemonDetail, setPokemonDetail] = useState(null);

  useEffect(() => {
    const fetchPokemonDetail = async () => {
      try {
        const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemonId}`);
        if (!response.ok) {
          throw new Error('Failed to fetch Pokemon detail');
        }
        const data = await response.json();
        setPokemonDetail({
          name: data.name,
          abilities: data.abilities.map(ability => ability.ability.name),
          hp: data.stats.find(stat => stat.stat.name === 'hp').base_stat,
          attack: data.stats.find(stat => stat.stat.name === 'attack').base_stat,
          defense: data.stats.find(stat => stat.stat.name === 'defense').base_stat,
          specialAttack: data.stats.find(stat => stat.stat.name === 'special-attack').base_stat,
          specialDefense: data.stats.find(stat => stat.stat.name === 'special-defense').base_stat,
          speed: data.stats.find(stat => stat.stat.name === 'speed').base_stat,
          imageUrl: data.sprites.other['official-artwork'].front_default, 
        });
      } catch (error) {
        console.error('Error fetching Pokemon detail:', error);
      }
    };

    fetchPokemonDetail();
  }, [pokemonId]);

  return (
    <div className="card">
      <div className="card-body">
        {pokemonDetail ? (
          <div className="row">
            <div className="col-md-4">
              <img className="pokemon-image img-fluid" src={pokemonDetail.imageUrl} alt={pokemonDetail.name} />
            </div>
            <div className="col-md-8">
              <h2>{pokemonDetail.name}</h2>
              <ul>
                <li>HP: {pokemonDetail.hp}</li>
                <li>Atack: {pokemonDetail.attack}</li>
                <li>Defense: {pokemonDetail.defense}</li>
                <li>Special-atack: {pokemonDetail.specialAttack}</li>
                <li>special-defense: {pokemonDetail.specialDefense}</li>
                <li>Speed: {pokemonDetail.speed}</li>
              </ul>
              <ul>
                {pokemonDetail.abilities.map((ability, index) => (
                  <ul key={index}>{ability}</ul>
                ))}
              </ul>
            </div>
          </div>
        ) : (
          <p>Cargando...</p>
        )}
      </div>
    </div>
  );
};

export default Pokemones;
