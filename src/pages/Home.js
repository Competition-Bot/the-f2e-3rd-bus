import { Container } from "postcss";
import Select from "react-select";
import AllCity from "../Json/City.json";
import { Link, Switch, Route, NavLink } from "react-router-dom";
import NewsItem from "../components/NewsItem";
import React, { useState,useEffect } from 'react';
import News from "../Json/News.json"
// import getNews from "../api/newsApi"


import line_blue from "../assets/img/line_blue.png";
import HomeImage from "../assets/img/HomeImage.png";
import Vector_blue from "../assets/img/Vector_blue.png";






function Home() {
  // const [newsdata, setData] = useState([]);
  // useEffect(async () => { setData(await getNews()) }, [])

let news5 = News.slice(0,5)

  return (
    <div className="">
      {/* 主介面 */}
      <div className="py-16 p-10 md:px-40 md:py-24 xl:flex">
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
          <Link
            to="/"
            className="btn shadow-btn mt-7 "
          >
            查詢
          </Link>
        </div>
        <div className="pt-14   lg:pt-0  "><img className=" min-w-327  md:min-w-420  lg:min-w-628" src={HomeImage} /></div>
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
        <div>
        </div>
        
        {news5.map(news => (
              <NewsItem key={news.id} news={news}/>
            ))}
      </div>










    </div>
  );
}

export default Home;
