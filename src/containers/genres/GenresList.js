import React, { Component } from 'react';
import * as movieAIP from '../../service/MovieAPI';
import MovieList from '../../components/movie/MovieList';
class GenresList extends Component {
  state = {
    pageTitle: '',
    movies: [],
    loading: false,
    error: false,
  };
  async componentDidMount() {
    const id = this.props.match.params.id;
    const genresName = this.props.match.params.type;

    const resp = await movieAIP.getMoviesByGenre(id);
    this.setState({ movies: resp, pageTitle: genresName });
  }
  render() {
    const { pageTitle, movies } = this.state;
    return (
      <div className='genres_sections'>
        <div className='container'>
          <div className='now_playng_title'>{pageTitle} Movies</div>
          <div className='row'>
            <MovieList
              loading={this.state.loading}
              error={this.state.error}
              movies={movies}
            />
          </div>
        </div>
      </div>
    );
  }
}
export default GenresList;
