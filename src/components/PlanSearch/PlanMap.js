import { MapContainer, TileLayer, Polyline } from "react-leaflet";
import location from '../../assets/img/location.svg';
import '../PlanSearch/map.css'

function PlanMap() {
  return <MapContainer
    style={{
      width: "100%",
      height: "100%",
      zIndex: "0"
    }}
    center={[25.0242987, 121.5441439]}
    zoom={15}
    scrollWheelZoom={false}
  >
    <TileLayer
      style={{display: "flex"}}
      url="https://api.mapbox.com/styles/v1/cindy1029/ckwev8vay0d4g14p9dip5htx5/tiles/256/{z}/{x}/{y}@2x?access_token=pk.eyJ1IjoiY2luZHkxMDI5IiwiYSI6ImNrd2Vpd3EyNzA1NWQycXJ1OTh2ZWtpaXUifQ.odRRCORGIXPix4oKd1_R5g"
      attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
    />
    <div className="location"><img src={location} alt='location' /></div>
  </MapContainer>;
}

export default PlanMap;
