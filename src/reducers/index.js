import {
    SET_ROUTES,
    SET_REALTIME_CITY_All_ROUTES,
    SET_REALTIME_SINGLE_ROUTE,
    SET_CITY_All_ROUTES
}from '../utils/constants'

import {combineReducers} from 'redux';

const initialState = {
    city : "Taipei",
    cityRoutes : {}
}

export const reducer = (state = initialState, action ) => {
    switch(action.type){
        case SET_CITY_All_ROUTES :
            state = {
                city : action.payload.city,
                cityRoutes: action.payload.cityRoutes
            }
            return{
                state
            }
        default:
            return state
    }
}

const reducerApp = combineReducers({
    reducer
  })

export default reducerApp;