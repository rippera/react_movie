import React, { Component } from 'react';
import * as movieAPI from '../../service/MovieAPI';
import { BASE_POSTER_PATH } from '../../tmdbConfig/MovieConfig';

class MovieDetails extends Component {
  state = {
    movieInfo: null,
    movieReviews: null,
  };
  async componentDidMount() {
    const { id } = this.props.match.params;
    if (id) {
      try {
        const movieInfo = await movieAPI.getMovieDetailsById(id);
        const movieReviews = await movieAPI.getMovieReviewsById(id);
        this.setState({ movieInfo, movieReviews });
        // console.log(movieInfo);
      } catch (error) {
        console.log(error);
        throw error;
      }
    }
  }
  render() {
    const { movieInfo, movieReviews } = this.state;
    console.log(movieReviews);
    let movieDetails = null;
    if (movieInfo) {
      let movieInfoBackground = {
        width: '100%',
        minHeight: 'calc(100vh - 116px)',
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover',
        backgroundPosition: 'center,center',
        backgroundImage: `url(${BASE_POSTER_PATH}/original${movieInfo.backdrop_path})`,
      };
      return (movieDetails = (
        <div className='movie_info_block' style={movieInfoBackground}>
          <div className='container'>
            <div className='movie_info_title'>{movieInfo.title}</div>
            <div className='row'>
              <div className='col-lg-6'>
                <div className='movie_info_poster'>
                  <img
                    src={`${BASE_POSTER_PATH}/w300${movieInfo.poster_path}`}
                    alt=''
                  />
                </div>
              </div>
              <div className='col-lg-6'>
                <div className='movie_infos movie_info_box'>
                  <div className='movie_desc'>{movieInfo.overview}</div>
                  <div className='movie_release'>
                    Release Date: {movieInfo.release_date}
                  </div>
                  <div className='movie_release'>
                    Status: {movieInfo.status}
                  </div>
                </div>
                {movieReviews.length > 0 &&
                  movieReviews.map((review) => {
                    return (
                      <div key={review.id} className='review_box'>
                        <div className='rev_author'>
                          Author: {review.author}
                        </div>
                        <div className='rev_content'>{review.content}</div>
                      </div>
                    );
                  })}
              </div>
            </div>
          </div>
        </div>
      ));
    }
    return movieDetails;
  }
}
export default MovieDetails;
