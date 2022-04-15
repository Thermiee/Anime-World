import React from 'react';
import PropTypes from 'prop-types';

const AnimeCard = (props) => {
  const { name, image } = props;

  return (
    <div className="anime-card">
      <div className="anime-card-image">
        <img src={image} alt={name} />
      </div>
      <div className="anime-card-info">
        <h1>{name}</h1>
      </div>
    </div>
  );
};

AnimeCard.propTypes = {
  name: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
};

export default AnimeCard;
