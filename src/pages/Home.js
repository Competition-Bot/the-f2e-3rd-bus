import { Container } from "postcss";
import Select from "react-select";
import AllCity from "../Json/City.json";
import { Link, Switch, Route, NavLink } from "react-router-dom";
import HomeRouteSearch from "../components/HomeRouteSearch";
import HomeStopSearch from "../components/HomeStopSearch";


import line_blue from "../assets/img/line_blue.png";
import HomeImage from "../assets/img/HomeImage.png";
import Vector_blue from "../assets/img/Vector_blue.png";






function Home() {


  return (
    <div className="">
      {/* 主介面 */}
      <div className="py-16 p-10 md:px-40 md:py-24 lg:flex">
        <div className="">
          <div className="text-3xl text-blue-400 font-bold">Take a Bus!<br />查詢公車不再是件麻煩事</div>
          <div className="flex py-7">
            <NavLink
              to="/"
              className="home_switch_on mr-2"
              activeClassName="home_switch_on"
            >
              找路線
            </NavLink>
            <img className="w-8 h-px mt-6 " src={line_blue} alt="" />
            <NavLink
              to="/"
              activeClassName="home_switch_on"
              className="home_switch_off ml-2"
            >
              找站牌
            </NavLink>
          </div>
          <Switch>
            <Route exact path="/">
              <HomeRouteSearch />
            </Route>
            <Route exact path="/">
              <HomeStopSearch/>
            </Route>
          </Switch>
          <Link
            to="/"
            className="btn shadow-btn mt-7 "
          >
            查詢
          </Link>
          {/* <label>
            <input type="checkbox" className="transition checked:bg-yellow-600 cursor-pointer h-16 w-64 rounded-full appearance-none bg-blue-200" ></input>
          </label> */}
        </div>
        <div className="pt-14  lg:pt-0  "><img className=" w-176 lg:pl-14 " src={HomeImage} /></div>


      </div>

      {/* 最新消息列表 */}
      <div className="bg-gray-200 p-9 md:p-12 lg:px-40 ">
        <div className="flex justify-between items-center pb-4">
          <div className="text-3xl font-medium">最新消息</div>
          <Link to="/news">
            <div className="text-gray-500 hover:text-black">查看更多</div>
          </Link>
        </div>
        <div className="line"></div>
        <ul>
          <span className="flex items-center justify-between py-4">
            {/* <span className=" text-gray-400 pr-5">2021/11/17</span> */}
            <span className="truncate">
              <span className="text-blue-400  w-20 pr-5" >新北</span>
              <span className="pr-5 ">搭乘公車捷運請佩戴口罩，未戴口罩得拒載並處以最高1萬5千元罰鍰</span>
            </span>
            <img className=" h-3 w-2" src={Vector_blue} />
          </span>


        </ul>

      </div>










    </div>
  );
}

export default Home;
