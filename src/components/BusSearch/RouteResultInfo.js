import RouteListItem from "./RouteListItem";
import { useEffect ,useState} from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  setRouteEstimatedTime,
  setStopEstimatedTime,
} from "../../actions/busActions";
import { getEstimatedTimeOfRoute, getRouteAllStop } from "../../api/routeApi";

function RouteResultInfo() {
  const dispatch = useDispatch();
  const [_go, _setGo] = useState(true)
  let _routeUID = useSelector((state) => state.busReducer.routeUID);
  let _routeName = useSelector((state) => state.busReducer.routeName);
  let _city = useSelector((state) => state.busReducer.city);
  let _goRoute = useSelector((state) => state.busReducer.goRouteEstimatedTime);
  let _backRoute = useSelector(
    (state) => state.busReducer.backRouteEstimatedTime
  );
  let _goStopName = useSelector((state) => state.busReducer.goStopName);
  let _backStopName = useSelector((state) => state.busReducer.backStopName);

  useEffect(() => {
    _handleRouteAPI();
  },[]);

  useEffect(() => {
    _handleStopAPI();
  }, [_goRoute])
  
  function _changeRoute(){
   _setGo(!_go)
  }

  async function _handleRouteAPI() {
    const _estimatedRouteData = await getEstimatedTimeOfRoute(
      _city,
      _routeName,
      _routeUID,
    );
    if (_estimatedRouteData) {
      dispatch(
        setRouteEstimatedTime(
          _estimatedRouteData.goRoute,
          _estimatedRouteData.backRoute,
          _estimatedRouteData.goBus,
          _estimatedRouteData.backBus
        )
      );
    }
  }

  async function _handleStopAPI() {
    const _estimatedStopData = await getRouteAllStop(_city, _routeName, _routeUID);
    if (_estimatedStopData && _goRoute) {
      let _goStopData = _estimatedStopData.goRoute;
      let _backStopData = _estimatedStopData.backRoute;
      _goRoute.forEach((item, index) => {
        if (_goStopData[index].stopName === item.stopName) {
          _goStopData[index] = {
            ..._goStopData[index],
            plateNumb: item.plateNumb,
            stopID: item.stopID,
            estimateTime: item.estimateTime,
            nextBusTime: item.nextBusTime,
            status: item.status,
          };
        }
      });
      _backRoute.forEach((item, index) => {
        if (_backStopData[index].stopName === item.stopName) {
          _backStopData[index] = {
            ..._backStopData[index],
            plateNumb: item.plateNumb,
            stopID: item.stopID,
            estimateTime: item.estimateTime,
            nextBusTime: item.nextBusTime,
            status: item.status,
          };
        }
      });
      dispatch(
        setStopEstimatedTime(
          _goStopData,
          _backStopData
        )
      );
    }
  }

  return (
    <div className="h-full">
      <div className="lg:px-7 md:px-16 px-3 absolute w-full h-full">
        <div className="px-5">
          <h2 className="text-white mb-2">{_routeName}</h2>
          <div className="grid gap-6 grid-flow-col justify-start relative">
            <a onClick={_changeRoute} className={`tab-line hover:tab-line-hover ${_go ? "tab-line-active" : ''}`}>往{_goStopName}</a>
            <a onClick={_changeRoute} className={`tab-line hover:tab-line-hover ${!_go ? "tab-line-active" : ''}`}>往{_backStopName}</a>
            {/* <div className="tab-line text-white absolute right-0">
            {_goStopName} - {_backStopName}
            </div> */}
          </div>
        </div>
        <div className="mt-4 pb-28 bg-white h-full shadow-card grid auto-rows-max overflow-scroll">
          {
            _go ?
              _goRoute.map((item)=>(
                <RouteListItem key={item.stopUID} routeData={item} />
              ))
            : _backRoute.map((item)=>(
              <RouteListItem key={item.stopUID} routeData={item} />
            ))
          }
        </div>
      </div>
      <div className="bg-blue-400 w-full h-48 -mt-1"></div>
    </div>
  );
}

export default RouteResultInfo;
