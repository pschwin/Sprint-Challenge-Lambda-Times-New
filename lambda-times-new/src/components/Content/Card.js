import React from 'react';
import PropTypes from 'prop-types';

const Card = props => {
  return (
    <div className="card">
      <div className="headline">{props.cardyB.headline}</div>
      <div className="author">
        <div className="img-container">
          <img src={props.cardyB.img} alt=""/>
        </div>
        <span>By {props.cardyB.author}</span>
      </div>
    </div>
  );
};

// Make sure to include PropTypes.
Card.propTypes = {
  cardyB: PropTypes.shape({
    author: PropTypes.string,
    headline: PropTypes.string,
    img: PropTypes.string
  })
}

export default Card;
