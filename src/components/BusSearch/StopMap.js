import {
  MapContainer,
  TileLayer,
  Marker,
  Popup,
  useMap,
} from "react-leaflet";
import "leaflet/dist/leaflet.css";
import { useSelector } from "react-redux";
import "../BusSearch/StopMap.css";
import location_icon from "../../assets/img/btn_location.svg";
import map_marker from "../../assets/img/map-marker-alt.svg";
import { icon_location, createFilledIcon } from "./MarkerIcon";
import useGeoLocation from "../BusSearch/useGeoLcation.js";

let buslist = [];

const _renderMarker = ({ data }) => {
  if (data.stationPosition) {
    buslist.push(data.stopPosition);
    let icon = createFilledIcon("yellow", data.index+1);
    var popColor = "bg-yellow-400";

    // const mapRef = useRef();
    return (
      <Marker
        position={data.stationPosition}
        icon={icon}
        key={`marker-${data.stationUID}`}
      >
        <Popup
          className={`${popColor} rounded-xl busup flex`}
          position={data.stationPosition}
          closeButton={true}
        >
          <div className="">
            <h2 className="flex text-white text-base font-semibold w-auto justify-center items-center">
              {data.stationName}
            </h2>
            <h2 className="flex text-white text-base font-semibold w-15 h-7 justify-center items-center rounded-md mt-1">
              站牌{data.index + 1}
            </h2>
          </div>
        </Popup>
      </Marker>
    );
  }
};

function StopMap() {
  const location = useGeoLocation();
  const FlyToButton = () => {
    const map = useMap();
    const fly = () => {
      map.flyTo(
        [location.coordinates.lat, location.coordinates.lng],
        map.getZoom()
      );
      console.log(location.coordinates.lat, location.coordinates.lng);
    };
    return (
      <button className="location" onClick={fly}>
        <img src={location_icon} alt="location" />
      </button>
    );
  };

  let stationData = useSelector((state) => {
    console.log(state.busReducer.stationData);
    return state.busReducer.stationData;
  });
  return (
    <MapContainer
      style={{
        width: "100%",
        height: "100%",
        zIndex: "0",
      }}
      center={[25.0242987, 121.5441439]}
      zoom={15}
      scrollWheelZoom={true}
    >
      <TileLayer
        url="https://api.mapbox.com/styles/v1/cindy1029/ckwev8vay0d4g14p9dip5htx5/tiles/256/{z}/{x}/{y}@2x?access_token=pk.eyJ1IjoiY2luZHkxMDI5IiwiYSI6ImNrd2Vpd3EyNzA1NWQycXJ1OTh2ZWtpaXUifQ.odRRCORGIXPix4oKd1_R5g"
        attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
      />

      {stationData
        ? stationData.map((item, index) => (
            <_renderMarker key={`renderMaker_${index}`} data={item} />
          ))
        : null}

      <FlyToButton />
      <div className="tip bg-blue-400 flex w-auto h-9 p-5 rounded-3xl flex-row justify-center items-center">
        <div className="tracking-wider flex justify-center items-center text-white text-base font-semibold">
          點擊 <img className="mb-1 mr-1 ml-1" src={map_marker} alt="marker" />
          查看站牌
        </div>
      </div>
      {location.loaded && !location.error && (
        <Marker
          icon={icon_location}
          position={[location.coordinates.lat, location.coordinates.lng]}
        ></Marker>
      )}
    </MapContainer>
  );
}

export default StopMap;
