import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { setStopEstimatedTime } from "../../actions/busActions";
import { getRouteAllStop } from "../../api/routeApi";

function RouteResultInfo() {
  //const dispatch = useDispatch();
  let _city = useSelector((state) => { 
    console.log(state.busReducer)
    return state.busReducer.city
  })
  let _routeName = useSelector((state) => state.busReducer.routeName)
  let _goRoute = useSelector((state) => state.busReducer.goRouteEstimatedTime);
  let _backRoute = useSelector((state) => state.busReducer.backRouteEstimatedTime);
  const dispatch = useDispatch();

  useEffect(() => {
    if(_goRoute){
      getRouteAllStop(_city, _routeName).then((_data) => {
        let _goStopData = _data.goRoute
        let _backStopData = _data.backRoute
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
        console.log(_backStopData)
        dispatch(setStopEstimatedTime(_goStopData, _backStopData))
      })
    }
    
  }, [_goRoute])

  function showroute(){
    console.log(_goRoute)
  }

  return (
    <>
      <button onClick={showroute}>確認</button>
      {!_goRoute && !_backRoute
        ? null :
        <div className="flex">

          <div>
            {
              _goRoute.map((item) => (
                <div key={item.stopID}>{item.stopName}</div>
              ))
            }
          </div>
          <div>
            {
              _backRoute.map((item) => (
                <div key={item.stopID}>{item.stopName}</div>
              ))
            }
          </div>
        </div>


      }
    </>
  );


}

export default RouteResultInfo;