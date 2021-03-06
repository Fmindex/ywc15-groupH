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
import App2 from './App2';

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
      

      <Route exact={true} path="/" component={App2} />
        <Route path="/home_review" component={home_review} />

        <Route path="/review1" component={review1} />
        <Route path="/review2" component={review2} />
        
      </div>
    );
  }
  
}

