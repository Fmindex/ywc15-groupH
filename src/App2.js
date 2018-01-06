import './App.css';
import 'react-select/dist/react-select.css';

import React, { Component } from 'react';
import {Map, Marker, google, GoogleApiWrapper} from 'google-maps-react';
import SearchBox from './searchBox';
import Select from 'react-select';
import Button from './button';
import Home from './home';
import MapPage from './mapPage';
import axios from 'axios';

import home_review from './home_review';
import review1 from './review1';
import review2 from './review2';

import {
  BrowserRouter as Router,
  Route,
  Link,
  Redirect,
  withRouter
} from 'react-router-dom'
export default class App extends Component {


  render() {
    return (
      <div style={{ width: '100%', overflowX: 'hidden' }}>
        <Home onSearchClick={this.onSearchClick} />
        <MapPage />
        <img src={require('./image/66666.jpg')} style={{ backgroundSize: 'cover', width: '100%' }}/>
        
      </div>
    );
  }
  
}

