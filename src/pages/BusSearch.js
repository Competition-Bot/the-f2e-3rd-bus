import { Switch, Route,Redirect } from "react-router";
import BusSearchBar from "../components/BusSearch/BusSearchBar";
import RouteResultInfo from "../components/BusSearch/RouteResultInfo";
import RouteResultFare from "../components/BusSearch/RouteResultFare";
import StopResultInfo from "../components/BusSearch/StopResultInfo";
import RouteMap from "../components/BusSearch/RouteMap";
import StopMap from "../components/BusSearch/StopMap";

function BusSearch() {
  return (
    <div>
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
      <Switch>
        <Route path="/bussearch/route">
          <RouteMap />
        </Route>
        <Route path="/bussearch/stop">
          <StopMap />
        </Route>
      </Switch>
    </div>
  );
}

export default BusSearch;
