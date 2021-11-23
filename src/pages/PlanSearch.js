import { Switch, Route } from "react-router";
import PlanSearchBar from "../components/PlanSearch/PlanSearchBar";
import PlanResult from "../components/PlanSearch/PlanResult";
import PlanDetail from "../components/PlanSearch/PlanDetail";
import PlanMap from "../components/PlanSearch/PlanMap";

function PlanSearch() {
  return (
    <div>
      <div>路線規劃</div>
      <div className="line"></div>
      <a className="btn">查詢</a>
      <Switch>
        <Route exact path="/plansearch">
          <PlanSearchBar />
        </Route>
        <Route exact path="/plansearch/result">
          <PlanResult />
        </Route>
        <Route path="/plansearch/detail">
          <PlanDetail />
        </Route>
      </Switch>
      <PlanMap />
    </div>
  );
}
export default PlanSearch;
