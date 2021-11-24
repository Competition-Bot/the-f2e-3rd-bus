import axios from '.';

const baseUrl = `https://ptx.transportdata.tw/MOTC/v2/Bus/`;

//$filter=RouteName/Zh_tw eq '${routeName}'
//城市 某路線的預估站到站
export const getEstimatedTimeOfRoute = async (city, routeName) => {
  try {
    let _data = {}
    let allStopData = {}
    let _stopData = {}
    let _busData = {}
    let goRoute = []    //去程
    let backRoute = []  //返程
    let goBus = []
    let backBus = []
    let allBusData = [] //所有公車進佔資訊
    const _url = `${baseUrl}/EstimatedTimeOfArrival/City/${city}/${routeName}?$filter=RouteName/Zh_tw eq '${routeName}'&$orderby=StopSequence,Direction&$format=JSON`;
    let _result = await axios.get(_url);
    _result.data.sort(function (a, b) {
      return a.Direction - b.Direction
    })
    
    _result.data.forEach((route) => {
      _stopData = {
        plateNumb: route.PlateNumb,
        stopID: route.StopID,
        stopName: route.StopName.Zh_tw,
        estimateTime: route.EstimateTime,
        nextBusTime: route.NextBusTime
      }
      if (route.PlateNumb) {
        _busData = {
          plateNumb: route.PlateNumb
        }
      }
      if(route.Direction === 0){
        goRoute.push(_stopData)
        goBus.push(_busData)
      }else{
        backRoute.push(_stopData)
        backBus.push(_busData)
      }
    })
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



//路線所有站牌 地圖用
export const getRouteAllStop = async (city, routeName) => {
  
  try {
    let _allData = {}
    let goRoute = []
    let backRoute = []
    let _stopData = {}
    let _url = `${baseUrl}/StopOfRoute/City/${city}/${routeName}?$filter=RouteName/Zh_tw eq '${routeName}'&$format=JSON`;
    let _result = await axios.get(_url);
    if (_result) {
      //所有去程站點
      _result.data[0].Stops.forEach(item => {
        _stopData = {
          stopName: item.StopName.Zh_tw,
          stopPosition: item.StopPosition,
          stationID: item.StationID,
        }
        goRoute.push(_stopData)
      });
      //所有返程站點
      _result.data[1].Stops.forEach(item => {
        _stopData = {
          stopName: item.StopName.Zh_tw,
          stopPosition: item.StopPosition,
          stationID: item.StationID,
        }
        backRoute.push(_stopData)
      });
    }

    console.log(_result.data)
    _allData = {
      goRoute, backRoute
    }
    return _allData;

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
        routeID: item.RouteID,
        zoneDescription: item.FareBufferZoneDescriptionZh,
      }
      _data.push(_routedata)
    })
    return _data;

  } catch (err) {
    alert("查無資料!");
  }
}

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
        stationID: item.StationID,
      }
      _data.push(_stopData)
    })
    return _data;

  } catch (err) {
    alert("查無資料!");
  }
}