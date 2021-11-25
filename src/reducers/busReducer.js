import {
    SET_CITY,
    SET_ROUTE_ESTIMATEDTIME,
    SET_STOP_ESTIMATEDTIME,
    SET_ROUTE_Info,
} from '../utils/actionType/BusActionType'

const initialState = {
    city: "",
    routeName: "",
    goRouteEstimatedTime: [],
    backRouteEstimatedTime: [],
    goRouteBusEstimatedTime: [],
    backRouteBusEstimatedTime: [],
};

/* 
city: 選擇的城市
routeName: 選擇的路線
goRouteEstimatedTime: 選中路線去程的站牌預估到站時間
backRouteEstimatedTime: 選中路線返程的站牌預估到站時間
goRouteBusEstimatedTime: 選中路線去程的公車預估到站時間
backRouteBusEstimatedTime: 選中路線返程的公車預估到站時間

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
                goRouteBusEstimatedTime: action.payload.goBusEstimatedTime,
                backRouteBusEstimatedTime: action.payload.backBusEstimatedTime,
            }
        case SET_STOP_ESTIMATEDTIME:
            return {
                ...state,
                goStopEstimatedTime: action.payload.goStopEstimatedTime,
                backStopEstimatedTime: action.payload.backStopEstimatedTime,
            }

        default:
            return state
    }
}