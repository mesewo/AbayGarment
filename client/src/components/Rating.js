import React from 'react';
import PropTypes from 'prop-types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar, faStarHalfAlt, faStar as faStarOutline } from '@fortawesome/free-solid-svg-icons';
import './Rating.css';

const Rating = ({ value, text, color = '#f8e825' }) => {
  return (
    <div className="rating">
      {[1, 2, 3, 4, 5].map((index) => (
        <span
          key={index}
          className={`rating-star ${
            value >= index ? '' : value >= index - 0.5 ? 'half' : 'empty'
          }`}
          style={{ color }}
        >
          {value >= index ? (
            <FontAwesomeIcon icon={faStar} />
          ) : value >= index - 0.5 ? (
            <FontAwesomeIcon icon={faStarHalfAlt} />
          ) : (
            <FontAwesomeIcon icon={faStarOutline} />
          )}
        </span>
      ))}
      {text && <span className="rating-text">{text}</span>}
    </div>
  );
};

Rating.propTypes = {
  value: PropTypes.number, // Remove `.isRequired` to make it optional
  text: PropTypes.string,
  color: PropTypes.string,
};

export default Rating;