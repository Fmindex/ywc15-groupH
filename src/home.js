import './App.css';
import 'react-select/dist/react-select.css';

import React, { Component } from 'react';
import {Map, Marker, google, GoogleApiWrapper} from 'google-maps-react';
import SearchBox from './searchBox';
import Select from 'react-select';
import Button from './button';
import { Link, DirectLink, Element , Events, animateScroll as scroll, scrollSpy, scroller } from 'react-scroll';
var createReactClass = require('create-react-class');

var Carousel = require('nuka-carousel');
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

  onSearchClick() {
      console.log("dsdwseds");
      
    
      scroll.scrollToBottom( {
        duration: 1500,
        delay: 100,
        smooth: true,
    })
  }

  handleChange = (selectedOption) => {
    this.setState({ 
      ...this.state,
      selectedOption: selectedOption, 
    });
  }

  render() {
    var Decorators = [{
        component: createReactClass({
          render() {
            return (
              <img
              src={require('./image/slide-down.png')}
                onClick={() => scroller.scrollTo('Suggest',  {
                    duration: 1500,
                    delay: 100,
                    smooth: true,
                })}
                style={{ cursor: 'pointer',width: 40,height: 48,color: 'white', textAlign: 'center', borderStyle: 'solid', borderColor:'white', paddingTop: '8px',fontSize: '18px' }}>
              
              </img>
            )
          }
        }),
        position: 'BottomRight',
        style: {
          padding: 20
        }
      },
      {
        component: createReactClass({
          render() {
            return (
              <img src={require('./image/logo.png')} style={{ 
                width: 96, 
                height: 96, 
                 }}/>
            )
          }
        }),
        position: 'TopCenter',
        style: {
          padding: 20
        }
      },
      {
        component: createReactClass({
          render() {
            return (
              <div  style={{ 
                width: 96, 
                height: 96,
                marginLeft: '256px' ,
                color: 'white',
                fontSize: '24px'
                 }}>
                REVIEWS
                </div>
            )
          }
        }),
        position: 'TopCenter',
        style: {
          padding: 20
        }
      },
    ];
      
     return (
        <div className="App">
            
            <Carousel autoplay={true} autoplayInterval={2000} decorators={Decorators}>
                <img height={window.screen.height - 176} src={require('./image/555555.jpg')} />
                <img height={window.screen.height - 176} src={require('./image/77777.jpg')} />
                <img height={window.screen.height - 176} src={require('./image/555555.jpg')} />
                <img height={window.screen.height - 176} src={require('./image/77777.jpg')} />
                <img height={window.screen.height - 176} src={require('./image/bg.jpg')} />
                <img height={window.screen.height - 176} src={require('./image/77777.jpg')} />
            </Carousel>   
            
            <Element name="Suggest">
            <div style={{
            width: '100%', 
            left: 0, 
            right: 0, 
            marginRight: 'auto', 
            marginLeft: 'auto', 
            marginBottom: 32, 
            padding: window.screen.width >= 768 ? '16px 32px 12px 32px': '24px 0px 16px 32px', 
            backgroundColor: '#1B1B1B', 
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
                        <div style={{ fontSize: 18, marginLeft: 48, marginTop: 4, color: 'white', paddingRight: 0 }}>
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
                    
                    <div className="col-sm-2 no-padding-l col-xs-4" onClick={() => this.onSearchClick()} >
                    <Button 
                            text="SEARCH" 
                            height={34}
                            isActive={true}
                            onClick={this.onSearchClick}
                            major="programming" 
                            color="223, 115, 37, 1"
                        />
                    </div>
                </div> 
            </div>  
            </Element>
                <div className="row" style={{ width: '75%', left: 0, right: 0, margin: 'auto', textAlign: 'center' }}>
                    <div style={{ fontSize: '24px', marginBottom: '24px', fontWeight: 'bold' }}>Suggestion for you</div>
                </div>
                <div 
                     style={{ 
                        width: '75%', 
                        left: 0,
                        right: 0,
                        margin: 'auto', 
                        height: '200px',
                        overflowY: 'hidden',
                        textAlign: 'center'}}>
                        <div style={{ display: 'inline', cursor: 'pointer' }}><img height={180} width={280} src={require('./image/1.png')} style={{ marginLeft: '32px' }} onClick={() => scroll.scrollToBottom( {
                            duration: 1500,
                            delay: 100,
                            smooth: true,
                        })}/></div>
                        <div style={{ display: 'inline', cursor: 'pointer' }}><img height={180} width={280} src={require('./image/2.png')} style={{ marginLeft: '32px' }} onClick={() => scroll.scrollToBottom( {
                            duration: 1500,
                            delay: 100,
                            smooth: true,
                        })}/></div>
                        <div style={{ display: 'inline', cursor: 'pointer' }}><img height={180} width={280} src={require('./image/3.png')} style={{ marginLeft: '32px' }} onClick={() => scroll.scrollToBottom( {
                            duration: 1500,
                            delay: 100,
                            smooth: true,
                        })}/> </div>
                </div>    
            <Element name="Suggest2" >
            <div />
            </Element>
        </div>

        
    );
  }
}


export default GoogleApiWrapper({
  apiKey: ('AIzaSyA5MyqlGRcFpc6CbveQeM5BgbcObveiIQ8')
})(Home);