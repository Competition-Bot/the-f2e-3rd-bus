import { Switch, Route, Redirect } from "react-router";
import BusSearchBar from "../components/BusSearch/BusSearchBar";
import RouteResultInfo from "../components/BusSearch/RouteResultInfo";
import RouteResultFare from "../components/BusSearch/RouteResultFare";
import StopResultInfo from "../components/BusSearch/StopResultInfo";
import RouteMap from "../components/BusSearch/RouteMap";
import StopMap from "../components/BusSearch/StopMap";
import BreadCrumbSearch from "../components/BreadCrumbSearch";

import { useState } from "react";

function BusSearch() {
  const [showMap, setshowMap] = useState(false);

  const _handleClickDropDown = (value = showMap) => {
    setshowMap(!value);
  };

  return (
    <div className="bussearch content-full">
      <BreadCrumbSearch />
      <div
        className={`z-10 relative w-full h-full bg-blue-200 lg:order-none order-2 overflow-hidden lg:row-auto ${
          !showMap ? "row-span-2" : ""
        }`}
      >
        <div className="bg-blue-400 pt-2 md:pb-4 pb-3 lg:hidden">
          <div
            className="line-dropdown"
            onClick={() => _handleClickDropDown()}
          ></div>
        </div>
        <Switch>
          <Redirect exact from="/bussearch" to="/bussearch/route" />
          <Route exact path="/bussearch/:type">
            <BusSearchBar />
          </Route>
          <Route exact path="/bussearch/route/:routename">
            <RouteResultInfo />
          </Route>
          <Route path="/bussearch/route/:routename/detail">
            <RouteResultFare />
          </Route>
          <Route path="/bussearch/stop/:stopid">
            <StopResultInfo />
          </Route>
        </Switch>
      </div>
      <div
        className={`z-0 w-full h-full row-span-2 border border-red-400 lg:block ${
          !showMap ? "hidden" : ""
        }`}
      >
        <Switch>
          <Route path="/bussearch/route">
            <RouteMap />
          </Route>
          <Route path="/bussearch/stop">
            <StopMap />
          </Route>
        </Switch>
      </div>
    </div>
  );
}

export default BusSearch;
