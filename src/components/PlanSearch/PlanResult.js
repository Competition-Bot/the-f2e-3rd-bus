import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faExchangeAlt } from "@fortawesome/free-solid-svg-icons";
import PlanListItem from "./PlanListItem"

function PlanResult() {
  return (
    <div className="h-full">
      <div className="lg:px-7 md:px-16 px-3 absolute w-full h-full">
        <div className="px-3">
          <div className="text-white mb-3 mt-1 grid grid-flow-col auto-cols-max gap-x-6 items-center">
            <div className="font-medium text-xl">我的位置</div>
            <FontAwesomeIcon icon={faExchangeAlt} size="lg" />
            <div className="font-medium text-xl">台北動物園</div>
          </div>
          <div className="text-white">
            出發時間：11/26 14:00
          </div>
        </div>
        <div className="mt-4 pb-28 px-4 bg-white h-full shadow-card grid auto-rows-max">
          <PlanListItem />
          <PlanListItem />
          <PlanListItem />
          <PlanListItem />
          <PlanListItem />
          <PlanListItem />
        </div>
      </div>
      <div className="bg-blue-400 w-full h-48 -mt-1"></div>
    </div>
  );
}

export default PlanResult;
