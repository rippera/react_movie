import React, { Component } from 'react';
import * as movieAPI from '../../service/MovieAPI';
import MovieList from '../../components/movie/MovieList';
import './NowPlayng.css';
class NowPlayng extends Component {
  state = {
    movies: [],
    loading: false,
    error: false,
  };
  async componentDidMount() {
    const movies = await movieAPI.getNowPlayng();
    this.setState({ movies, loading: false });
  }
  render() {
    return (
      <div className='card_wrapper'>
        <div className='now_playng_title'>Movies In Theaters Now</div>
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

export default NowPlayng;
