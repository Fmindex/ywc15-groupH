import './App.css';
import 'react-select/dist/react-select.css';

import React, { Component } from 'react';
import GoogleMapReact from 'google-map-react';
import SearchBox from './searchBox';
import Select from 'react-select';
import Tag from './button';
import axios from 'axios';
const AnyReactComponent = ({ text }) => <div>{text}</div>;

const { compose } = require("recompose");
const {
  withScriptjs,
  withGoogleMap,
  GoogleMap,
  Marker,
  InfoWindow,
} = require("react-google-maps");

const MapWithAMarker = compose(
    withScriptjs,
    withGoogleMap
  )(props =>
    <GoogleMap
      defaultZoom={8}
      defaultCenter={{ lat: -34.397, lng: 150.644 }}
    >
    {
      props.markers.map((marker, index) => {
        return (
         <Marker position={{ lat: marker.lat, lng: marker.lng }} onClick={() => props.onMarkerClick(index)} >
            {
                props.shouldShowMarker[index] &&
                <InfoWindow onCloseClick={() => props.onMarkerClick(index)}>
                    <div>
                        {marker.msg}
                    </div>
                </InfoWindow>
            }
         </Marker>
        );
      })
    }
    </GoogleMap>
  );

export default class MapPage extends Component {

  constructor(props) {
    super(props);
    this.state = {
        shouldShowMarker: [
            true,
            true,
            true,
            true,
            true,
        ],
        new: false,
    }
    this.onMarkerClick = this.onMarkerClick.bind(this);
  }

  static defaultProps = {
    center: {lat: 59.95, lng: 30.33},
    zoom: 48
  };

  onMarkerClick(index) {
    let Obj = this.state.shouldShowMarker;
    Obj[index] = true;
    this.setState({
        ...this.state,
        shouldShowMarker: Obj,
    })
  }

  render() {
    var markers = [
        {lat: -34.397, lng: 150.644, msg: 'ดอยผาผึ้ง'},
        {lat: -34.300, lng: 150.675, msg: 'ดอยอินทนนท์'},
        {lat: -34.000, lng: 150.135, msg: 'ดอยปุย'},
        {lat: -34.100, lng: 150.675, msg: 'ม่อนแจ่ม'},
        {lat: -34.250, lng: 150.475, msg: 'นิมมาน'},
    ];
    return (
      <div className="App" style={{ marginTop: '64px' }}>
        
        <div style={{ fontSize: '20px', fontWeight: 'bold', marginLeft: '64px', marginBottom: '16px' }}>
           แนะนำเส้นทางเที่ยว
            
          <div  onClick={() => this.setState({ ...this.state, new: !this.state.new })}
          style={{ marginLeft: '32px',fontSize: '14px', cursor: 'pointer' ,borderStyle: 'solid', width: '64px', display: 'inline' }}>
            {this.state.new ? 'NEW' : 'OLD'}
          </div>
          </div>
        <div 
            className="col-sm-9 no-padding"
            style={{
                height: 440,
            }}
        >
        {
          this.state.new ? 
          <img src={require('./image/map.jpg')} height={'400px'} width={'100%'}/>
          :
          <MapWithAMarker
                markers={markers}
                shouldShowMarker={this.state.shouldShowMarker}
                onMarkerClick={this.onMarkerClick}
                googleMapURL="https://maps.googleapis.com/maps/api/js?key=AIzaSyC4R6AN7SmujjPUIGKdyao2Kqitzr1kiRg&v=3.exp&libraries=geometry,drawing,places"
                loadingElement={<div style={{ height: `100%` }} />}
                containerElement={<div style={{ height: `400px` }} />}
                mapElement={<div style={{ height: `100%` }} />}
            />
        }
        </div>
        <div className="col-sm-3">
            <div className="row" 
                style={{ cursor: 'pointer', borderRightWidth: 0, borderLeftWidth: 0,borderTopWidth: '1px',borderBottomWidth: '1px',  borderColor: 'rgba(0,0,0,0.1)', borderStyle: 'solid' }}
               
            >
              <a href='/review1'>
              <div className="col-sm-5 no-padding">
                <img height="100%" width="80%" src={require('./image/sug.jpg')} style={{ margin: '16px', backgroundSize: 'contain' }} />
              </div>
              <div className="col-sm-7" style={{ marginTop: '16px', marginBottom: '16px' }}>
                ดอยผาผึ้ง
              </div>
              </a>
            </div>
            
            <div className="row" style={{ borderRightWidth: 0, borderLeftWidth: 0,borderTopWidth: '1px',borderBottomWidth: '1px',  borderColor: 'rgba(0,0,0,0.1)', borderStyle: 'solid' }}>
              <div className="col-sm-5 no-padding">
                <img height="100%" width="80%" src={require('./image/c2.PNG')} style={{ margin: '16px', backgroundSize: 'contain' }} />
              </div>
              <div className="col-sm-7" style={{ marginTop: '16px', marginBottom: '16px' }}>
                ดอยสุเทพ
              </div>
            </div>
            
            <div className="row" style={{ borderRightWidth: 0, borderLeftWidth: 0,borderTopWidth: '1px',borderBottomWidth: '1px',  borderColor: 'rgba(0,0,0,0.1)', borderStyle: 'solid' }}>
              <div className="col-sm-5 no-padding">
                <img height="100%" width="80%" src={require('./image/c1.PNG')} style={{ margin: '16px', backgroundSize: 'contain' }} />
              </div>
              <div className="col-sm-7" style={{ marginTop: '16px', marginBottom: '16px' }}>
                ดอยอินทนนท์
              </div>
            </div>
            
            <div className="row" style={{ borderRightWidth: 0, borderLeftWidth: 0,borderTopWidth: '1px',borderBottomWidth: '1px',  borderColor: 'rgba(0,0,0,0.1)', borderStyle: 'solid' }}>
              <div className="col-sm-5 no-padding">
                <img height="100%" width="80%" src={require('./image/c3.jpg')} style={{ margin: '16px', backgroundSize: 'contain' }} />
              </div>
              <div className="col-sm-7" style={{ marginTop: '16px', marginBottom: '16px' }}>
                ดอยปุย
              </div>
            </div>
        </div>
      </div>
    );
  }
}
