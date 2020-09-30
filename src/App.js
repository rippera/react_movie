import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './containers/header/Header';
import Dashboard from './containers/dashboard/Dashboard';
import NowPlayng from './containers/nowPlayng/NowPlayng';
import MovieDetails from './components/movie/MovieDetails';
import Upcoming from './containers/upcoming/Upcoming';
import Genres from './containers/genres/Genres';

const App = () => {
  return (
    <div className='App'>
      <Router basename='/movie_app/'>
        <Header />
        <Switch>
          <Route exact path='/' component={Dashboard} />
          <Route exact path='/nowplayng' component={NowPlayng} />
          <Route exact path='/upcoming' component={Upcoming} />
          <Route exact path='/genres' component={Genres} />
          <Route exact path='/movie/:id' component={MovieDetails} />
        </Switch>
      </Router>
    </div>
  );
};

export default App;
