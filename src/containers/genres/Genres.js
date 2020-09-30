import React, { Component } from 'react';
import * as movieAIP from '../../service/MovieAPI';
import Genre from './Genre';
class Genres extends Component {
  state = {
    genres: [],
    loading: false,
    error: false,
  };
  async componentDidMount() {
    const genres = await movieAIP.getAllGenres();
    console.log(genres);
    this.setState({ genres });
  }
  render() {
    const { genres } = this.state;
    return (
      <div className='genres_sections'>
        <div className='container'>
          <div className='row'>
            {genres.map((item) => {
              return (
                <div className='col-lg-3' key={item.id}>
                  <Genre title={item.name} id={item.id} />
                </div>
              );
            })}
          </div>
        </div>
      </div>
    );
  }
}

export default Genres;
