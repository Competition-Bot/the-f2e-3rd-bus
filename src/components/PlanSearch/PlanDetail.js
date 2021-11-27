import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faWalking, faBus } from "@fortawesome/free-solid-svg-icons";
import { ReactComponent as AngleRight } from "../../assets/icon/angle-right.svg";
import { Link } from "react-router-dom";
import { useParams, useHistory } from "react-router";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";



function PlanDetail() {
  let history = useHistory();
  const { planresultid } = useParams();
  let _planlist = useSelector((state) => state.planReducer.planlist);
  const [data, setdata] = useState(null)

  useEffect(() => {
    if (planresultid >= _planlist.length) {
      history.push("/plansearch");
    }
    else {
      setdata(_planlist[planresultid])
    }
  }, [planresultid])

  const _renderPlanInfo = () => {
    let list = [];
    data.step.forEach((item, idx) => {
      if (idx !== 0) list.push(<AngleRight stroke="white" height="14" width="8" />);
      if (item.type === "walk") {
        list.push(
          <div className="flex items-center h-10 pt-2 w-max">
            <FontAwesomeIcon
              icon={faWalking}
              size="lg"
              color="#ffffff"
              className="self-start"
            />
            <span className="text-base ml-1 text-white">{item.time}</span>
          </div>
        );
      } else if (item.type === "bus") {
        list.push(
          <div className="flex items-center h-10 w-max">
            <FontAwesomeIcon
              icon={faBus}
              size="lg"
              color="#ffffff"
            />
            <span className="ml-2 text-white text-xl">{item.name}</span>
          </div>
        );
      }
    });

    return list;
  };

  const _renderPlanDetail = () => {
    let list = [];
    data.step.forEach((item,idx) => {
      if (item.type === "walk") {
        list.push(
          <div key={"plandetail"+idx} className="relative grid grid-flow-col auto-cols-max gap-4">
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
              <div>步行到{item.destination.label}</div>
              <div className="py-1.5 px-3 bg-gray-300 font-medium absolute right-0">
                約{item.time}分鐘
              </div>
              <div className="border-b border-gray-300 w-11/12 absolute bottom-0"></div>
            </div>
          </div>
        );
      } else if (item.type === "bus") {
        list.push(
          <div key={"plandetail"+idx} className="relative grid grid-flow-col auto-cols-max gap-4">
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
                <div className="text-blue-400 font-medium mr-2">{item.name}</div>
                <div>從 <span className="text-blue-400">{item.start.label}</span> 到 <span className="text-blue-400">{item.end.label}</span></div>
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
        );
      }
    });

    return list;
  };


  return (
    <div className="h-full">
      {data === null ? null :
        (<div className="lg:px-7 md:px-16 px-3 absolute w-full h-full">
          <div className="px-3">
            <div className="grid grid-flow-col auto-cols-max gap-x-5 items-center my-2">
              {_renderPlanInfo()}
            </div>
            <div className="flex justify-between">
              <div className="text-white">{data.time[0]} - {data.time[1]}</div>
              <div className="grid gap-4 auto-cols-max grid-flow-col">
                <div className="text-white">TWD${data.price}</div>
                <div className="text-white">約{data.time[2]}分鐘</div>
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
                <div>{data.plan[0].label}</div>
                <div className="border-b border-gray-300 w-11/12 absolute bottom-0"></div>
              </div>
            </div>
            {_renderPlanDetail()}
            <div className="relative grid grid-flow-col auto-cols-max gap-4">
              <div className="h-full w-max flex items-center justify-center">
                <div className="border-l-2 border-blue-300 h-full absolute z-0"></div>
                <div className="rounded-full w-4 h-4 bg-blue-300 z-10"></div>
              </div>
              <div className="py-6">
                <div>抵達{data.plan[1].label}</div>
                <div className="border-b border-gray-300 w-11/12 absolute bottom-0"></div>
              </div>
            </div>
          </div>
        </div>)
      }

      <div className="bg-blue-400 w-full h-48 -mt-1"></div>
    </div>
  );
}

export default PlanDetail;
