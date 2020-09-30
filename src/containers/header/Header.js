import React, { Component } from 'react';
import './Header.css';
import TmdbIcon from '../../assets/tmdb-power.png';
import { Link } from 'react-router-dom';
class Header extends Component {
  render() {
    return (
      <header className='header_'>
        <div className='container'>
          <div className='header_block d-flex align-items-center justify-content-between'>
            <div className='logo_block'>
              <Link to='/'>
                {' '}
                <img className='img_fluid' src={TmdbIcon} alt='' />
              </Link>
            </div>
            <nav className='nav_'>
              <ul className='nav_ul d-flex align-items-center'>
                <li className='nav_li'>
                  <Link to='/nowplayng'>Now Playing</Link>
                </li>
                <li className='nav_li'>
                  <Link to='/upcoming'>Coming Soon</Link>
                </li>
                <li className='nav_li'>
                  <Link to='/search'>Movie Search</Link>
                </li>
                <li className='nav_li'>
                  <Link to='/genres'>Genres</Link>
                </li>
              </ul>
            </nav>
          </div>
        </div>
      </header>
    );
  }
}

export default Header;
