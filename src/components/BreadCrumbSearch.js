import { ReactComponent as LineArrow } from "../assets/icon/line-arrow.svg";
import { ReactComponent as CircleArrow } from "../assets/icon/arrow-circle.svg";
import { ReactComponent as LineDash } from "../assets/icon/line-dash.svg";
import { Switch, Route } from "react-router";
import { NavLink } from "react-router-dom";

function SearchBreadCrumb() {
  return (
    <div className="w-full lg:px-10 md:px-20 px-5 md:py-4 pt-2 pb-1 grid grid-flow-col md:gap-3 gap-2 items-center justify-start bg-blue-400">
      <Switch>
        <Route exact path="/bussearch/:type">
          <div className="rounded-full w-4 h-4 bg-yellow-400"></div>
          <div className="text-white">搜尋</div>
          <LineArrow alt="log" />
        </Route>
        <Route exact path="/bussearch/route/:routename">
          <NavLink
            to="/bussearch"
            className="text-white grid grid-flow-col md:gap-3 gap-2 items-center justify-start"
          >
            <CircleArrow alt="circle" />
            <span className="md:text-base text-sm">重新搜尋</span>
          </NavLink>
          <LineDash className="md:w-auto w-5" alt="line" />
          <div className="rounded-full w-4 h-4 bg-yellow-400"></div>
          <div className="text-white md:text-base text-sm">284</div>
          <LineDash className="md:w-auto w-5" alt="line" />
          <NavLink
            to="/bussearch/route/:routename/detail"
            className="text-white grid grid-flow-col md:gap-3 gap-2 items-center justify-start"
          >
            <CircleArrow alt="circle" className="rotate-180" />
            <span className="md:text-base text-sm">班表/票價</span>
          </NavLink>
        </Route>
        <Route exact path="/bussearch/route/:routename/detail">
          <NavLink
            to="/bussearch/route/:routename"
            className="text-white grid grid-flow-col md:gap-3 gap-2 items-center justify-start"
          >
            <CircleArrow alt="circle" />
            <span>284</span>
          </NavLink>
          <LineDash alt="line" />
          <div className="rounded-full w-4 h-4 bg-yellow-400"></div>
          <div className="text-white">班表/票價</div>
        </Route>
        <Route exact path="/plansearch">
          <div className="rounded-full w-4 h-4 bg-yellow-400"></div>
          <div className="text-white">搜尋</div>
          <LineArrow alt="log" />
        </Route>
        <Route exact path="/plansearch/result">
          <NavLink
            to="/plansearch"
            className="text-white grid grid-flow-col md:gap-3 gap-2 items-center justify-start"
          >
            <CircleArrow alt="circle" />
            <span className="md:text-base text-sm">重新搜尋</span>
          </NavLink>
          <LineDash className="md:w-auto w-5" alt="line" />
          <div className="rounded-full w-4 h-4 bg-yellow-400"></div>
          <div className="text-white md:text-base text-sm">路線方案</div>
        </Route>
        <Route exact path="/plansearch/detail">
          <NavLink
            to="/plansearch/result"
            className="text-white grid grid-flow-col md:gap-3 gap-2 items-center justify-start"
          >
            <CircleArrow alt="circle" />
            <span>查看其他方案</span>
          </NavLink>
          <LineDash alt="line" />
          <div className="rounded-full w-4 h-4 bg-yellow-400"></div>
          <div className="text-white">方案資訊</div>
        </Route>
      </Switch>
    </div>
  );
}

export default SearchBreadCrumb;
