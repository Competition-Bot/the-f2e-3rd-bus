import axios from '.';
const baseUrl = `https://ptx.transportdata.tw/MOTC/v2/Bus/`;

// 某線路某一站的預估站到站
export const getEstimatedTimeOfStop = async (_city, _routeName, _stopID, _goDir, _backDir) => {

    try {
        let _stopData = {}

        const _url = `${baseUrl}/EstimatedTimeOfArrival/City/${_city}/${_routeName}?$filter=RouteName/Zh_tw eq '${_routeName}' and StopID eq '${_stopID}'&$format=JSON`;
        let _result = await axios.get(_url);

        let _dir = ""
        let _eTime = ""
        let _status = 0
        if (_result.data[0].EstimateTime) {

            const _time = Math.floor(_result.data[0].EstimateTime / 60)
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

        if (_result.data[0].Direction) _dir = _backDir
        else _dir = _goDir

        _stopData = {
            plateNumb: _result.data[0].PlateNumb,
            estimateTime: _eTime,
            status: _status,
            direction: _dir
        }
        return _stopData;

    } catch (err) {
        alert("查無資料!");
    }
}

//輸入搜尋站牌
export const getSearchStation = async (_city, _stationName) => {
    try {
        let _data = []
        let _stationData = {}
        let _bearing = ""
        let _url = `${baseUrl}/Station/City/${_city}?$filter=StationName/Zh_tw eq '${_stationName}'&$format=JSON`;
        let _result = await axios.get(_url);

        _result.data.forEach((item,index) => {
            switch (item.Bearing) {
                case "E":
                    _bearing = "向東"
                    break;
                case "W":
                    _bearing = "向西"
                    break;
                case "S":
                    _bearing = "向南"
                    break;
                case "N":
                    _bearing = "向北"
                    break;
                case "SE":
                    _bearing = "向東南"
                    break;
                case "NE":
                    _bearing = "向東北"
                    break;
                case "SW":
                    _bearing = "向西南"
                    break;
                case "NW":
                    _bearing = "向西北"
                    break;

                default:
                    break;
            }
            _stationData = {
                bearing: _bearing,
                stationName: item.StationName.Zh_tw,
                stationUID: item.StationUID,
                stationPosition: [
                    item.StationPosition.PositionLat,
                    item.StationPosition.PositionLon
                ],
                index: index,
                code: `站牌${index+1}`
            }
            _data.push(_stationData)
        })
        return _data;

    } catch (err) {
        alert("查無資料!");
    }
}

//站點所有路線
export const getStationAllRoute = async (_city, _stationUID) => {
    let _data = [] // 最後回傳所有資料
    let _stopData = {} // 單個站牌資料
    let Stops = [] // 暫存Stops用

    let _url = `${baseUrl}/Station/City/${_city}?$filter=StationUID eq '${_stationUID}'&$format=JSON`;
    
    let _result = await axios.get(_url);
    _result.data[0].Stops.forEach((item) => {
        _stopData = {
            stopID: item.StopID,
            stopName: item.StopName.Zh_tw,
            routeName: item.RouteName.Zh_tw,
            routeUID: item.routeUID,
        }
        _data.push(_stopData)
    })

    return _data;
}

//取得路線方向
export const getRouteDirection = async (_city, _routeName) => {
    try {
        let _routeData = {}
        const _url = `${baseUrl}/Route/City/${_city}/${_routeName}?$filter=RouteName/Zh_tw eq '${_routeName}'&$format=JSON`;
        let _result = await axios.get(_url);
        _result.data.forEach((item) => {
            _routeData = {
                goDirection: item.DestinationStopNameZh,
                backDirection: item.DepartureStopNameZh,
            }
        })
        return _routeData;
    } catch (e) {
        alert("查無資料!");
    }
}


//城市所有站牌
export const getCityAllStation = async (city) => {
    try {
        let _data = []
        let _stopData = {}
        let _bearing = ""
        let _url = `${baseUrl}/Station/City/${city}?$format=JSON`;
        let _result = await axios.get(_url);

        _result.data.forEach((item) => {
            switch (item.Bearing) {
                case "E":
                    _bearing = "向東"
                    break;
                case "W":
                    _bearing = "向西"
                    break;
                case "S":
                    _bearing = "向南"
                    break;
                case "N":
                    _bearing = "向北"
                    break;
                case "SE":
                    _bearing = "向東南"
                    break;
                case "NE":
                    _bearing = "向東北"
                    break;
                case "SW":
                    _bearing = "向西南"
                    break;
                case "NW":
                    _bearing = "向西北"
                    break;

                default:
                    break;
            }
            _stopData = {
                stationDes: item.StationName.Zh_tw + "  (" + _bearing + ")",
                stationName: item.StationName.Zh_tw,
            }
            _data.push(_stopData)
        })
        return _data;

    } catch (err) {
        alert("查無資料!");
    }
}