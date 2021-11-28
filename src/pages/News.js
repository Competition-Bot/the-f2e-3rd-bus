import AllCity from "../Json/City.json";
import Select from "react-select";
import { Link } from "react-router-dom";
import news from "../Json/News.json";
import NewsItem from "../components/NewsItem";
import { useContext } from "react";
import { StoreContext } from "../reducers/newsReducer";
import React, { useState, useEffect } from 'react';
import SeletctItem from "../components/SelectItem";

import Vector_blue from "../assets/img/Vector_blue.png";
import Vector_blue_left from "../assets/img/Vector_blue_left.png";
import Breadcrumbs from '../components/BreadCrumb';

import taipei from "../Json/Taipei.json"
import newtaipei from "../Json/NewTaipei.json"
import taoyuan from "../Json/News.json"


function News() {
  // const { state: { page: {title, products} } } = useContext(StoreContext);

  // const CustomOption = ({ innerProps, isDisabled }) =>
  // !isDisabled ? (
  //   <div {...innerProps}><SeletctItem/></div>
  // ) : null;

  const [cityvalue, setCityvalue] = useState("臺北市");
  const options = [
    { value: "臺北市", label: '臺北市' },
    { value: "新北市", label: '新北市' },
    { value: "桃園市", label: '桃園市' }]

  // const cityname = news.filter(
  //   x => x.Department === "臺北市公共運輸處");
  const cityname = news.filter(
    x => x.Department === "新北市政府交通局")
  // function setCityname(){
  //   if(document.getElementById("CityName").value === "臺北市"){
  //    return(cityname = news.filter(
  //     x => x.Department === "臺北市公共運輸處")); 
  //   }
  //   else if(){
  //     return(cityname = news.filter(
  //       x => x.Department === "桃園市政府")); 
  //   }
  // let x = document.getElementById("CityName").value; 
  // }
  
  const handleChange = (options)=> {

    
      if(options.value==="臺北市"){
         const cityname = news.filter(
          x => x.Department === "臺北市公共運輸處")
       
    };

    // const x = e.target.value;
  };


  return (
    <div className="px-12 py-9 h-screen lg:px-48 ">
      <div className="flex justify-between items-center pb-4">
        <div className="text-3xl font-medium">最新消息</div>

        {/* <Select components={{ Option: CustomOption }} /> */}


        <Select id="CityName" className="w-32 "
          options={options}
          onChange={handleChange}
          defaultValue={{ value: "臺北市", label: '臺北市' }}
        />
      </div>
      <div class="line"></div>
      {cityname.map(news => (
        <NewsItem key={news.id} news={news} />
      ))}

      {/* pagenumber */}
      <div className="flex justify-center ...">
        <div className=" px-4 py-3 flex items-center justify-between  sm:px-6">
          <div className="hidden sm:flex-1 sm:flex sm:items-center sm:justify-between">
            <div>
              <nav className="relative z-0 inline-flex   -space-x-px" aria-label="Pagination">
                <a
                  href="#"
                  className="relative inline-flex items-center px-2 py-2  text-sm font-medium text-gray-500 hover:bg-gray-50"
                >
                  <span className="sr-only">Previous</span>
                  <img className=" h-3 w-2" src={Vector_blue_left} />
                </a>
                <a
                  href="#"
                  aria-current="page"
                  className="z-10 bg-blue-50  text-blue-400 relative inline-flex items-center px-4 py-2  text-sm font-medium"
                >
                  1
                </a>
                <a
                  href="#"
                  className=" text-gray-500 hover:bg-gray-50 relative inline-flex items-center px-4 py-2 text-sm font-medium"
                >
                  2
                </a>
                <a
                  href="#"
                  className=" text-gray-500 hover:bg-gray-50 hidden md:inline-flex relative items-center px-4 py-2  text-sm font-medium"
                >
                  3
                </a>

                <a
                  href="#"
                  className="relative inline-flex items-center px-2 py-2 rounded-r-md    text-sm font-medium text-gray-500 hover:bg-gray-50"
                >
                  <span className="sr-only">Next</span>
                  <img className=" h-3 w-2" src={Vector_blue} />
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
