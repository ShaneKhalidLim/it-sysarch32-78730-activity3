import React from 'react';

function Pokemon({ pokemon, language }) {
  const elementColor = {
    'Grass': '#78c850',
    'Fire': '#f08030',
    'Water': '#6890f0',
    'Bug': '#a8b820',
    'Normal': '#a8a878',
    'Poison': '#a040a0',
    'Flying': '#a890f0',
    'Electric': '#f8d030',
    'Ground': '#e0c068',
    'Fairy': '#ee99ac',
    'Fighting': '#c03028',
    'Psychic': '#f85888',
    'Rock': '#b8a038',
    'Steel': '#b8b8d0',
    'Ice': '#98d8d8',
    'Ghost': '#705898',
    'Dragon': '#7038f8',
  };
  return (
    <div className="card">
      <img src={pokemon.image} alt={pokemon.name[language]} />
      <div className="id-name">
        <p>[{pokemon.id}]</p>
        <p>{pokemon.name[language]}</p>
      </div>
      <div className="type-container">
        {pokemon.type.map((type, index) => (
          <div key={index} className="type" style={{ backgroundColor: elementColor[type] }}>{type}</div>
        ))}
      </div>
      <div className="container">
        <div className="skill">
          <p>HP: {pokemon.base.HP}</p>
          <p>Attk: {pokemon.base.Attack}</p>
          <p>Def: {pokemon.base.Defense}</p>
        </div>
        <div className="special">
          <p>Speed: {pokemon.base.Speed}</p>
          <p>Sp. Attk: {pokemon.base['Sp. Attack']}</p>
          <p>Sp. Def: {pokemon.base['Sp. Defense']}</p>
        </div>
      </div>
    </div>
  );
}

export default Pokemon;