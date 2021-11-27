import { Switch, Route } from "react-router";
import PlanSearchBar from "../components/PlanSearch/PlanSearchBar";
import PlanResult from "../components/PlanSearch/PlanResult";
import PlanDetail from "../components/PlanSearch/PlanDetail";
import PlanMap from "../components/PlanSearch/PlanMap";
import BreadCrumbSearch from "../components/BreadCrumbSearch";
import { useState } from "react";

function PlanSearch() {
  const [showMap, setshowMap] = useState(false);

  const _handleClickDropDown = (value = showMap) => {
    setshowMap(!value);
  };
  return (
    <div className="search content-full">
      <BreadCrumbSearch />
      <div
        className={`z-10 relative w-full h-full bg-blue-200 lg:order-none order-2 overflow-hidden lg:row-auto ${
          !showMap ? "row-span-2" : ""
        }`}
      >
        <div className="bg-blue-400 md:pb-4 pb-3 lg:hidden">
          <div
            className="w-10 h-4 mx-auto cursor-pointer flex items-center"
            onClick={() => _handleClickDropDown()}
          >
            <div className="line-dropdown"></div>
          </div>
        </div>
        <Switch>
          <Route exact path="/plansearch">
            <PlanSearchBar />
          </Route>
          <Route path="/plansearch/result">
            <PlanResult />
          </Route>
          <Route path="/plansearch/detail/:planresultid">
            <PlanDetail />
          </Route>
        </Switch>
      </div>
      <div
        className={`z-0 w-full h-full row-span-2 lg:block ${
          !showMap ? "hidden" : ""
        }`}
      >
        <PlanMap />
      </div>
    </div>
  );
}
export default PlanSearch;
