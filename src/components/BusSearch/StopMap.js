import { MapContainer, TileLayer, Marker, Popup, useMap, Polyline } from "react-leaflet";
import MarkerClusterGroup from "react-leaflet-markercluster";
import "leaflet/dist/leaflet.css";

import { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import "../BusSearch/RouteMap.css";
import { iconBlack, iconYellow, icon_location, iconBlack_shadow } from './MarkerIcon';
import location_icon from '../../assets/img/btn_location.svg';
import useGeoLocation from '../BusSearch/useGeoLcation.js'

const _renderMarker = () => {

    let icon = iconYellow
    // const mapRef = useRef();

   
    return (
        <Marker
            // position={data.stopPosition}
            icon={icon}
        // key={`marker-${data.stationUID}`}
        >
            <Popup className="busup flex" position={[25.0242987, 121.5441439]} closeButton={true}>
                <div className="">
                    <h2 className="flex text-white text-base font-semibold w-auto justify-center items-center">站牌名字</h2>
                    <h2 className="flex bg-white text-yellow-400 text-base font-semibold w-15 h-7 justify-center items-center rounded-md mt-1">X個站牌</h2>
                </div>
            </Popup>

        </Marker>
    )
}


function StopMap() {

 
    // function LocationMarker() {
    //     const [position, setPosition] = useState(null);

    //     const map = useMap();
    //     useEffect(() => {
    //         map.locate().on("locationfound", function (e) {
    //             setPosition(e.latlng);
    //             map.flyTo(e.latlng, map.getZoom());
    //         });
    //     }, [map]);

    //     return position === null ? null : (
    //         <Marker position={position} icon={icon_location}></Marker>
    //     );
    // }

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

            <TileLayer
                url="https://api.mapbox.com/styles/v1/cindy1029/ckwev8vay0d4g14p9dip5htx5/tiles/256/{z}/{x}/{y}@2x?access_token=pk.eyJ1IjoiY2luZHkxMDI5IiwiYSI6ImNrd2Vpd3EyNzA1NWQycXJ1OTh2ZWtpaXUifQ.odRRCORGIXPix4oKd1_R5g"
                attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
            />


            {/* {_goStop ?
                _goStop.map((item) => (
                    <_renderMarker data={item} />
                ))
                : null
            } */}

            {/* <LocationMarker /> */}
            <div className="location" ><img src={location_icon} alt='location' /></div>
        </MapContainer>

    )
}

export default StopMap;