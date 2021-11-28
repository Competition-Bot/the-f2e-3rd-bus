import NewsItem from "../components/NewsItem";
import { useState } from "react";
import News from "../Json/News.json";
/* eslint-disable jsx-a11y/anchor-is-valid */
import { Link } from "react-router-dom";

import HomeImage from "../assets/img/HomeImage.png";

import RouteSearch from "../components/BusSearch/RouteSearch";
import StopSearch from "../components/BusSearch/StopSearch";
import { ReactComponent as Line } from "../assets/icon/line-dash.svg";

function Home() {
  let news5 = News.slice(0, 5);

  const [byRoute, setbyRoute] = useState(true);

  const _handleTabClick = (value = !byRoute) => {
    setbyRoute(value);
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
              className={`home_switch_on hover:home-switch-on-hover ${
                byRoute ? "" : "home_switch_off"
              }`}
              onClick={() => _handleTabClick(true)}
            >
              找路線
            </a>
            <Line stroke="#1E659C" />
            <a
              className={`home_switch_on hover:home-switch-on-hover ${
                !byRoute ? "" : "home_switch_off"
              }`}
              onClick={() => _handleTabClick(false)}
            >
              找站牌
            </a>
          </div>
          {byRoute ? <RouteSearch /> : <StopSearch />}
        </div>
        <div className="pt-14  lg:pt-0  ">
          <img className=" w-176 lg:pl-14 " src={HomeImage} alt="" />
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
        <div></div>
        {news5.map((news) => (
          <NewsItem key={news.id} news={news} />
        ))}
      </div>
    </div>
  );
}

export default Home;
