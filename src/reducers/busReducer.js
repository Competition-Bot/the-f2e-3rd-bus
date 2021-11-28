import {
    SET_CITY,
    SET_ROUTE_ESTIMATEDTIME,
    SET_STOP_ESTIMATEDTIME,
    SET_ROUTE_Info,
    SET_BUS_REALTIME,
    SET_STATION_POS,
    SET_ROUTE_DIRECTION
} from '../utils/actionType/BusActionType'

const initialState = {
    city: "",
    routeName: "",
    goRouteEstimatedTime: [],
    backRouteEstimatedTime: [],
    goRouteBusEstimatedTime: [],
    backRouteBusEstimatedTime: [],
    direction: true
};

/* 
city: 選擇的城市
routeName: 選擇的路線
goRouteEstimatedTime: 選中路線去程各站牌預估到站時間(Array)
backRouteEstimatedTime: 選中路線返程各站牌預估到站時間(Array)

goStopEstimatedTime: 選中路線去程各站牌預估到站時間+座標(Array)
backStopEstimatedTime: 選中路線返程各站牌預估到站時間+座標(Array)

goRouteBusEstimatedTime: 選中路線去程的公車(座標)(Array)
backRouteBusEstimatedTime: 選中路線返程的公車(座標)(Array)

*/

export const busReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_CITY:
            return {
                ...state,
                city: action.payload.city
            }

        case SET_ROUTE_Info:
            return {
                ...state,
                routeUID: action.payload.routeUID,
                routeName: action.payload.routeName,
                goStopName: action.payload.goStopName,
                backStopName: action.payload.backStopName,
                trickPrice: action.payload.trickPrice,
                bufferZone: action.payload.bufferZone,
            }

        case SET_ROUTE_ESTIMATEDTIME:
            return {
                ...state,
                goRouteEstimatedTime: action.payload.goRouteEstimatedTime,
                backRouteEstimatedTime: action.payload.backRouteEstimatedTime,
                //goRouteBusEstimatedTime: action.payload.goBusEstimatedTime,
                //backRouteBusEstimatedTime: action.payload.backBusEstimatedTime,
            }

        case SET_STOP_ESTIMATEDTIME:
            return {
                ...state,
                goStopEstimatedTime: action.payload.goStopEstimatedTime,
                backStopEstimatedTime: action.payload.backStopEstimatedTime,
            }
        
        case SET_BUS_REALTIME:
            return {
                ...state,
                goBusRealTime: action.payload.goBusRealTime,
                backBusRealTime: action.payload.backBusRealTime,
            }

        case SET_STATION_POS:
            return {
                ...state,
                stationData: action.payload.stationData
            }

        case SET_ROUTE_DIRECTION:
            return {
                ...state,
                direction: action.payload.direction
            }
        default:
            return state
    }
}
