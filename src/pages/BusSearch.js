import { Switch, Route, Redirect } from "react-router";
import BusSearchBar from "../components/BusSearch/BusSearchBar";
import RouteResultInfo from "../components/BusSearch/RouteResultInfo";
import RouteResultFare from "../components/BusSearch/RouteResultFare";
import StopResultInfo from "../components/BusSearch/StopResultInfo";
import RouteMap from "../components/BusSearch/RouteMap";
import StopMap from "../components/BusSearch/StopMap";
import line_arrow from "../assets/icon/line-arrow-white.png";

function BusSearch() {
  return (
    <div className="flex">
      <div className="relative w-2/6 max-width-465 content-full bg-blue-200 overflow-hidden">
        <div className="grid grid-flow-col gap-3 items-center justify-start bg-blue-400 px-10 pt-5 pb-3">
          <div className="rounded-full w-4 h-4 bg-yellow-400"></div>
          <div className="text-white">搜尋</div>
          <img src={line_arrow} alt="" />
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
      <div className="w-4/6 content-full">
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
