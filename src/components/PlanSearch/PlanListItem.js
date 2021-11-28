import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faWalking } from "@fortawesome/free-solid-svg-icons";
import { faBus } from "@fortawesome/free-solid-svg-icons";
import { ReactComponent as AngleRight } from "../../assets/icon/angle-right.svg";
import { Link } from "react-router-dom";

function RouteListItem({ data }) {
  const _renderPlanInfo = () => {
    let list = [];
    data.step.forEach((item, idx) => {
      if (idx !== 0) list.push(<AngleRight key={`angle-${idx}`} stroke="#333333" />);
      if (item.type === "walk") {
        list.push(
          <div key={`step-${idx}`} className="flex items-end h-7 pt-1 w-max">
            <FontAwesomeIcon
              icon={faWalking}
              size="lg"
              className="self-start"
            />
            <span className="text-sm ml-0.5">{item.time}</span>
          </div>
        );
      } else if (item.type === "bus") {
        list.push(
          <div key={`step-${idx}`} className="flex items-center h-7 pt-1 w-max">
            <FontAwesomeIcon
              icon={faBus}
              size="lg"
              className="self-start"
              color="#1E659C"
            />
            <span className="ml-2 text-blue-400">{item.name}</span>
          </div>
        );
      }
    });

    return list;
  };

  return (
    <Link to={`/plansearch/detail/${data.idx}`} className="planlistitem">
      <div>
        <div className="mb-1">
          {data.time[0]} - {data.time[1]}
        </div>
        <div className="grid grid-flow-col auto-cols-max gap-x-3 items-center">
          {_renderPlanInfo()}
        </div>
      </div>
      <div>
        <div className="mb-1 text-sm text-gray-400 text-right">
          TWD${data.price}
        </div>
        <div>約{data.time[2]}分鐘</div>
      </div>
      <AngleRight stroke="#333" />
      <div className="border-b border-gray-300 w-full absolute bottom-0"></div>
    </Link>
  );
}

export default RouteListItem;
