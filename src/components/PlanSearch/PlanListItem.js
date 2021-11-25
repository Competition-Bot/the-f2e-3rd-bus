import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faWalking } from "@fortawesome/free-solid-svg-icons";
import { faBus } from "@fortawesome/free-solid-svg-icons";
import { ReactComponent as AngleRight } from "../../assets/icon/angle-right.svg";
import { Link } from "react-router-dom";

function RouteListItem() {
  return (
    <Link to="/plansearch/detail" className="planlistitem">
      <div>
        <div className="mb-1">8:14 - 8:34</div>
        <div className="grid grid-flow-col auto-cols-max gap-x-2 items-center">
          <div className="flex items-end h-7 pt-1 w-max">
            <FontAwesomeIcon
              icon={faWalking}
              size="lg"
              className="self-start"
            />
            <span className="text-sm ml-0.5">2</span>
          </div>
          <AngleRight />
          <div className="flex items-center h-7 pt-1 w-max">
            <FontAwesomeIcon
              icon={faBus}
              size="lg"
              className="self-start"
              color="#1E659C"
            />
            <span className="ml-2 text-blue-400">568</span>
          </div>
        </div>
      </div>
      <div>
        <div className="mb-1 text-sm text-gray-400 text-right">TWD$15</div>
        <div>約20分鐘</div>
      </div>
      <AngleRight stroke="#333"/>
      <div className="border-b border-gray-300 w-full absolute bottom-0"></div>
    </Link>
  );
}

export default RouteListItem;
