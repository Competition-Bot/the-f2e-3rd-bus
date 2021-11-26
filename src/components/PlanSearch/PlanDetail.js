import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faWalking, faBus } from "@fortawesome/free-solid-svg-icons";
import { ReactComponent as AngleRight } from "../../assets/icon/angle-right.svg";
import { Link } from "react-router-dom";

function PlanDetail() {
  return (
    <div className="h-full">
      <div className="lg:px-7 md:px-16 px-3 absolute w-full h-full">
        <div className="px-3">
          <div className="grid grid-flow-col auto-cols-max gap-x-5 items-center my-2">
            <div className="flex items-end h-10 pt-1 w-max">
              <FontAwesomeIcon
                icon={faWalking}
                size="2x"
                color="#ffffff"
                className="self-start"
              />
              <span className="text-base ml-0.5 text-white">2</span>
            </div>
            <AngleRight stroke="white" height="14" width="8" />
            <div className="flex items-center h-10 pt-1 w-max">
              <FontAwesomeIcon
                icon={faBus}
                size="2x"
                className="self-start"
                color="#ffffff"
              />
              <span className="ml-2 text-white text-xl">568</span>
            </div>
          </div>
          <div className="flex justify-between">
            <div className="text-white">8:14 - 8:34</div>
            <div className="grid gap-4 auto-cols-max grid-flow-col">
              <div className="text-white">TWD$15</div>
              <div className="text-white">約20分鐘</div>
            </div>
          </div>
        </div>
        <div className="mt-4 pt-4 pb-28 px-4 bg-white h-full shadow-card grid auto-rows-max">
          <div className="relative grid grid-flow-col auto-cols-max gap-4">
            <div className="h-full w-max flex items-center justify-center">
              <div className="border-l-2 border-blue-300 h-full absolute z-0"></div>
              <div className="rounded-full w-4 h-4 bg-blue-300 z-10"></div>
            </div>
            <div className="py-6">
              <div>你的位置</div>
              <div className="border-b border-gray-300 w-11/12 absolute bottom-0"></div>
            </div>
          </div>
          <div className="relative grid grid-flow-col auto-cols-max gap-4">
            <div className="h-full w-max flex items-center justify-center">
              <div className="border-l-2 border-blue-300 h-full absolute z-0"></div>
              <div className="rounded-full w-4 h-4 bg-blue-300 z-10"></div>
            </div>
            <div className="py-6 flex items-center">
              <FontAwesomeIcon
                icon={faWalking}
                size="lg"
                color="#333333"
                className="mr-2"
              />
              <div>步行到臺北教育大學</div>
              <div className="py-1.5 px-3 bg-gray-300 font-medium absolute right-0">
                約2分鐘
              </div>
              <div className="border-b border-gray-300 w-11/12 absolute bottom-0"></div>
            </div>
          </div>
          <div className="relative grid grid-flow-col auto-cols-max gap-4">
            <div className="h-full w-max flex items-center justify-center">
              <div className="border-l-2 border-blue-300 h-full absolute z-0"></div>
              <div className="rounded-full w-4 h-4 bg-blue-300 z-10"></div>
            </div>
            <div className="py-6">
              <div className="flex items-center">
                <FontAwesomeIcon
                  icon={faBus}
                  size="lg"
                  className="mr-2"
                  color="#1E659C"
                />
                <div className="text-blue-400 font-medium mr-2">568</div>
                <div>從臺北教育大學到台北動物園</div>
              </div>
              <div className="flex items-center mt-4">
                <Link to="/bussearch/route/:city/:routename" className="btn hover:btn-hover">
                  查看公車動態
                </Link>
                <div className="py-1.5 px-3 bg-gray-300 font-medium absolute right-0">
                  約20分鐘
                </div>
              </div>
              <div className="border-b border-gray-300 w-11/12 absolute bottom-0"></div>
            </div>
          </div>
          <div className="relative grid grid-flow-col auto-cols-max gap-4">
            <div className="h-full w-max flex items-center justify-center">
              <div className="border-l-2 border-blue-300 h-full absolute z-0"></div>
              <div className="rounded-full w-4 h-4 bg-blue-300 z-10"></div>
            </div>
            <div className="py-6 flex items-center">
              <FontAwesomeIcon
                icon={faWalking}
                size="lg"
                color="#333333"
                className="mr-2"
              />
              <div>步行到台北動物園</div>
              <div className="py-1.5 px-3 bg-gray-300 font-medium absolute right-0">
                約2分鐘
              </div>
              <div className="border-b border-gray-300 w-11/12 absolute bottom-0"></div>
            </div>
          </div>
          <div className="relative grid grid-flow-col auto-cols-max gap-4">
            <div className="h-full w-max flex items-center justify-center">
              <div className="border-l-2 border-blue-300 h-full absolute z-0"></div>
              <div className="rounded-full w-4 h-4 bg-blue-300 z-10"></div>
            </div>
            <div className="py-6">
              <div>抵達台北動物園</div>
              <div className="border-b border-gray-300 w-11/12 absolute bottom-0"></div>
            </div>
          </div>
        </div>
      </div>
      <div className="bg-blue-400 w-full h-48 -mt-1"></div>
    </div>
  );
}

export default PlanDetail;
