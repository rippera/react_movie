import React, { Component } from 'react';
import * as movieAPI from '../../service/MovieAPI';
import MovieList from '../../components/movie/MovieList';
class Upcoming extends Component {
  state = {
    movies: [],
    loading: false,
    error: false,
  };
  async componentDidMount() {
    const movies = await movieAPI.getUpcoming();
    this.setState({ movies });
    console.log(movies);
  }
  render() {
    return (
      <div className='card_wrapper'>
        <div className='now_playng_title'>Upcoming Movies</div>
        <div className='container'>
          <div className='row'>
            <MovieList
              loading={this.state.loading}
              error={this.state.error}
              movies={this.state.movies}
            />
          </div>
        </div>
      </div>
    );
  }
}

export default Upcoming;
