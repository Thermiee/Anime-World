import React from 'react';
import PropTypes from 'prop-types';

const FactCard = (props) => {
  const { fact } = props;
  return (
    <div className="animeFacts-card">
      <div className="anime-card-info">
        <p>{fact}</p>
      </div>
    </div>
  );
};

FactCard.propTypes = {
  fact: PropTypes.string.isRequired,
};

export default FactCard;
