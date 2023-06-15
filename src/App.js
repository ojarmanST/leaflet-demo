import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet'
import './styles.css';
import "leaflet/dist/leaflet.css";
import { Icon, divIcon, point } from 'leaflet';
import MarkerClusterGroup from 'react-leaflet-cluster';
import MapComponent from './MapComponent';

function App() {
 

  

  return (
    <MapComponent />
  );
}

export default App;
