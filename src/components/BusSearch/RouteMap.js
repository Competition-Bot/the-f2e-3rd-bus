import { MapContainer, TileLayer, Marker, Popup, useMap } from "react-leaflet";
import MarkerClusterGroup from "react-leaflet-markercluster";
import "leaflet/dist/leaflet.css";
import L from "leaflet";
import busCard from "../../components/BusSearch/Tooltip"

import { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import "../BusSearch/RouteMap.css";
import { divIcon } from "leaflet";
import { iconBlack, iconYellow, iconOrange } from './MarkerIcon';
import { list } from "purgecss/node_modules/postcss";

const _renderMarker = ({data}) => {

  let icon = iconBlack
  if (data.estimatedTime == '進站中') {
    icon = iconOrange
  }
  else if (data.estimatedTime == '3分鐘') {
    icon = iconYellow
  }
  else {
    icon = iconBlack
  }

  return (
    <Marker
      position={data.stopPosition}
      icon={icon}
      key={`marker-${data.stationUID}`}
    >
      <Popup className="popup flex" position={data.stopPosition} closeButton={true} >
        <h2 className="flex text-white text-base font-semibold w-auto justify-center items-center">{data.stopName}</h2>
        <h2 className="flex bg-white text-yellow-400 text-base font-semibold w-15 h-7 justify-center items-center rounded-md mt-1">{data.estimateTime}</h2>
       
      </Popup>
    </Marker>
  )
}

function RouteMap({ position }, { marker }) {
  let _city = useSelector((state) => state.busReducer.city); //城市
  let _goStop = useSelector((state) => state.busReducer.goStopEstimatedTime); //第一個
  let _backStop = useSelector( //第二個
    (state) => state.busReducer.backStopEstimatedTime
  );


  // useEffect(() => {
    
  // }, [_city])
  
  // useEffect(()=>{
  //   setPosition(mapCenterPos)
  // }),[mapCenterPos]


  // const [pos, setPosition] = useState(
  //   (mapCenterPos)
  // );
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



  function ChangeMap({ center }) {
    let map = useMap();
    if (center !== undefined) {
      map.panTo(center);
      //setPosition(undefined)
    }
    return null;
  }

  return (
    <MapContainer
      style={{
        width: "100%",
        height: "100%",
      }}
      center={[25.0242987, 121.5441439]}
      zoom={15}
      scrollWheelZoom={false}
    >
      <ChangeMap center={[25.0242987, 121.5441439]} />
      <TileLayer
        url="https://api.mapbox.com/styles/v1/cindy1029/ckwev8vay0d4g14p9dip5htx5/tiles/256/{z}/{x}/{y}@2x?access_token=pk.eyJ1IjoiY2luZHkxMDI5IiwiYSI6ImNrd2Vpd3EyNzA1NWQycXJ1OTh2ZWtpaXUifQ.odRRCORGIXPix4oKd1_R5g"
        attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
      />

   
       {/* <MarkerClusterGroup> */}
       {_goStop ?
         _goStop.map((item) => (
           <_renderMarker data={item} />
         ))
         : null
       }
     {/* </MarkerClusterGroup> */}

    </MapContainer>
  );
}

export default RouteMap;

