import React from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet'
import './styles.css';
import "leaflet/dist/leaflet.css";
import { Icon, divIcon, point } from 'leaflet';
import MarkerClusterGroup from 'react-leaflet-cluster';
import MyComponent from './MyComponent.js'

const MapComponent = () => {
    //markers
  const markers = [
    {
      geocode: [26.45841381471472, -80.05961361373414],
      popUp: "Sandoway"
    },
    {
      geocode: [26.468504945427405, -80.06841005378328],
      popUp: "Puttn Around"
    },
    {
      geocode: [26.462346588295315, -80.07524551882265],
      popUp: "Tennis Center"
    },
    {
      geocode: [26.461558478742546, -80.05840630354658],
      popUp: "Delray Beach"
    },
    {
      geocode: [26.462562332443724, -80.06432411069947],
      popUp: "Veterans Park",

    },
  ]

  const customIcon = new Icon({
    iconUrl: require('./images/placeholder.png'),
    shadowUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/0.7.7/images/marker-shadow.png',
    iconSize: [30, 31],
    iconAnchor: [12, 31],
    popupAnchor: [1, -34],
    shadowSize: [41, 41],
  })

  const createCustomClusterIcon = (cluster) => {
    return new divIcon({
      html: `<div class="cluster-icon">${cluster.getChildCount()}</div>`,
      iconSize: point(33, 33, true),
      className: 'custom-marker-cluster'

    })
  }

    return (
       
    <MapContainer center={[26.459378165414662, -80.07004709072862]} zoom={13} scrollWheelZoom={false} bounds={[26.459378165414662, -80.07004709072862]}>
      {/* <TileLayer
      attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
      url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      /> */}
      <TileLayer attribution='Stamen Watercolor' url='https://stamen-tiles-{s}.a.ssl.fastly.net/watercolor/{z}/{x}/{y}.jpg'/>
      <MarkerClusterGroup
        chunkedLoading
        iconCreateFunction={createCustomClusterIcon}
      >
      {markers.map(marker => 
      <Marker position={marker.geocode} icon={customIcon}>
        <Popup>
          {marker.popUp}
        </Popup>
      </Marker>
      )}
      </MarkerClusterGroup>
      <MyComponent />
  </MapContainer>
       
    );
};

export default MapComponent;