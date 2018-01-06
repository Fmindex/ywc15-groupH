import './App.css';
import 'react-select/dist/react-select.css';

import React, { Component } from 'react';
import {Map, Marker, google, GoogleApiWrapper} from 'google-maps-react';
import SearchBox from './searchBox';
import Select from 'react-select';
import Tags from './tags';
import axios from 'axios';

export class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      users: [],
      keyWordTerm: '',
      isActive: {
        content: true,
        design: true,
        marketing: true,
        programming: true,
      },
      selectedOption: null,
    }

    this.handleChange = this.handleChange.bind(this);
  }



  handleChange = (selectedOption) => {
    this.setState({ 
      ...this.state,
      selectedOption: selectedOption, 
    });
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={require('./image/logo.png')} className="App-logo" alt="logo" />
        </header>
        <div className="main-container">
          <div style={{ 
            width: '80%', 
            left: 0, 
            right: 0, 
            marginRight: 'auto', 
            marginLeft: 'auto', 
            marginTop: 32, 
            marginBottom: 32, 
            padding: 32, 
            backgroundColor: 'rgba(0, 0, 0, 0.1)', 
            // borderRadius: 16,
            padding: 32, 
          }}>
            <div style={{ 
                verticalAlign: 'middle', 
                display: 'flex', 
            }}>
              {
                // <SearchBox 
                //   style={{ width: '60%', display: 'inline-block', marginRight: 32, marginLeft: 48 }} 
                //   value={this.state.keyWordTerm} 
                //   onKeyPressed={this.onKeyPressed} 
                // />
              }
              <Select
                value={this.state.selectedOption}
                onChange={this.handleChange}
                multi
                className="mk-inline"
                placeholder="Place.."
                clearable={false}
                options={[
                  { value: 'cnx', label: 'Chiang Mai' },
                  { value: 'bkk', label: 'Bangkok' },
                  { value: 'phu', label: 'Phuket' },
                  { value: 'hh', label: 'Hua Hin' },
                  { value: 'dst', label: 'Doi Suthep' },
                  { value: 'dst', label: 'Doi Inthanon' },
                ]}
              />  
            </div>  
            <Tags isActive={this.state.isActive} onTagClick={this.onTagClick} />
            
          </div>  
        
        </div>
      </div>
    );
  }
}


export default GoogleApiWrapper({
  apiKey: ('AIzaSyA5MyqlGRcFpc6CbveQeM5BgbcObveiIQ8')
})(App);