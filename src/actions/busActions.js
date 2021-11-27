import {
    SET_ROUTE_ESTIMATEDTIME,
    SET_CITY,
    SET_ROUTE_Info,
    SET_STOP_ESTIMATEDTIME,
    SET_BUS_REALTIME,
    SET_STATION_POS,
    SET_ROUTE_DIRECTION
} from '../utils/actionType/BusActionType'


export function setCity(_city) {

    return {
        type: SET_CITY,
        payload: {
            city: _city
        }

    }
}

export function setRouteInfo(_routeData) {
    return {
        type: SET_ROUTE_Info,
        payload: {
            routeUID: _routeData.routeUID,
            routeName: _routeData.routeName,
            goStopName: _routeData.destinationStopName,
            backStopName:_routeData.departureStopName,
            trickPrice: _routeData.trickPrice,
            bufferZone: _routeData.bufferZone,
        }

    }
}

/* 路線名稱/去程站牌預估站到站/返程站牌預估站到站/去程公車預估站到站/返程公車預估站到站*/
export function setRouteEstimatedTime(_goRoute, _backRoute) {

    return {
        type: SET_ROUTE_ESTIMATEDTIME,
        payload: {
            goRouteEstimatedTime: _goRoute,
            backRouteEstimatedTime: _backRoute,
            //goBusEstimatedTime: _goBusEstimated,
            //backBusEstimatedTime: _backBusEstimated,
        }

    }

}

export function setBusRealTime(_goBusRealTime,_backBusRealTime){
    return {
        type: SET_BUS_REALTIME,
        payload: {
            goBusRealTime: _goBusRealTime,
            backBusRealTime: _backBusRealTime,
        }
    }
}

export function setStopEstimatedTime(_goRouteStop, _backRoutegoStop) {
    console.log(_goRouteStop)
    return {
        type: SET_STOP_ESTIMATEDTIME,
        payload: {
            goStopEstimatedTime: _goRouteStop,
            backStopEstimatedTime: _backRoutegoStop
        }
    }

}

export function setStationPos(_stationData){
    return {
        type: SET_STATION_POS,
        payload: {
            stationData: _stationData,
        }
    }
}

export function setRouteDirection(_dir) {
    return {
        type: SET_ROUTE_DIRECTION,
        payload: {
            direction: _dir
        }
    }
}


