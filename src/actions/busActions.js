import {
    SET_ROUTE_ESTIMATEDTIME,
    SET_CITY,
    SET_ROUTE_NAME,
    SET_STOP_ESTIMATEDTIME
} from '../utils/actionType/BusActionType'


export function setCity(_city) {

    return {
        type: SET_CITY,
        payload:{
            city: _city
        }
        
    }
}

export function setRouteName(_routeName) {
    return {
        type: SET_ROUTE_NAME,
        payload:{
            routeName: _routeName
        }
        
    }
}

/* 路線名稱/去程站牌預估站到站/返程站牌預估站到站/去程公車預估站到站/返程公車預估站到站*/
export function setRouteEstimatedTime(_goRoute,_backRoute,_goBusEstimated,_backBusEstimated) {
    return {
        type: SET_ROUTE_ESTIMATEDTIME,
        payload:{
            goRouteEstimatedTime:_goRoute,
            backRouteEstimatedTime:_backRoute,
            goBusEstimatedTime:_goBusEstimated,
            backBusEstimatedTime:_backBusEstimated,
        }
        
    }

}

export function setStopEstimatedTime(_goRouteStop,_backRoutegoStop) {
    return {
        type: SET_STOP_ESTIMATEDTIME,
        payload:{
            goStopEstimatedTime:_goRouteStop,
            backStopEstimatedTime:_backRoutegoStop
        } 
    }

}


