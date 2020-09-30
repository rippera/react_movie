import React, { Component } from 'react';
import Card from '../card/Card';
import Movie from './Movie';
import { Link } from 'react-router-dom';

class MovieList extends Component {
  state = {
    id: null,
    movieDetails: false,
  };
  selectMovieHandler = (movieId) => {
    console.log(movieId);
    if (movieId != null) {
      this.setState({ id: movieId, movieDetails: true });
    }
  };
  render() {
    const { movies } = this.props;
    let movieInfo = null;
    return (
      <React.Fragment>
        {
          (movieInfo = movies.map((item) => {
            return (
              <React.Fragment key={item.id}>
                <Card
                  movieId={item.id}
                  goToMovieDetails={this.selectMovieHandler}
                >
                  <Link to={`/movie/${item.id}`}>
                    <Movie
                      title={item.title}
                      poster={item.poster_path}
                      desc={item.overview}
                      relDate={item.release_date}
                    />
                  </Link>
                </Card>
              </React.Fragment>
            );
          }))
        }
      </React.Fragment>
    );
  }
}

export default MovieList;
