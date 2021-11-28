/* eslint-disable jsx-a11y/anchor-is-valid */
import Select from "react-select";
import news from "../Json/News.json";
import NewsItem from "../components/NewsItem";
import React, { useState } from "react";

import Vector_blue from "../assets/img/Vector_blue.png";
import Vector_blue_left from "../assets/img/Vector_blue_left.png";

function News() {
  const [city, setcity] = useState("臺北市");
  const [data, setdata] = useState(
    news.filter((item) => item.city === "臺北市")
  );
  const options = [
    { value: "臺北市", label: "臺北市" },
    { value: "新北市", label: "新北市" },
    { value: "桃園市", label: "桃園市" },
  ];

  const handleChange = (option) => {
    if (option.value !== city) {
      setdata(news.filter((item) => item.city === option.value));
    }
  };

  return (
    <div className="px-12 py-9 h-screen lg:px-48 ">
      <div className="flex justify-between items-center pb-4">
        <div className="text-3xl font-medium">最新消息</div>
        <Select
          id="CityName"
          className="w-32 "
          options={options}
          onChange={handleChange}
          defaultValue={{ value: "臺北市", label: "臺北市" }}
        />
      </div>
      <div className="line"></div>
      {data.map((news) => (
        <NewsItem key={news.id} news={news} />
      ))}

      {/* pagenumber */}
      <div className="flex justify-center mt-5">
        <div className=" px-4 py-3 flex items-center justify-between  sm:px-6">
          <div className="hidden sm:flex-1 sm:flex sm:items-center sm:justify-between">
            <div>
              <nav
                className="relative z-0 inline-flex   -space-x-px"
                aria-label="Pagination"
              >
                <a className="relative inline-flex items-center px-2 py-2  text-sm font-medium text-gray-500 hover:bg-gray-50">
                  <span className="sr-only">Previous</span>
                  <img className=" h-3 w-2" src={Vector_blue_left} />
                </a>
                <a
                  aria-current="page"
                  className="z-10 bg-blue-50  text-blue-400 relative inline-flex items-center px-4 py-2  text-sm font-medium"
                >
                  1
                </a>
                {/* <a className=" text-gray-500 hover:bg-gray-50 relative inline-flex items-center px-4 py-2 text-sm font-medium">
                  2
                </a>
                <a className=" text-gray-500 hover:bg-gray-50 hidden md:inline-flex relative items-center px-4 py-2  text-sm font-medium">
                  3
                </a> */}
                <a className="relative inline-flex items-center px-2 py-2 rounded-r-md    text-sm font-medium text-gray-500 hover:bg-gray-50">
                  <span className="sr-only">Next</span>
                  <img className=" h-3 w-2" src={Vector_blue} alt=">" />
                </a>
              </nav>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default News;
