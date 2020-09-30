import React from 'react';
import { BASE_POSTER_PATH } from '../../tmdbConfig/MovieConfig';
import './Movie.css';
const Movie = (props) => {
  return (
    <div className='movie_box'>
      <div className='movie_poster'>
        <img src={`${BASE_POSTER_PATH}/w200${props.poster}`} alt='' />
      </div>
      <div className='movie_infos'>
        <div className='movie_title'>{props.title}</div>
        <div className='movie_desc'>{props.desc.substring(0, 100)}...</div>
        <div className='movie_release'>Release Date: {props.relDate}</div>
      </div>
    </div>
  );
};
export default Movie;
