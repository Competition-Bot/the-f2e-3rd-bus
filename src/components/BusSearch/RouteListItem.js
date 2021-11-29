/* eslint-disable jsx-a11y/anchor-is-valid */
import { faWheelchair } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { ReactComponent as BusIdBg } from "../../assets/img/bus_id_bg.svg";

function RouteListItem({ routeData }) {
  const statusStyleList = [
    "bg-gray-300 text-white",
    "bg-gray-300 text-black",
    "bg-yellow-300 text-white",
    "bg-yellow-400 text-white",
  ];

  return (
    <a
      href="/#"
      key={routeData.routeUID}
      className="relative flex justify-between px-5"
    >
      <div className="grid grid-flow-col auto-cols-max gap-x-5 items-center py-4">
        <div className={`${statusStyleList[routeData.status]} py-1 w-20 text-center`}>
          {routeData.estimateTime}
        </div>
        <div>
          <div>{routeData.stopName}</div>
          <div className="border-b border-gray-300 w-1/2 absolute bottom-0"></div>
        </div>
      </div>
      <div className="flex items-center">
        <div
          className={`mr-3 relative flex items-center justify-center px-4 ${
            routeData.status !== 3 ? "hidden" : ""
          }`}
        >
          <FontAwesomeIcon icon={faWheelchair} color="white" size="sm" className="z-10"/>
          <span className="text-white mx-1 z-10 text-sm">{routeData.plateNumb}</span>
          <BusIdBg className="absolute w-full" />
        </div>
        <div className="h-full w-max flex items-center justify-center">
          <div className="border-l-2 border-blue-300 h-full absolute z-0"></div>
          <div
            className={`rounded-full w-4 h-4 z-10 ${
              routeData.status === 3
                ? "bg-blue-400 shadow-busCircle"
                : "bg-blue-300"
            }`}
          ></div>
        </div>
      </div>
    </a>
  );
}

export default RouteListItem;
