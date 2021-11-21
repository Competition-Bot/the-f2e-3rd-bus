import {
    SET_CITY,
    SET_ROUTE_RESULT
} from '../utils/actionType/BusActionType'

import { combineReducers } from 'redux';

const initialState = {
    city: "Taipei"
}

export const BuseReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_CITY:

            return {
                city: action.payload.city,
            }
        case SET_ROUTE_RESULT:
            return {
                routeName: action.payload.routename,
                goRoute: action.payload.goRoute,
                backRoute: action.payload.backRoute
            }
        default:
            return state
    }
}

const reducerApp = combineReducers({
    BuseReducer
})

export default reducerApp;