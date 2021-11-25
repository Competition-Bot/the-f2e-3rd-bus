import { Switch, Route } from "react-router";
import PlanSearchBar from "../components/PlanSearch/PlanSearchBar";
import PlanResult from "../components/PlanSearch/PlanResult";
import PlanDetail from "../components/PlanSearch/PlanDetail";
import PlanMap from "../components/PlanSearch/PlanMap";


function PlanSearch() {
  return (
    <div class="flex">
      <div className="relative w-2/6">
        <div className="grid grid-flow-col gap-3 items-center justify-start bg-blue-400 px-10 pt-8 pb-4">
          <div className="rounded-full w-4 h-4 bg-yellow-400"></div>
          <div className="text-white">搜尋</div>
          
        </div>
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
      </div>
      <div className="border-red-800 border-2 w-4/6 content-full">
        <PlanMap />
      </div>
    </div>
  );
}
export default PlanSearch;
