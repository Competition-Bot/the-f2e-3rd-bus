import { MapContainer, TileLayer, Marker, Popup, useMap, Polyline } from "react-leaflet";
import MarkerClusterGroup from "react-leaflet-markercluster";
import "leaflet/dist/leaflet.css";
import { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import "../BusSearch/RouteMap.css";
import { iconBlack, iconYellow, iconOrange, icon_location, iconBlack_shadow, iconBus } from './MarkerIcon';
import location_icon from '../../assets/img/btn_location.svg';
import '../PlanSearch/map.css'

function RouteMap() {
  let _direction = useSelector((state) => {
    return state.busReducer.direction
  });
  let _goBusRealTime = useSelector((state) => {
    return state.busReducer.goBusRealTime
  });

  let _backBusRealTime = useSelector((state) => state.busReducer.backBusRealTime)
  let _goStop = useSelector((state) => {
    return state.busReducer.goStopEstimatedTime
  });
  let _backStop = useSelector(
    (state) => state.busReducer.backStopEstimatedTime
  );

  let buslist = []

  var mapCenterPos = [25.0242987, 121.5441439]
  const polylineOptions = { color: '#828282', opacity: '0.5', weight: '5' }

  const _renderMarker = ({ data }) => {
    buslist.push(data.stopPosition)
    let icon = iconBlack_shadow
    let popColor = 'bg-yellow-400';
    let textColor = 'text-yellow-400';

    if (data.estimateTime === '進站中') {
      icon = iconOrange
      popColor = 'bg-yellow-400';
      textColor = 'text-yellow-400';
    }
    else if (data.estimateTime === '3分鐘') {
      icon = iconYellow
      popColor = 'bg-yellow-300';
      textColor = 'text-yellow-300';
    }
    else {
      icon = iconBlack_shadow
      popColor = 'bg-black';
      textColor = 'text-black';
    }
    if (data.stopPosition) {
      return (
        <Marker
          position={data.stopPosition}
          icon={icon}
          key={`marker-${data.stationUID}`}
        >
          <Popup className={`${popColor} rounded-xl`} position={data.stopPosition} closeButton={true}>
              <h2 className="flex text-white text-base font-semibold w-auto justify-center items-center">{data.stopName}</h2>
              <h2 className={`${textColor} flex bg-white text-base font-semibold w-15 h-7 justify-center items-center rounded-md mt-1`}>{data.estimateTime}</h2>
          </Popup>
          <Polyline pathOptions={polylineOptions} positions={buslist}></Polyline>
        </Marker>
      )
    }
    else return null
  }

  const _renderBus = ({ data }) => {
    if (data.BusPosition) {
      return (
        <Marker
          position={data.BusPosition}
          icon={iconBus}
        >
          <Popup className="bg-white rounded-xl mb-5" position={data.BusPosition} closeButton={true}>
              <h2 className="flex text-blue-400 text-base font-semibold w-auto justify-center items-center">{data.PlateNumb}</h2>
          </Popup>
        </Marker>
      )
    }
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
      scrollWheelZoom={true}
    >
      <TileLayer
        url="https://api.mapbox.com/styles/v1/cindy1029/ckwev8vay0d4g14p9dip5htx5/tiles/256/{z}/{x}/{y}@2x?access_token=pk.eyJ1IjoiY2luZHkxMDI5IiwiYSI6ImNrd2Vpd3EyNzA1NWQycXJ1OTh2ZWtpaXUifQ.odRRCORGIXPix4oKd1_R5g"
        attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
      />


      {/* <MarkerClusterGroup> */}
      {
        _direction ?
          <>
            {_goStop ?
              _goStop.map((item, index) => (
                <_renderMarker key={`renderMaker_go_${index}`} data={item} />
              ))
              : null
            }
            {
              _goBusRealTime ?
                _goBusRealTime.map((item, index) => (
                  <_renderBus key={`renderMarker_go_${index}`} data={item} />
                ))
                : null
            }
          </>
          :
          <>
            {_backStop ?
              _backStop.map((item, index) => (
                <_renderMarker key={`renderMaker_back_${index}`} data={item} />
              ))
              : null
            }
            {_backBusRealTime ?
              _backBusRealTime.map((item, index) => (
                <_renderBus key={`renderMarker_back_${index}`} data={item} />
              ))
              : null
            }
            
          </>

      }

      {/* </MarkerClusterGroup> */}
<div className="location" ><img src={location_icon} alt='location' /></div>
    </MapContainer >

  );

}


export default RouteMap;

