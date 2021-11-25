import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import L from "leaflet";

import { useState } from "react";
import "../BusSearch/RouteMap.css";
import { divIcon } from "leaflet";

function RouteMap({ position }, { marker }) {
  const [pos, setPosition] = useState(
    (position = [25.024821886429546, 121.54454905058702])
  );
  const [mark, setMarker] = useState(
    (marker = [25.024821886429546, 121.54454905058702])
  );

  const customMarkerIcon0 = divIcon({ iconSize: [50, 50] });
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

  const greenIcon = new L.Icon({
    iconUrl:
      "https://cdn.rawgit.com/pointhi/leaflet-color-markers/master/img/marker-icon-2x-green.png",

    iconSize: [25, 41],
    iconAnchor: [12, 41],
    popupAnchor: [1, -34],
  });

  return (
    <MapContainer
      style={{
        width: "100%",
        height: "100%",
      }}
      center={pos}
      zoom={18}
      scrollWheelZoom={false}
    >
      <TileLayer
        attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
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
