import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { setRouteEstimatedTime, setStopEstimatedTime } from "../../actions/busActions";
import { getEstimatedTimeOfRoute, getRouteAllStop } from "../../api/routeApi";
import { useParams } from 'react-router-dom'

function RouteResultInfo() {
  const _UID = useParams().routeuid;
  let _routeName = useSelector((state) => state.busReducer.routeName);
  let _city = useSelector((state) => state.busReducer.city);
  let _goRoute = useSelector((state) => state.busReducer.goRouteEstimatedTime);
  let _backRoute = useSelector((state) => state.busReducer.backRouteEstimatedTime);
  let _goStopName = useSelector((state) => state.busReducer.goStopName);
  let _backStopName = useSelector((state) => state.busReducer.backStopName);
  const dispatch = useDispatch();

  useEffect(() => {
    _handleRouteAPI();
    _handleStopAPI();
  }, [_goRoute])

  async function _handleRouteAPI() {
    const _estimatedRouteData = await getEstimatedTimeOfRoute(_city, _routeName, _UID);
    if(_estimatedRouteData){
      dispatch(setRouteEstimatedTime(_estimatedRouteData.goRoute, _estimatedRouteData.backRoute, _estimatedRouteData.goBus, _estimatedRouteData.backBus));
    }
  }

  async function _handleStopAPI() {
    const _estimatedStopData = await getRouteAllStop(_city, _routeName, _UID);
    if (_estimatedStopData && _goRoute) {
      let _goStopData = _estimatedStopData.goRoute
      let _backStopData = _estimatedStopData.backRoute
      _goRoute.forEach((item, index) => {
        if (_goStopData[index].stopName === item.stopName) {
          _goStopData[index] = {
            ..._goStopData[index],
            plateNumb: item.plateNumb,
            stopID: item.stopID,
            estimateTime: item.estimateTime,
            nextBusTime: item.nextBusTime
          }
        }
      });
      _backRoute.forEach((item, index) => {
        if (_backStopData[index].stopName === item.stopName) {
          _backStopData[index] = {
            ..._backStopData[index],
            plateNumb: item.plateNumb,
            stopID: item.stopID,
            estimateTime: item.estimateTime,
            nextBusTime: item.nextBusTime
          }
        }
      });
      dispatch(setStopEstimatedTime(_estimatedStopData.goRoute, _estimatedStopData.backRoute))
    }
  }

  return (
    <>
    </>
  );


}

export default RouteResultInfo;