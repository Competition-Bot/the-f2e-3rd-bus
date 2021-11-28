import RouteListItem from "./RouteListItem";
import { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useParams } from "react-router-dom"
import {
  setRouteInfo,
  setBusRealTime,
  setRouteEstimatedTime,
  setStopEstimatedTime,
  setRouteDirection,
} from "../../actions/busActions";
import {
  getBusRealTime,
  getEstimatedTimeOfRoute,
  getRouteAllStop,
  getRouteInfo,
} from "../../api/routeApi";

function RouteResultInfo() {
  const dispatch = useDispatch();
  const [_go, _setGo] = useState(true)
  const [_getEstimateData, _setEstimateData] = useState(false)
  const { city, routename } = useParams();

  let _goRoute = useSelector((state) => {
    return state.busReducer.goRouteEstimatedTime
  }
  );
  let _backRoute = useSelector((state) => state.busReducer.backRouteEstimatedTime);
  let _goStopName = useSelector((state) => state.busReducer.goStopName);
  let _backStopName = useSelector((state) => state.busReducer.backStopName);
  let times = 0
  const [_time, _setTime] = useState(0);
  const [_update, _setUpdate] = useState(true);

  useEffect(() => {
    let _clockTime = setInterval(() => {

      _setTime(_time + 1)
      console.log(_time)
      if (_time % 60 === 0) {
        _setUpdate(!_update)
      }
    }, 1000)

    //Clean up can be done like this
    return () => {
      clearInterval(_clockTime);
    }
  }, [_time])

  useEffect(() => {
    console.log('更新')
    //再呼叫API
  }, [_update])

  useEffect(() => {
    _handleRouteInfo();
    _handleEstimatedTimeOfRoute();
  }, []);

  useEffect(() => {
    _handleStopAPI();
  }, [_goRoute])

  function _changeRoute() {
    if (_goStopName && _backStopName) {
      _setGo(!_go)
      dispatch(setRouteDirection(!_go));
    }
  }

  //呼叫選取的路線詳細資料
  async function _handleRouteInfo() {
    const _data = await getRouteInfo(
      city,
      routename,
    );
    const _routeData = {
      routeName: routename,
      destinationStopName: _data.destinationStopName,
      departureStopName: _data.departureStopName,
      trickPrice: _data.trickPrice,
      bufferZone: _data.bufferZone,
    };
    dispatch(setRouteInfo(_routeData));
  }

  //呼叫路線預估站到站資料
  async function _handleEstimatedTimeOfRoute() {
    const _estimatedRouteData = await getEstimatedTimeOfRoute(
      city,
      routename,
    );
    const _realTimeData = await getBusRealTime(
      city,
      routename,
    );
    if (_estimatedRouteData) {
      dispatch(
        setRouteEstimatedTime(
          _estimatedRouteData.goRoute,
          _estimatedRouteData.backRoute
        )
      );
      _setEstimateData(true);
    }
    if (_realTimeData) {
      dispatch(
        setBusRealTime(
          _realTimeData.goBusRealTime,
          _realTimeData.backBusRealTime,
        )
      );
    }

  }

  async function _handleStopAPI() {
    const _stopOfRoute = await getRouteAllStop(
      city,
      routename
    );
    if (_stopOfRoute && _goRoute) {
      let _goStopData = _stopOfRoute.goRoute;
      let _backStopData = _stopOfRoute.backRoute;
      _goRoute.forEach((item, index) => {
        _goStopData[index] = {
          ..._goStopData[index],
          plateNumb: item.plateNumb,
          stopID: item.stopID,
          estimateTime: item.estimateTime,
          nextBusTime: item.nextBusTime,
          status: item.status,
          index: index,
          popup: false
        };
      }
      );


      _backRoute.forEach((item, index) => {
        _backStopData[index] = {
          ..._backStopData[index],
          plateNumb: item.plateNumb,
          stopID: item.stopID,
          estimateTime: item.estimateTime,
          nextBusTime: item.nextBusTime,
          status: item.status,
          index: index,
          popup: false
        };
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
          <h2 className="text-white mb-2">
            {
              routename.replace(/[\u4e00-\u9fff\u3400-\u4dff\uf900-\ufaff]/g, '').replace(/[()-]/g, "")
            }
          </h2>
          <div className="grid gap-6 grid-flow-col justify-start relative">
            {_goStopName ?
              <a onClick={_changeRoute} className={`tab-line hover:tab-line-hover ${_go ? "tab-line-active" : ''}`}>往{_goStopName}</a>
              : null}

            {_backStopName ?
              <a onClick={_changeRoute} className={`tab-line hover:tab-line-hover ${!_go ? "tab-line-active" : ''}`}>往{_backStopName}</a>
              : null}

            {/* <div className="tab-line text-white absolute right-0">
            {_goStopName} - {_backStopName}
          </div> */}
          </div >
        </div >
        <div className="mt-4 pb-28 bg-white h-full shadow-card grid auto-rows-max overflow-scroll">
          {
            _go ?
              _goRoute.map((item) => (
                <RouteListItem key={item.stopName} routeData={item} />
              ))
              : _backRoute.map((item) => (
                <RouteListItem key={item.stopName} routeData={item} />
              ))
          }
        </div>
      </div >
      <div className="bg-blue-400 w-full h-48 -mt-1"></div>
    </div >
  );
}

export default RouteResultInfo;
