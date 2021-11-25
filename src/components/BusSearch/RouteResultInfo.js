import { NavLink } from "react-router-dom";
import RouteListItem from "./RouteListItem";

function RouteResultInfo() {
  return (
    <div className="h-full">
      <div className="lg:px-7 md:px-16 px-3 absolute w-full h-full">
        <div className="px-5">
          <h2 className="text-white mb-2">284</h2>
          <div className="grid gap-6 grid-flow-col justify-start relative">
            <a className="tab-line tab-line-active">往汐止社后</a>
            <a className="tab-line hover:tab-line-hover">往景美</a>
            <div className="tab-line text-white absolute right-0">汐止社后 - 景美</div>
          </div>
        </div>
        <div className="mt-4 pb-28 bg-white h-full shadow-card grid auto-rows-max overflow-scroll">
          <RouteListItem />
          <RouteListItem />
          <RouteListItem />
          <RouteListItem />
          <RouteListItem />
          <RouteListItem />
          <RouteListItem />
          <RouteListItem />
          <RouteListItem />
          <RouteListItem />
        </div>
      </div>
      <div className="bg-blue-400 w-full h-48 -mt-1"></div>
    </div>
  );
}

export default RouteResultInfo;
