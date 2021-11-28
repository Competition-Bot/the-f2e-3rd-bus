import StopListItem from "./StopListItem";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useDispatch } from "react-redux";
import {
  getEstimatedTimeOfStop,
  getSearchStation,
  getRouteDirection,
  getStationAllRoute,
} from "../../api/stopApi";
import { setStationPos } from "../../actions/busActions";
import { ReactComponent as Loading } from "../../assets/img/loading.svg";

function StopResultInfo() {
  const { city, stopname } = useParams();
  const [_code, _setCode] = useState(0);
  const [_sameStationInfo, _setSameStationInfo] = useState();
  const [_stationStopsData, _setStationStopsData] = useState();
  const [_listData, _setListData] = useState();
  const dispatch = useDispatch();
  useEffect(() => {
    _handleSearch();
  }, [stopname]);

  useEffect(() => {
    if (_stationStopsData) {
      _setListData(_stationStopsData[_code].stops);
    }
  }, [_code]);

  async function _handleSearch() {
    const _sameStation = await getSearchStation(city, stopname);
    _setSameStationInfo(_sameStation);
    dispatch(setStationPos(_sameStation));
    // [{
    //   bearing: 方位,
    //   stationName: 站點名,
    //   stationUID: 站點UID,
    // }]
  }

  useEffect(() => {
    _handleStationAllRoute();
  }, [_sameStationInfo]);

  async function _handleStationAllRoute() {
    let _data = [];
    let _pushData = {};
    if (_sameStationInfo) {
      for (let i in _sameStationInfo) {
        const _stationAllRoute = await getStationAllRoute(
          city,
          _sameStationInfo[i].stationUID
        );

        if (_stationAllRoute) {
          let _stopsData = []; //所有站牌資料
          let _stop = {};
          // _stop = {stopID , stopName, routeName, routeUID}

          for (let i in _stationAllRoute) {
            const _routeDir = await getRouteDirection(
              city,
              _stationAllRoute[i].routeName
            );
            // _routeDir = {_goDirection,_backDirection}
            const _stopEstimated = await getEstimatedTimeOfStop(
              //呼叫 單個站的預估站到站時間
              city,
              _stationAllRoute[i].routeName,
              _stationAllRoute[i].stopID,
              _routeDir.goDirection,
              _routeDir.backDirection
            );
            // _stopEstimated = {_goDirection,_backDirection}
            _stop = {
              ..._stationAllRoute[i],
              ..._stopEstimated,
            };
            _stopsData.push(_stop);
          }
          _pushData = {
            stationUID: _sameStationInfo[i].stationUID,
            stops: _stopsData,
          };
          _data.push(_pushData);
        }
      }
      _setStationStopsData(_data);
      _setListData(_data[0].stops);
    }
  }

  return (
    <div className="h-full">
      <div className="lg:px-7 md:px-16 px-3 absolute w-full h-full">
        <div className="px-5">
          <h2 className="text-white mb-2">公車動態</h2>
          <div className="grid gap-6 grid-flow-col justify-start">
            {_sameStationInfo
              ? _sameStationInfo.map((station) => (
                  <a
                    href
                    onClick={() => _setCode(station.index)}
                    key={station.stationUID}
                    className={`tab-line hover:tab-line-hover ${
                      _code === station.index ? "tab-line-active" : ""
                    }`}
                  >
                    {station.code}
                  </a>
                ))
              : null}
          </div>
        </div>
        <div className="mt-4 pb-28 bg-white h-full shadow-card grid auto-rows-max overflow-scroll">
          {_listData ? (
            _listData.map((item, i) => <StopListItem key={i} data={item} />)
          ) : (
            <div className="mt-10 mx-auto">
              <Loading />
            </div>
          )}
        </div>
      </div>
      <div className="bg-blue-400 w-full h-48 -mt-1"></div>
    </div>
  );
}

export default StopResultInfo;
