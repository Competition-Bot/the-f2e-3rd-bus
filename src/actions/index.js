import {
    SET_ROUTE_RESULT,
    SET_REALTIME_CITY_All_ROUTES,
    SET_REALTIME_SINGLE_ROUTE,
    SET_CITY
} from '../utils/actionType/BusActionType'


export function SetRealtimeCityAllRoute(city, data) {
    return {
        type: SET_REALTIME_CITY_All_ROUTES,
        city: city,
        data: data
    }
}


export function SetRealtimeSingleRoute(routeName) {
    return {
        type: SET_REALTIME_SINGLE_ROUTE,
        routes: routeName
    }
}

export function setCity(city) {

    return {
        type: SET_CITY,
        payload: {
            city: city
        }

    }
}
export function setRouteResult(routename,goRoute,backRoute) {
    return {
        type: SET_ROUTE_RESULT,
        payload: {
            routeName: routename,
            goRoute:goRoute,
            backRoute:backRoute
        }
    }

}