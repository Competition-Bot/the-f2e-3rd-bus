import { MapContainer, TileLayer, Marker,Polyline } from "react-leaflet";
import location from '../../assets/img/location.svg';
import '../PlanSearch/map.css'
import { useSelector } from "react-redux";
import { useParams } from "react-router";
import { useEffect } from "react";
import { iconBlack, iconOrange, iconBlue } from '../BusSearch/MarkerIcon';




function PlanMap() {
  const { planresultid } = useParams();
  let _data = useSelector((state) => state.planReducer.planlist[0]);

  useEffect(() => {
    console.log(planresultid)
  })

  const _renderMapItem = () => {
    let list = [];
    _data.plan.forEach((item) => {
      list.push(
        <Marker
          position={item.pos}
          icon={iconBlue}
          key={`marker-${item.label}`}
        >
        </Marker>
      );
    })

    _data.step.forEach((item)=>{
      if(item.type === "bus"){
        list.push(
          <Marker
            position={item.start.pos}
            icon={iconBlack}
            key={`marker-start-${item.name}`}
          >
          </Marker>
        );
        list.push(
          <Marker
            position={item.end.pos}
            icon={iconBlack}
            key={`marker-end-${item.name}}`}
          >
          </Marker>
        );
        list.push(
          <Polyline
          key={`line-${item.name}`}
          pathOptions={{ color: "#333", weight: 5, smoothFactor: 5 }}
          positions={item.routePos}
        />
        );
      }
    })

    return list;
  }


  return <MapContainer
    style={{
      width: "100%",
      height: "100%",
      zIndex: "0"
    }}
    center={[25.003627598369928, 121.30582390333893]}
    zoom={15}
    scrollWheelZoom={false}
  >
    <TileLayer
      url="https://api.mapbox.com/styles/v1/cindy1029/ckwev8vay0d4g14p9dip5htx5/tiles/256/{z}/{x}/{y}@2x?access_token=pk.eyJ1IjoiY2luZHkxMDI5IiwiYSI6ImNrd2Vpd3EyNzA1NWQycXJ1OTh2ZWtpaXUifQ.odRRCORGIXPix4oKd1_R5g"
      attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
    />
    <div className="location"><img src={location} alt='location' /></div>
    {_renderMapItem()}
  </MapContainer>;
}

export default PlanMap;
