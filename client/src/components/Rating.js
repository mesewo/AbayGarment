import React from 'react';
import PropTypes from 'prop-types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar, faStarHalfAlt, faStar as faStarOutline } from '@fortawesome/free-solid-svg-icons';

const Rating = ({ value, text, color = '#f8e825' }) => {
  return (
    <div className="flex items-center space-x-1">
      {[1, 2, 3, 4, 5].map((index) => (
        <span
          key={index}
          className={`text-xl ${value >= index ? '' : value >= index - 0.5 ? 'text-yellow-500' : 'text-gray-300'}`}
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
      {text && <span className="ml-2 text-sm text-gray-500">{text}</span>}
    </div>
  );
};

Rating.propTypes = {
  value: PropTypes.number, // Remove `.isRequired` to make it optional
  text: PropTypes.string,
  color: PropTypes.string,
};

export default Rating;
