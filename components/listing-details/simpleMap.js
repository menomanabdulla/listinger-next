import React from 'react';
import {Map,  Marker, GoogleApiWrapper} from 'google-maps-react';



class SimpleMap extends React.Component {
    constructor(props) {
      super(props);
    }
    render() {
      if (!this.props.loaded) return <div>Loading...</div>;
      return (
        <Map
            google={this.props.google}
            className="map"
            zoom={12}>
            <Marker
              name = { this.props.name }
              icon = { this.props.icon }
              position = { this.props.position }
            />
        </Map>
      )
    }
}
  
  export default (GoogleApiWrapper({
    apiKey: ('AIzaSyC87gjXWLqrHuLKR0CTV5jNLdP4pEHMhmg')
  })(SimpleMap));
  
