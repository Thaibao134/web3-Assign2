import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import "leaflet/dist/leaflet.css";

// Display the google maps
const Map = ({ longitude, latitude }) => {
  return (
    <MapContainer
      key={`${latitude}-${longitude}`} 
      center={[latitude, longitude]}
      zoom={13}
      style={{ height: "500px", width: "100%" }}
    >
      <TileLayer
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
      />
      <Marker position={[latitude, longitude]}>
        <Popup>Gallery Location</Popup>
      </Marker>
    </MapContainer>
  );
};

export default Map;
