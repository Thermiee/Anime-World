import React from 'react';
import { useSelector } from 'react-redux';
import FactCard from '../components/AnimeFacts';

const AnimeFacts = () => {
  const data = useSelector((state) => state.animeReducer.animes);
  return (
    <div className="animeFacts">
      <h1>Facts Page</h1>
      { data.map((name) => (
        <FactCard
          key={name.id}
          name={name.name}
          image={name.image}
        />

      ))}
    </div>
  );
};
export default AnimeFacts;
