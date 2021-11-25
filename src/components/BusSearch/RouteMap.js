import { MapContainer, TileLayer, Marker, Popup, useMap } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import L from "leaflet";
import busCard from "../../components/BusSearch/Tooltip"

import { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import "../BusSearch/RouteMap.css";
import { divIcon } from "leaflet";
import { iconBlack, iconYellow, iconOrange } from './MarkerIcon';
import { list } from "purgecss/node_modules/postcss";

function RouteMap({ position }, { marker }) {
  let _city = useSelector((state) => state.busReducer.city); //城市
  let _goStop = useSelector((state) => state.busReducer.goStopEstimatedTime); //第一個
  let _backStop = useSelector( //第二個
    (state) => state.busReducer.backStopEstimatedTime
  );
  useEffect(() => {
    console.log(_goStop)
    console.log(_backStop)
  }, [_goStop])

  useEffect(()=>{
    setPosition(mapCenterPos)
  }),[mapCenterPos]
 

  const [pos, setPosition] = useState(
    (mapCenterPos)
  );
  const [mark, setMarker] = useState(
    (marker = [25.0242987, 121.5441439])
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

  const _renderMarker = () => {
    let lsit =[];

    const state;
    if (state == '進站中') {
      icon = iconOrange
    }
    else if (state == '3分鐘') {
      icon = iconYellow
    }
    else {
      icon = icon
    }

    list.push(
      <Marker
        position={position}
        icon={icon}
        key={`marker-${item.StationUID}`}
      >
        <Popup className="popup flex" position={position} closeButton={true} busName={busname} busState={busstate} >
        <h2 className="text-white text-base font-semibold w-20">busname</h2>
        <h2 className="flex bg-white text-yellow-400 text-base font-semibold w-15 h-7 justify-center items-center rounded-md mt-1">busstate</h2>
        </Popup>
      </Marker>
    );
    return list;
  }

  function ChangeMap({center}){
    let map = useMap();
    if(center !== undefined){
      map.panTo(center);
      setPosition(undefined)
    }
    return null;
  }

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
      <ChangeMap center={pos}>
      <TileLayer
        url="https://api.mapbox.com/styles/v1/cindy1029/ckwev8vay0d4g14p9dip5htx5/tiles/256/{z}/{x}/{y}@2x?access_token=pk.eyJ1IjoiY2luZHkxMDI5IiwiYSI6ImNrd2Vpd3EyNzA1NWQycXJ1OTh2ZWtpaXUifQ.odRRCORGIXPix4oKd1_R5g"
        attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
      />
      {/* {_goStop.map((item)=>(
        
      ))} */}
      {/* <Marker position={mark} icon={customMarkerIcono}>
        <Popup className="popup flex">
          <h2 className="text-white text-base font-semibold w-20">福德二路</h2>
          <h2 className="flex bg-white text-yellow-400 text-base font-semibold w-15 h-7 justify-center items-center rounded-md mt-1">進站中</h2>
        </Popup>
      </Marker> */}
      <MarkerClusterGroup>{_renderMarkers()}</MarkerClusterGroup>
    </MapContainer>
  );
}

export default RouteMap;
