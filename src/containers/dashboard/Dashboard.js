import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './Dashboard.css';
class Dashboard extends Component {
  render() {
    return (
      <div className='dashboard_contenr'>
        <div className='container'>
          <div className='row'>
            <div className='col-lg-4'>
              <div className='dashoborad_box'>
                <Link to='/nowplayng'>
                  <div className='dashboard_box_inner'>
                    <i className='fa fa-ticket' aria-hidden='true'></i>
                    <div className='dashboard_title'>now playng</div>
                  </div>
                </Link>
              </div>
            </div>
            <div className='col-lg-4'>
              <div className='dashoborad_box'>
                <Link to='/upcoming'>
                  <div className='dashboard_box_inner'>
                    <i className='fa fa-video-camera' aria-hidden='true'></i>
                    <div className='dashboard_title'>Upcoming Releases</div>
                  </div>
                </Link>
              </div>
            </div>
            <div className='col-lg-4'>
              <div className='dashoborad_box'>
                <Link to='/genres'>
                  <div className='dashboard_box_inner'>
                    <i className='fa fa-film' aria-hidden='true'></i>
                    <div className='dashboard_title'>Genres</div>
                  </div>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Dashboard;
