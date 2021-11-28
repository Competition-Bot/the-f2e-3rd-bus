import {
  MapContainer,
  TileLayer,
  Marker,
  Polyline,
  Popup,
  useMap,
} from "react-leaflet";
import "../PlanSearch/map.css";
import { useSelector } from "react-redux";
import { useLocation } from "react-router";
import { useEffect, useState } from "react";
import { createNotFilledIcon,createFilledIcon } from "../BusSearch/MarkerIcon";

function PlanMap() {
  const location = useLocation();
  let dataList = useSelector((state) => state.planReducer.planlist);
  const [clickIdx, setclickIdx] = useState(undefined);
  const [stepNum, setstepNum] = useState(undefined);
  const [data, setdata] = useState(null);
  let bounds = [];

  useEffect(() => {
    if (location.pathname.includes("/plansearch/detail/")) {
      const id = location.pathname.replace("/plansearch/detail/", "");
      setdata(dataList[id]);
      setstepNum(dataList[id].step.length);
    } else {
      setdata(null);
    }
  }, [location]);

  const _renderDestination = () => {
    let list = [];
    let { plan } = data;

    list.push(
      <Marker
        position={plan[0].pos}
        icon={
          clickIdx !== 0
            ? createNotFilledIcon("blue")
            : createNotFilledIcon("yellow")
        }
        key={`marker-${plan[0].label}`}
        eventHandlers={{
          click: () => {
            setclickIdx(0);
          },
        }}
      >
        <Popup
          className="bg-yellow-400 rounded-xl p-0 m-0"
          position={plan[0].pos}
          autoClose={true}
          closeButton={false}
        >
          <div className="text-white text-base font-medium font-ch text-center leading-6">
            {plan[0].label}
            <br />
            {data.step[0].type === "bus" ? `搭乘${data.step[0].name}` : ""}
          </div>
        </Popup>
      </Marker>
    );

    list.push(
      <Marker
        position={plan[1].pos}
        icon={
          clickIdx === stepNum - 1 || clickIdx === stepNum
            ? createNotFilledIcon("yellow")
            : createNotFilledIcon("blue")
        }
        key={`marker-${plan[1].label}`}
        eventHandlers={{
          click: () => {
            setclickIdx(stepNum);
          },
        }}
      >
        <Popup
          className="bg-yellow-400 rounded-xl p-0 m-0"
          position={plan[1].pos}
          autoClose={true}
          closeButton={false}
        >
          <div className="text-white text-base font-medium font-ch text-center leading-6">
            抵達{plan[1].label}
          </div>
        </Popup>
      </Marker>
    );

    bounds.push(plan[0].pos);
    bounds.push(plan[1].pos);

    return list;
  };

  const _renderStep = () => {
    let list = [];

    data.step.forEach((item, idx) => {
      if (item.type === "bus") {
        list.push(
          <Marker
            position={item.start.pos}
            icon={
              clickIdx === idx || clickIdx === idx - 1
                ? createFilledIcon("yellow")
                : createFilledIcon("gray")
            }
            key={`marker-start-${item.name}`}
            eventHandlers={{
              click: () => {
                setclickIdx(idx);
              },
            }}
          >
            <Popup
              className="bg-yellow-400 rounded-xl p-0 m-0"
              position={item.start.pos}
              autoClose={true}
              closeButton={false}
            >
              <div className="text-white text-base font-medium font-ch">
                {item.start.label}
                <br />
                搭乘{item.name}
              </div>
            </Popup>
          </Marker>
        );
        list.push(
          <Marker
            position={item.end.pos}
            icon={
              clickIdx === idx || clickIdx === idx + 1
                ? createFilledIcon("yellow")
                : createFilledIcon("gray")
            }
            key={`marker-end-${item.name}}`}
            eventHandlers={{
              click: () => {
                setclickIdx(idx + 1);
              },
            }}
          >
            <Popup
              className="bg-yellow-400 rounded-xl p-0 m-0"
              position={item.pos}
              autoClose={true}
              closeButton={false}
            >
              <div className="text-white text-base font-medium font-ch text-center leading-6">
                {item.end.label}
                <br />
                {data.step[idx + 1].type === "bus"
                  ? `搭乘${data.step[idx + 1].name}`
                  : `步行到${data.step[idx + 1].end.label}`}
              </div>
            </Popup>
          </Marker>
        );
        list.push(
          <Polyline
            key={`line-${idx}`}
            pathOptions={{
              color: `${clickIdx === idx ? "#F9B835" : "#3F3F3F"}`,
              weight: 4,
              smoothFactor: 4,
            }}
            positions={item.routePos}
            eventHandlers={{
              click: () => {
                console.log(idx);
              },
            }}
          />
        );

        bounds.push(item.start.pos);
        bounds.push(item.end.pos);
      } else {
        list.push(
          <Polyline
            key={`line-${idx}`}
            pathOptions={{
              color: `${clickIdx !== idx ? "#333" : "#F9B835"}`,
              weight: 4,
              smoothFactor: 4,
              dashArray: "8, 8",
              dashOffset: "0",
            }}
            positions={item.routePos}
            eventHandlers={{
              click: () => {
                console.log(idx);
              },
            }}
          />
        );
      }
    });

    return list;
  };

  const ChangeMap = () => {
    let map = useMap();
    // map.panTo(center);
    if (bounds.length > 0) {
      map.fitBounds(bounds);
    }

    return null;
  };

  return (
    <MapContainer
      style={{
        width: "100%",
        height: "100%",
        zIndex: "0",
      }}
      center={[23.88963868615144, 120.97367517634088]}
      zoom={8}
      scrollWheelZoom={true}
    >
      <TileLayer
        url="https://api.mapbox.com/styles/v1/cindy1029/ckwev8vay0d4g14p9dip5htx5/tiles/256/{z}/{x}/{y}@2x?access_token=pk.eyJ1IjoiY2luZHkxMDI5IiwiYSI6ImNrd2Vpd3EyNzA1NWQycXJ1OTh2ZWtpaXUifQ.odRRCORGIXPix4oKd1_R5g"
        attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
      />
      <ChangeMap />
      <div className="location">
        <img src={location} alt="location" />
      </div>
      {data !== null ? _renderDestination() : null}
      {data !== null ? _renderStep() : null}
    </MapContainer>
  );
}

export default PlanMap;
