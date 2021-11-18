import {
    SET_ROUTES,
    SET_REALTIME_CITY_All_ROUTES,
    SET_REALTIME_SINGLE_ROUTE,
    SET_CITY_All_ROUTES
} from '../utils/constants'


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

export function setCityAllRoute(city, data) {
    console.log(data)
    return {
        type: SET_CITY_All_ROUTES,
        payload: {
            city: city,
            cityRoutes: data
        }

    }
}