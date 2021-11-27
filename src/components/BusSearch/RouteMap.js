import { MapContainer, TileLayer, Marker, Popup, useMap, Polyline } from "react-leaflet";
import MarkerClusterGroup from "react-leaflet-markercluster";
import "leaflet/dist/leaflet.css";
import { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import "../BusSearch/RouteMap.css";
import { iconBlack, iconYellow, iconOrange, icon_location, iconBlack_shadow } from './MarkerIcon';
import brn_location from '../../assets/img/btn_location.svg';

function RouteMap() {
  let _direction = useSelector((state) => {
    console.log(state.busReducer.direction)
    return state.busReducer.direction
  });
  let _goBusRealTime = useSelector((state) => state.busReducer.goBusRealTime);
  let _backBusRealTime = useSelector((state) => state.busReducer.backBusRealTime)
  let _goStop = useSelector((state) => {
    return state.busReducer.goStopEstimatedTime
  });
  let _backStop = useSelector(
    (state) => state.busReducer.backStopEstimatedTime
  );
  useEffect(() => {
    console.log(_goStop)
  }, [_direction])

  // useEffect(() => {
  //   console.log(_goBusRealTime)
  //   console.log(_backBusRealTime)
  // }, [_goBusRealTime])
  let buslist = []

  var mapCenterPos = [25.0242987, 121.5441439]
  const polylineOptions = { color: '#828282', opacity: '0.5', weight: '5' }

  const _renderMarker = ({ data }) => {
    buslist.push(data.stopPosition)
    let icon = iconBlack_shadow

    if (data.estimateTime === '進站中') {
      icon = iconOrange
    }
    else if (data.estimateTime === '3分鐘') {
      icon = iconYellow
    }
    else {
      icon = iconBlack_shadow
    }



    return (
      <Marker
        position={data.stopPosition}
        icon={icon}
        key={`marker-${data.stationUID}`}
      >
        <Popup className="popup flex" position={data.stopPosition} closeButton={true}>
          <div className="">
            <h2 className="flex text-white text-base font-semibold w-auto justify-center items-center">{data.stopName}</h2>
            <h2 className="flex bg-white text-yellow-400 text-base font-semibold w-15 h-7 justify-center items-center rounded-md mt-1">{data.estimateTime}</h2>
          </div>
        </Popup>
        <Polyline pathOptions={polylineOptions} positions={buslist}></Polyline>
      </Marker>
    )
  }
  // useEffect(() => {

  // }, [_city])
  const [centerPos, setPosition] = useState(mapCenterPos);


  function ChangeMap({ center }) {
    let map = useMap();
    if (center !== undefined) {
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
        zIndex: "0"
      }}
      center={[25.0242987, 121.5441439]}
      zoom={15}
      scrollWheelZoom={false}
    >
      <ChangeMap center={centerPos} />
      <TileLayer
        url="https://api.mapbox.com/styles/v1/cindy1029/ckwev8vay0d4g14p9dip5htx5/tiles/256/{z}/{x}/{y}@2x?access_token=pk.eyJ1IjoiY2luZHkxMDI5IiwiYSI6ImNrd2Vpd3EyNzA1NWQycXJ1OTh2ZWtpaXUifQ.odRRCORGIXPix4oKd1_R5g"
        attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
      />


      {/* <MarkerClusterGroup> */}
      {
        _direction ?
          <>
            {_goStop ?
              _goStop.map((item,index) => (
                <_renderMarker key={`renderMaker_go_${index}`} data={item} />
              ))
              : null
            }
          </>

          :
          <>
            {_backStop ?
              _backStop.map((item,index) => (
                <_renderMarker key={`renderMaker_back_${index}`} data={item} />
              ))
              : null
            }
          </>

      }

      {/* </MarkerClusterGroup> */}

      <div className="location" ><img src={brn_location} alt='location' /></div>
    </MapContainer>
  );

}

export default RouteMap;

