import React, { Component } from 'react';
import {Map, InfoWindow, Marker, GoogleApiWrapper} from 'google-maps-react';
import { connect } from 'react-redux';

class ListingMap extends Component {
  constructor(props){
    super(props);
    this.state = {
      activeMarker: {},
      selectedPlace: {},
      showingInfoWindow: false
    };  
  }

  onMarkerClick = (props, marker) =>
    this.setState({
      activeMarker: marker,
      selectedPlace: props,
      showingInfoWindow: true
    });

  onInfoWindowClose = () =>
    this.setState({
      activeMarker: null,
      showingInfoWindow: false
    });

  onMapClicked = () => {
    if (this.state.showingInfoWindow)
      this.setState({
        activeMarker: null,
        showingInfoWindow: false
      });
  };

  render() {
    if (!this.props.loaded) return(
      <div className="listing-map-block">
        <div className="map-loading-text">
          <h3>Map Loading...</h3>
        </div>
      </div>
    );
    return (
      <div className="listing-map-block">
        <Map
          className="map"
          google={this.props.google}
          onClick={this.onMapClicked}
          style={{ height: '100%', position: 'relative', width: '100%' }}
          zoom={13}>

          {
            this.props.listing.filterListing.map(( item, index ) => {
              return(
                <Marker
                  onClick={this.onMarkerClick}

                  key = { index }

                  icon = { item.typeIcon }
                  thumb = { item.thumb }
                  ratting = { item.ratting }
                  title = { item.title }
                  location = { item.location }
                  phone = { item.phone }
                  position = { { lat: item.position.lat, lng: item.position.lng } }
                />
              )
            })
          }

          <InfoWindow
            marker={this.state.activeMarker}
            onClose={this.onInfoWindowClose}
            visible={this.state.showingInfoWindow}>
            <div className="map-listing lg-listing-single">
              <div className="map-tumb-block">
                <img src={`${this.state.selectedPlace.thumb}`} alt="img" className="img-responsive" />
                <div className="map-ratting">
                  <span>{this.state.selectedPlace.ratting}</span>/10	
                </div>
              </div>
              <div className="map-info-block">
                <h3>{this.state.selectedPlace.title}</h3>
                <div className="meta-footer">
                  <span className="location"><i className="la la-map-marker"></i> { this.state.selectedPlace.location }</span>
                  <span className="phone-number"><i className="la la-phone"></i> { this.state.selectedPlace.phone }</span>		
                </div>
              </div>
            </div>
          </InfoWindow>
        </Map>
      </div>
    );
  }
}

function mapStateToProps(state){
  return{
    listing: state.listing
  }
}

export default connect(mapStateToProps)(GoogleApiWrapper({
  apiKey: ('AIzaSyC87gjXWLqrHuLKR0CTV5jNLdP4pEHMhmg')
})(ListingMap))
