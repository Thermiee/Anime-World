import React from 'react';
import PropTypes from 'prop-types';

const FactCard = (props) => {
  const {
    name, image,
  } = props;

  return (
    <div className="animeFacts-card">
      <div className="anime-card-image">
        <img src={image} alt={name} />
      </div>
      <div className="anime-card-info">
        <h3>{name}</h3>
      </div>
    </div>
  );
};

FactCard.propTypes = {
  name: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
};

export default FactCard;
