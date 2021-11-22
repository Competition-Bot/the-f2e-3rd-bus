import { Switch, Route,Redirect } from "react-router-dom";
import RouteSearch from "./RouteSearch";
import StopSearch from "./StopSearch";

function BusSearchBar() {
  return (
    <div>
      <div>找路線/找站牌</div>
      <Switch>
        <Route exact path="/bussearch/route">
          <RouteSearch />
        </Route>
        <Route exact path="/bussearch/stop">
          <StopSearch />
        </Route>
      </Switch>
    </div>
  );
}

export default BusSearchBar;
