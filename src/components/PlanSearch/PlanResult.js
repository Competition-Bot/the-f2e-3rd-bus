import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faExchangeAlt } from "@fortawesome/free-solid-svg-icons";
import PlanListItem from "./PlanListItem";
import { useSelector } from "react-redux";

function PlanResult() {
  let _pos = useSelector((state) => state.planReducer.pos);
  let _time = useSelector((state) => state.planReducer.time);
  let _planlist = useSelector((state) => state.planReducer.planlist);

  return (
    <div className="h-full">
      <div className="lg:px-7 md:px-16 px-3 absolute w-full h-full">
        <div className="px-3">
          <div className="text-white mb-3 mt-1 grid grid-flow-col auto-cols-max gap-x-6 items-center">
            <div className="font-medium text-xl">{_pos[0].label}</div>
            <FontAwesomeIcon icon={faExchangeAlt} size="lg" />
            <div className="font-medium text-xl">{_pos[1].label}</div>
          </div>
          <div className="text-white">
            {_time.type}：{_time.date} {_time.clock}
          </div>
        </div>
        <div className="mt-4 pb-28 px-4 bg-white h-full shadow-card grid auto-rows-max">
          {_planlist.map((item, idx) => (
            <PlanListItem key={idx} data={{ idx: idx, ...item }} />
          ))}
        </div>
      </div>
      <div className="bg-blue-400 w-full h-48 -mt-1"></div>
    </div>
  );
}

export default PlanResult;
