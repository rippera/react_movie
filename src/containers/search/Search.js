import React, { Component } from 'react';
import * as movieAPI from '../../service/MovieAPI';
import './search.css';
import MovieList from '../../components/movie/MovieList';
class Search extends Component {
  state = {
    value: '',
    movies: null,
    loading: false,
    error: false,
  };
  handleChange = (e) => {
    e.preventDefault();
    this.setState({ value: e.target.value });
  };
  handleSubmit = async (event) => {
    event.preventDefault();
    let searchText = this.state.value;
    try {
      this.setState({ loading: true });
      const movies = await movieAPI.searchMovies(searchText);
      this.setState({
        movies,
        loading: false,
        prevSearch: this.state.value,
        value: '',
      });
    } catch (error) {
      console.log(error);
    }
  };
  render() {
    const { movies, error, loading, prevSearch } = this.state;
    let movieInfo = null;
    if (movies) {
      if (movies.length === 0) {
        movieInfo = (
          <div className='error_report'>
            {' '}
            No movies match your search terms, Please try again.
          </div>
        );
      } else {
        movieInfo = (
          <React.Fragment>
            <div className='movie_result_title'>
              Movie Result for: {prevSearch}
            </div>
            <div className='row'>
              <MovieList
                loading={this.state.loading}
                error={this.state.error}
                movies={movies}
              />
            </div>
          </React.Fragment>
        );
      }
    }
    return (
      <div className='search_section'>
        <div className='container'>
          <div className='search_title'>search movie</div>
          <div className='search_box'>
            <form onSubmit={this.handleSubmit}>
              <input
                value={this.state.value}
                onChange={this.handleChange}
                type='text'
                placeholder='...'
              />
              <button>search</button>
            </form>
          </div>
          {movieInfo ? movieInfo : null}
        </div>
      </div>
    );
  }
}
export default Search;
