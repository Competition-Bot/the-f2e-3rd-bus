import AllCity from "../Json/City.json";
import Select from "react-select";
import { Link } from "react-router-dom";


function News() {
  return (
    <div className="px-12 py-9 ">
      <div className="flex justify-between items-center pb-4">
        <div className="text-3xl font-medium">最新消息</div>
        <Select className="w-32 " options={AllCity} />

      </div>
      <div class="line"></div>


      <ul>
        <span className="flex items-center justify-between py-4">
        {/* <Link to={`/ProductList/ProductItem/${product.id}`}> */}
         <Link to="/news/detail/1">detail</Link> 
          <span className="truncate">
            {/* <span className=" text-gray-400 pr-5">2021/11/17</span> */}
            <span className="text-blue-400  w-20 pr-5" >新北</span>
            <span className="pr-5 ">搭乘公車捷運請佩戴口罩，未戴口罩得拒載並處以最高1萬5千元罰鍰</span>
          </span>
          <img className=" h-3 w-2" src="/img/Vector_blue.png" />
        </span>


      </ul>


{/* pagenumber */}
<div class="flex justify-center ...">
      <div className=" px-4 py-3 flex items-center justify-between  sm:px-6">
        <div className="hidden sm:flex-1 sm:flex sm:items-center sm:justify-between">
          <div>
            <nav className="relative z-0 inline-flex   -space-x-px" aria-label="Pagination">
              <a
                href="#"
                className="relative inline-flex items-center px-2 py-2  text-sm font-medium text-gray-500 hover:bg-gray-50"
              >
                <span className="sr-only">Previous</span>
                <img className=" h-3 w-2" src="/img/Vector_blue_left.png" />
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
                <img className=" h-3 w-2" src="/img/Vector_blue.png" />
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
