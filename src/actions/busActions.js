import {
    SET_ROUTE_RESULT,
    SET_CITY
} from '../utils/actionType/BusActionType'


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