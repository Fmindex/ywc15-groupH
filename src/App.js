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

export default class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      renderedPage: 'home',
    }
    this.onSearchClick = this.onSearchClick.bind(this);
  }

  onSearchClick() { 
    this.setState({
      renderedPage: 'map',
    })
  }

  render() {
    return (
      <div style={{ width: '100%' }}>
        <Home onSearchClick={this.onSearchClick} />
        <MapPage />
      </div>
    );
  }
  
}

