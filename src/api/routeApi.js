import axios from '.';

const baseUrl = `https://ptx.transportdata.tw/MOTC/v2/Bus/`;





//路線所有站牌 地圖用
export const getRouteAllStop = async (_city, _routeName, _routeUID) => {

  try {
    let _data = {}
    let _stopData = {}
    let goRoute = []
    let backRoute = []

    let _url = `${baseUrl}/StopOfRoute/City/${_city}/${_routeName}?$filter=RouteUID eq '${_routeUID}'&$format=JSON`;
    const _result = await axios.get(_url);

    if (_result) {
      //所有去程站點
      _result.data[0].Stops.forEach(item => {
        _stopData = {
          stopName: item.StopName.Zh_tw,
          stopPosition: [item.StopPosition.PositionLat, item.StopPosition.PositionLon],
          stationID: item.StationID,
        }
        goRoute.push(_stopData)
      });
      //所有返程站點
      _result.data[1].Stops.forEach(item => {
        _stopData = {
          stopName: item.StopName.Zh_tw,
          stopPosition: [item.StopPosition.PositionLat, item.StopPosition.PositionLon],
          stationID: item.StationID,
        }
        backRoute.push(_stopData)
      });
    }

    //彙整所有回傳資料
    _data = {
      goRoute, backRoute
    }
    return _data;

  } catch (err) {
    alert("查無資料!");
  }
}

//城市所有路線
export const getCityAllRoute = async (city) => {
  try {
    let _data = []
    let _routedata = {}
    let _url = `${baseUrl}/Route/City/${city}?$format=JSON`;
    let result = await axios.get(_url);

    result.data.forEach((item) => {
      _routedata = {
        routeName: item.RouteName.Zh_tw,
        routeUID: item.RouteUID,
      }
      _data.push(_routedata)
    })
    return _data;

  } catch (err) {
    alert("查無資料!");
  }
}

//路線資訊
export const getRouteInfo = async (_city, _routeName, _routeUID) => {
  try {
    let _routeData = {}
    const _url = `${baseUrl}/Route/City/${_city}/${_routeName}?$filter=RouteUID eq '${_routeUID}'&$format=JSON`;
    let _result = await axios.get(_url);
    _result.data.forEach((item) => {
      _routeData = {
        destinationStopName: item.DestinationStopNameZh,
        departureStopName: item.DepartureStopNameZh,
        trickPrice: item.TicketPriceDescriptionZh,
        bufferZone: item.FareBufferZoneDescriptionZh
      }
    })
    return _routeData;
  } catch (e) {
    alert("查無資料!");
  }
}

//$filter=RouteName/Zh_tw eq '${routeName}'
//城市 某路線的預估站到站
export const getEstimatedTimeOfRoute = async (_city, _routeName, _routeUID) => {

  try {
    let _data = {}
    let _stopData = {}
    let _busData = {}
    let goRoute = []    //去程
    let backRoute = []  //返程
    let goBus = []
    let backBus = []
    const _url = `${baseUrl}/EstimatedTimeOfArrival/City/${_city}/${_routeName}?$filter=RouteUID eq '${_routeUID}'&$orderby=StopSequence,Direction&$format=JSON`;
    let _result = await axios.get(_url);

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
        status:_status,
        nextBusTime: route.NextBusTime
      }
      //去程返程
      if (route.Direction === 0) {
        goRoute.push(_stopData)
        if (route.PlateNumb !== "") {
          _busData = {
            plateNumb: route.PlateNumb
          }
          goBus.push(_busData)
        }

      } else {
        backRoute.push(_stopData)
        if (route.PlateNumb !== "") {
          _busData = {
            plateNumb: route.PlateNumb
          }
          backBus.push(_busData)
        }

      }
    })
    //彙整所有回傳資料
    _data = {
      goRoute,
      backRoute,
      goBus,
      backBus
    }
    return _data;

  } catch (err) {
    alert("查無資料!");
  }
}

//路線票價資訊





//城市所有站牌
export const getCityAllStop = async (city) => {
  try {
    let _data = []
    let _stopData = {}
    let _url = `${baseUrl}/Station/City/${city}?$format=JSON`;
    let _result = await axios.get(_url);

    _result.data.forEach((item) => {
      _stopData = {
        stationName: item.StationName.Zh_tw,
        stationUID: item.StationUID,
      }
      _data.push(_stopData)
    })
    return _data;

  } catch (err) {
    alert("查無資料!");
  }
}