import React from 'react';
import PropTypes from 'prop-types';
import { BsArrowRightCircle } from 'react-icons/bs';

const AnimeCard = (props) => {
  const {
    id, name, image, onClick,
  } = props;

  return (
    <div
      role="button"
      tabIndex="0"
      onClick={onClick}
      onKeyDown={
        (e) => {
          if (e.key === 'Enter') {
            onClick();
          }
        }
    }
      className="anime-card"
    >
      <div className="anime-card-image">
        <img src={image} alt={name} />
      </div>
      <div className="anime-card-info">
        {id}
        <h3>{name}</h3>
        <BsArrowRightCircle />
      </div>
    </div>
  );
};

AnimeCard.propTypes = {
  id: PropTypes.number.isRequired,
  name: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired,
};

export default AnimeCard;
