import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar, faStarHalfAlt, faStar as faStarOutline } from '@fortawesome/free-solid-svg-icons';

const Rating = ({ value, text }) => {
  return (
    <div className="rating">
      <span>
        {value >= 1 ? (
          <FontAwesomeIcon icon={faStar} />
        ) : value >= 0.5 ? (
          <FontAwesomeIcon icon={faStarHalfAlt} />
        ) : (
          <FontAwesomeIcon icon={faStarOutline} />
        )}
      </span>
      <span>
        {value >= 2 ? (
          <FontAwesomeIcon icon={faStar} />
        ) : value >= 1.5 ? (
          <FontAwesomeIcon icon={faStarHalfAlt} />
        ) : (
          <FontAwesomeIcon icon={faStarOutline} />
        )}
      </span>
      <span>
        {value >= 3 ? (
          <FontAwesomeIcon icon={faStar} />
        ) : value >= 2.5 ? (
          <FontAwesomeIcon icon={faStarHalfAlt} />
        ) : (
          <FontAwesomeIcon icon={faStarOutline} />
        )}
      </span>
      <span>
        {value >= 4 ? (
          <FontAwesomeIcon icon={faStar} />
        ) : value >= 3.5 ? (
          <FontAwesomeIcon icon={faStarHalfAlt} />
        ) : (
          <FontAwesomeIcon icon={faStarOutline} />
        )}
      </span>
      <span>
        {value >= 5 ? (
          <FontAwesomeIcon icon={faStar} />
        ) : value >= 4.5 ? (
          <FontAwesomeIcon icon={faStarHalfAlt} />
        ) : (
          <FontAwesomeIcon icon={faStarOutline} />
        )}
      </span>
      <span>{text && text}</span>
    </div>
  );
};

export default Rating;