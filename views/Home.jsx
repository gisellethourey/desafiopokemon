import React, { useState, useEffect } from 'react';

const Home = () => {
  const [pikachuImage, setPikachuImage] = useState('');

  useEffect(() => {
    const fetchPikachuImage = async () => {
      try {
        const response = await fetch('https://pokeapi.co/api/v2/pokemon/pikachu');
        if (!response.ok) {
          throw new Error('No se pudo obtener la información de Pikachu');
        }
        const data = await response.json();
        const image = data.sprites.other['official-artwork'].front_default;
        if (image) {
          setPikachuImage(image);
        } else {
          throw new Error('No se encontró una imagen de Pikachu');
        }
      } catch (error) {
        console.error('Error fetching Pikachu image:', error);
      }
    };

    fetchPikachuImage();
  }, []);

  return (
    <div>
      <h1 className='title'>Bienvenido maestro pokémon</h1>
      {pikachuImage ? (
        <img src={pikachuImage} alt="Pikachu" style={{ width: '400px', height: '400px' }} />
      ) : (
        <p>Cargando imagen de Pikachu...</p>
      )}
    </div>
  );
};

export default Home;

