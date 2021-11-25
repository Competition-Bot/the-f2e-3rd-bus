import { ReactComponent as LineArrow } from "../assets/icon/line-arrow.svg";
import { ReactComponent as CircleArrow } from "../assets/icon/arrow-circle.svg";
import { ReactComponent as LineDash } from "../assets/icon/line-dash.svg";
import { Switch, Route } from "react-router";
import { NavLink } from "react-router-dom";

function SearchBreadCrumb() {
  return (
    <Switch>
      <Route exact path="/bussearch/:type">
        <div className="w-full lg:px-10 md:px-20 px-8 md:py-4 pt-2 pb-1 grid grid-flow-col gap-3 items-center justify-start bg-blue-400">
          <div className="rounded-full w-4 h-4 bg-yellow-400"></div>
          <div className="text-white">搜尋</div>
          <LineArrow alt="log" />
        </div>
      </Route>
      <Route exact path="/bussearch/route/:routename">
        <div className="w-full lg:px-10 md:px-20 px-8 md:py-4 pt-2 pb-1 grid grid-flow-col gap-3 items-center justify-start bg-blue-400">
          <NavLink
            to="/bussearch/route/:routename/detail"
            className="text-white grid grid-flow-col gap-3 items-center justify-start"
          >
            <CircleArrow alt="circle" />
            <span>重新搜尋</span>
          </NavLink>
          <LineDash alt="line" />
          <div className="rounded-full w-4 h-4 bg-yellow-400"></div>
          <div className="text-white">284</div>
          <LineDash alt="line" />
          <NavLink
            to="/bussearch/route/:routename/detail"
            className="text-white grid grid-flow-col gap-3 items-center justify-start"
          >
            <CircleArrow alt="circle" className="rotate-180" />
            <span>班表/票價</span>
          </NavLink>
        </div>
      </Route>
      <Route exact path="/bussearch/route/:routename/detail">
        <div className="w-full lg:px-10 md:px-20 px-8 md:py-4 pt-2 pb-1 grid grid-flow-col gap-3 items-center justify-start bg-blue-400">
          <NavLink
            to="/bussearch/route/:routename"
            className="text-white grid grid-flow-col gap-3 items-center justify-start"
          >
            <CircleArrow alt="circle" />
            <span>284</span>
          </NavLink>
          <LineDash alt="line" />
          <div className="rounded-full w-4 h-4 bg-yellow-400"></div>
          <div className="text-white">班表/票價</div>
        </div>
      </Route>
    </Switch>
  );
}

export default SearchBreadCrumb;
