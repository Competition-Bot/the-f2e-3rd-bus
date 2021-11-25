import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import L from "leaflet";

import { useState } from "react";
import { useSelector } from "react-redux";
import "../BusSearch/RouteMap.css";
import { divIcon } from "leaflet";
import {iconBlack, iconYellow, iconOrange} from './MarkerIcon';

function RouteMap({ position }, { marker }) {
  let _city = useSelector((state) => state.busReducer.city);
  let _goStop = useSelector((state) => state.busReducer.goStopEstimatedTime);
  let _backStop = useSelector(
    (state) => state.busReducer.backStopEstimatedTime
  );

  const [pos, setPosition] = useState(
    (position = [25.0246292,121.5424487])
  );
  const [mark, setMarker] = useState(
    (marker = [25.0246292,121.5424487])
  );

  const customMarkerIconb = divIcon({
    className: "marker-black",
    iconSize: [50, 50],
  });
  const customMarkerIcono = divIcon({
    className: "marker-orange",
    iconSize: [50, 50],
  });
  const customMarkerIcony = divIcon({
    className: "marker-yellow",
    iconSize: [50, 50],
  });


  return (
    <MapContainer
      style={{
        width: "100%",
        height: "100%",
      }}
      center={pos}
      zoom={15}
      scrollWheelZoom={false}
    >
      <TileLayer
        url="https://api.mapbox.com/styles/v1/cindy1029/ckweni43705l015prqt6i3ecv/tiles/256/{z}/{x}/{y}@2x?access_token=pk.eyJ1IjoiY2luZHkxMDI5IiwiYSI6ImNrd2Vpd3EyNzA1NWQycXJ1OTh2ZWtpaXUifQ.odRRCORGIXPix4oKd1_R5g"
        attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
        />
      <Marker position={mark} icon={customMarkerIcono}>
        <Popup className="popup">
          <div className="busName">
            <p>福德二路</p>
          </div>
          <div className="busState">
            <p>進站中</p>
          </div>
        </Popup>
      </Marker>
    </MapContainer>
  );
}

export default RouteMap;
