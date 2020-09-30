import React from 'react';

const Card = (props) => {
  return (
    <div
      className='col-lg-6'
      onClick={() => props.goToMovieDetails(props.movieId)}
    >
      {props.children}
    </div>
  );
};
export default Card;
