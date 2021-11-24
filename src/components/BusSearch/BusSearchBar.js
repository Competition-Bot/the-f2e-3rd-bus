import { Switch, Route, NavLink } from "react-router-dom";
import RouteSearch from "./RouteSearch";
import StopSearch from "./StopSearch";

function BusSearchBar() {
  return (
    <div className="h-full">
      <div className="lg:px-7 md:px-16 px-3 absolute w-full h-full">
        <div className="px-5">
          <h2 className="text-white mb-2">公車動態</h2>
          <div className="grid gap-6 grid-flow-col justify-start">
            <NavLink
              to="/bussearch/route"
              activeClassName="tab-line-active"
              className="tab-line hover:tab-line-hover"
            >
              找路線
            </NavLink>
            <NavLink
              to="/bussearch/stop"
              activeClassName="tab-line-active"
              className="tab-line hover:tab-line-hover"
            >
              找站牌
            </NavLink>
          </div>
        </div>
        <Switch>
          <Route exact path="/bussearch/route">
            <RouteSearch />
          </Route>
          <Route exact path="/bussearch/stop">
            <StopSearch />
          </Route>
        </Switch>
      </div>
      <div className="bg-blue-400 w-full h-48 -mt-1"></div>
    </div>
  );
}

export default BusSearchBar;
