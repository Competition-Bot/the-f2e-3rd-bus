import { Link, Switch, Route, NavLink } from "react-router-dom";

import React, { useState, useEffect } from "react";
import getNews from "../api/newsApi";

import line_blue from "../assets/img/line_blue.png";
import HomeImage from "../assets/img/HomeImage.png";
import Vector_blue from "../assets/img/Vector_blue.png";

import RouteSearch from "../components/BusSearch/RouteSearch";
import StopSearch from "../components/BusSearch/StopSearch";
import { ReactComponent as Line } from "../assets/icon/line-dash.svg";

function Home() {
  const [data, setData] = useState([]);
  useEffect(async () => {
    setData(await getNews());
  }, []);
  const [byRoute, setbyRoute] = useState(true);

  const _handleTabClick = (value = !byRoute) => {
    setbyRoute(value)
  };

  return (
    <div className="">
      {/* 主介面 */}
      <div className="py-16 p-10 md:px-40 md:py-24 lg:flex">
        <div>
          <div className="text-3xl text-blue-400 font-bold">
            Take a Bus!
            <br />
            查詢公車不再是件麻煩事
          </div>
          <div className="grid grid-flow-col gap-2 auto-cols-max my-7 items-center">
            <a
              href
              className={`home_switch_on hover:home-switch-on-hover ${
                byRoute ? "" : "home_switch_off"
              }`}
              onClick={()=>_handleTabClick(true)}
            >
              找路線
            </a>
            <Line stroke="#1E659C" />
            <a
              href
              className={`home_switch_on hover:home-switch-on-hover ${
                !byRoute ? "" : "home_switch_off"
              }`}
              onClick={()=>_handleTabClick(false)}
            >
              找站牌
            </a>
          </div>
          {byRoute ? <RouteSearch /> : <StopSearch />}
        </div>
        <div className="pt-14  lg:pt-0  ">
          <img className=" w-176 lg:pl-14 " src={HomeImage} />
        </div>
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
              <span className="text-blue-400  w-20 pr-5">新北</span>
              <span className="pr-5 ">
                搭乘公車捷運請佩戴口罩，未戴口罩得拒載並處以最高1萬5千元罰鍰
              </span>
            </span>
            <img className=" h-3 w-2" src={Vector_blue} />
          </span>
        </ul>
      </div>
    </div>
  );
}

export default Home;
