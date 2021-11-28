import axios from '.';

const baseUrl = `https://ptx.transportdata.tw/MOTC/v2/Bus/`;

//路線所有站牌 地圖用
export const getRouteAllStop = async (_city, _routeName) => {

  try {
    let _data = {}
    let _stopData = {}
    let goRoute = []
    let backRoute = []

    let _url = `${baseUrl}/StopOfRoute/City/${_city}/${_routeName}?$filter=RouteName/Zh_tw eq '${_routeName}'&$format=JSON`;
    const _result = await axios.get(_url);

    if (_result) {
      if (_result.data[0]) {
        //所有去程站點
        _result.data[0].Stops.forEach(item => {
          _stopData = {
            stopName: item.StopName.Zh_tw,
            stopPosition: [item.StopPosition.PositionLat, item.StopPosition.PositionLon],
            stationID: item.StationID,
          }
          goRoute.push(_stopData)
        });
      }

      //所有返程站點
      else if (_result.data[1]) {
        _result.data[1].Stops.forEach(item => {
          _stopData = {
            stopName: item.StopName.Zh_tw,
            stopPosition: [item.StopPosition.PositionLat, item.StopPosition.PositionLon],
            stationID: item.StationID,
          }
          backRoute.push(_stopData)
        });
      }


    }

    //彙整所有回傳資料
    _data = {
      goRoute, backRoute
    }

    return _data;

  } catch (err) {
    alert("查無路線所有站牌資料!");
  }
}
var reg = /[u4E00-u9FA5]/g;
//城市所有路線
export const getCityAllRoute = async (city) => {
  try {

    let _data = []
    let _routedata = {}
    let _url = `${baseUrl}/Route/City/${city}?$format=JSON`;
    let result = await axios.get(_url);

    if (result.data) {
      result.data.forEach((item) => {
        _routedata = {
          routeDes: item.RouteName.Zh_tw.replace(/[\u4e00-\u9fff\u3400-\u4dff\uf900-\ufaff]/g, '').replace(/[()-]/g, ""),
          routeName: item.RouteName.Zh_tw,
        }
        _data.push(_routedata)
      })
    }

    return _data;

  } catch (err) {
    alert("查無城市所有路線資料!");
  }
}

//路線資訊
export const getRouteInfo = async (_city, _routeName) => {
  try {
    let _routeData = {}
    const _url = `${baseUrl}/Route/City/${_city}/${_routeName}?$filter=RouteName/Zh_tw eq '${_routeName}'&$format=JSON`;
    let _result = await axios.get(_url);
    if (_result.data) {
      _result.data.forEach((item) => {
        _routeData = {
          destinationStopName: item.DestinationStopNameZh,
          departureStopName: item.DepartureStopNameZh,
          trickPrice: item.TicketPriceDescriptionZh,
          bufferZone: item.FareBufferZoneDescriptionZh
        }
      })
    }
    return _routeData;
  } catch (e) {
    alert("查無路線詳細資料!");
  }
}

//$filter=RouteName/Zh_tw eq '${routeName}'
//城市 某路線的預估站到站
export const getEstimatedTimeOfRoute = async (_city, _routeName) => {

  try {
    let _data = {}
    let _stopData = {}
    let goRoute = []    //去程
    let backRoute = []  //返程
    const _url = `${baseUrl}/EstimatedTimeOfArrival/City/${_city}/${_routeName}?$filter=RouteName/Zh_tw eq '${_routeName}'&$orderby=StopSequence,Direction&$format=JSON`;
    let _result = await axios.get(_url);

    if (_result.data) {
      // 降冪
      _result.data.sort(function (a, b) {
        return a.Direction - b.Direction
      })

      _result.data.forEach((route) => {
        let _eTime = ""
        let _status = 0
        if (route.EstimateTime) {

          const _time = Math.floor(route.EstimateTime / 60)
          if (_time < 3) {
            _eTime = "進站中"
            _status = 3
          }
          else if (_time >= 3 && _time < 4) {
            _eTime = "3分鐘"
            _status = 2
          } else if (_time >= 4) {
            _eTime = `${_time}分鐘`
            _status = 1
          }

        } else {
          _eTime = "未發車"
        }
        _stopData = {
          plateNumb: route.PlateNumb,
          stopID: route.StopID,
          stopName: route.StopName.Zh_tw,
          estimateTime: _eTime,
          status: _status,
          nextBusTime: route.NextBusTime
        }
        //去程返程
        if (route.Direction === 0) {
          goRoute.push(_stopData)
        } else {
          backRoute.push(_stopData)
        }
      })
      //彙整所有回傳資料
      _data = {
        goRoute,
        backRoute
      }
    }

    return _data;

  } catch (err) {
    alert("查無路線預估站到站資料!");
  }
}

//路線公車動態資料
export const getBusRealTime = async (_city, _routeName) => {
  try {
    let _data = {}
    let _stopData = {}
    let goBusRealTime = []
    let backBusRealTime = []
    let _url = `${baseUrl}/RealTimeByFrequency/City/${_city}/${_routeName}?$filter=RouteName/Zh_tw eq '${_routeName}'&$format=JSON`;
    let _result = await axios.get(_url);

    if (_result) {
      _result.data.forEach((item) => {
        _stopData = {
          PlateNumb: item.PlateNumb,
          BusPosition: [item.BusPosition.PositionLat, item.BusPosition.PositionLon],
        }
        if (item.Direction === 0) goBusRealTime.push(_stopData)
        else backBusRealTime.push(_stopData)
      })
      _data = {
        goBusRealTime,
        backBusRealTime,
      }
    }
    return _data
  } catch (err) {
    alert("查無路線公車動態資料!");
  }
}

//路線票價資訊




