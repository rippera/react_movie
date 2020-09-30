import React, { Component } from 'react';
import * as movieAPI from '../../service/MovieAPI';
import { Link } from 'react-router-dom';
import './Genre.css';
class Genre extends Component {
  render() {
    return (
      <Link to={`/genres/${this.props.title}/${this.props.id}`}>
        <div className='genre_box'>{this.props.title}</div>
      </Link>
    );
  }
}

export default Genre;
