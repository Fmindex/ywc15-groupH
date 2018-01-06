import './App.css';
import 'react-select/dist/react-select.css';

import React, { Component } from 'react';
import {Map, Marker, google, GoogleApiWrapper} from 'google-maps-react';
import SearchBox from './searchBox';
import Select from 'react-select';
import Button from './button';

export class Home extends Component {

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
                    {/* {<img src={require('./image/bg.jpg')} className="App-logo" alt="logo" />} */}
            </header>
            <div style={{
            width: '100%', 
            left: 0, 
            right: 0, 
            marginRight: 'auto', 
            marginLeft: 'auto', 
            marginBottom: 32, 
            padding: window.screen.width >= 768 ? '32px 32px 24px 32px': '24px 0px 16px 32px', 
            backgroundColor: 'rgba(0, 0, 0, 0.95)', 
            // borderRadius: 16,
            }}>
                <div 
                    className="row"
                    style={{ 
                        verticalAlign: 'middle', 
                        display: 'flex', 
                    }}
                >
                {
                    window.screen.width >= 768 &&
                    <div className="col-sm-2">
                        <div style={{ fontSize: 20, marginLeft: 32, marginTop: 4, color: 'white' }}>
                            Find your route 
                        </div>
                    </div>
                }
                    <div className="col-sm-8 no-padding-l col-xs-8">
                        <Select
                            removeSelected={true}
                            value={this.state.selectedOption}
                            onChange={this.handleChange}
                            className="mk-inline"
                            placeholder=""
                            clearable={false}
                            options={[
                            { value: 'cnx', label: 'Chiang Mai' },
                            { value: 'bkk', label: 'Bangkok' },
                            { value: 'phu', label: 'Phuket' },
                            { value: 'hh', label: 'Hua Hin' },
                            { value: 'dst', label: 'Doi Suthep' },
                            { value: 'dint', label: 'Doi Inthanon' }, 
                            ]}
                        />  
                    </div>
                    
                    <div className="col-sm-2 no-padding-l col-xs-4">
                    <Button 
                            text="SEARCH" 
                            height={40}
                            isActive={true}
                            onClick={this.props.onSearchClick} 
                            major="programming" 
                            color="214, 133, 27, 1"
                        />
                    </div>
                </div> 
            </div>  
            <div className="row">
                <div className="col-sm-3">
                    <Button 
                        text="North" 
                        height={40}
                        isActive={this.state.isActive["programming"]}
                        onClick={this.onTagClick} 
                        major="programming" 
                        color="0, 201, 165, "
                    />
                </div>
                <div className="col-sm-3">
                    <Button 
                        text="South" 
                        height={40}
                        isActive={this.state.isActive["programming"]}
                        onClick={this.onTagClick} 
                        major="programming" 
                        color="0, 201, 165, "
                    />
                </div>
                <div className="col-sm-3">
                    <Button 
                        text="West" 
                        height={40}
                        isActive={this.state.isActive["programming"]}
                        onClick={this.onTagClick} 
                        major="programming" 
                        color="0, 201, 165, "
                 />  
                </div>
                <div className="col-sm-3">
                    <Button 
                        text="East" 
                        height={40}
                        isActive={this.state.isActive["programming"]}
                        onClick={this.onTagClick} 
                        major="programming" 
                        color="0, 201, 165, "
                    />
                </div>
            </div>       
        </div>
    );
  }
}


export default GoogleApiWrapper({
  apiKey: ('AIzaSyA5MyqlGRcFpc6CbveQeM5BgbcObveiIQ8')
})(Home);