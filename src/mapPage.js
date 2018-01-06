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
        console.log(marker.lat);
        return (
         <Marker position={{ lat: marker.lat, lng: marker.lng }} onClick={() => props.onMarkerClick(index)} icon={require('./image/design.png')}>
            {
                props.shouldShowMarker[index] &&
                <InfoWindow onCloseClick={() => props.onMarkerClick(index)}>
                    <div>
                        FM
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
            false,
        ]
    }
    this.onMarkerClick = this.onMarkerClick.bind(this);
  }

  static defaultProps = {
    center: {lat: 59.95, lng: 30.33},
    zoom: 11
  };

  onMarkerClick(index) {
    let Obj = this.state.shouldShowMarker;
    Obj[index] = !Obj[index];
    this.setState({
        ...this.state,
        shouldShowMarker: Obj,
    })
  }

  render() {
    var markers = [
        {lat: -34.397, lng: 150.644},
        {lat: -34.300, lng: 150.675},
    ];
    return (
      <div className="App">
        <div 
            style={{
                height: 400,
                width: 400,
            }}
        >
            <MapWithAMarker
                markers={markers}
                shouldShowMarker={this.state.shouldShowMarker}
                onMarkerClick={this.onMarkerClick}
                googleMapURL="https://maps.googleapis.com/maps/api/js?key=AIzaSyC4R6AN7SmujjPUIGKdyao2Kqitzr1kiRg&v=3.exp&libraries=geometry,drawing,places"
                loadingElement={<div style={{ height: `100%` }} />}
                containerElement={<div style={{ height: `400px` }} />}
                mapElement={<div style={{ height: `100%` }} />}
            />
        </div>
      </div>
    );
  }
}
