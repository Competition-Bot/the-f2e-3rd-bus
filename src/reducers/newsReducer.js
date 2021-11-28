import { createContext, useReducer } from "react";

import { 
    SET＿NEWS_CITY
 } from "../utils/actionType/BusActionType"

 export const StoreContext = createContext();

 const initialState = {

    selectBar: {
       activeItem: "/",
    }
 };

 function reducer(state, action) {
    console.log(action)
    switch (action.type) {
      
       case SET＿NEWS_CITY:
          return {
             ...state,
             selectBar: {
                activeItem: action.payload
             }
          }
       default:
          return state;
    }
 }
 
 export function StoreProvider(props) {
    const [state, dispatch] = useReducer(reducer, initialState);
    const value = { state, dispatch };
 
    return (
       <StoreContext.Provider value={value}>
          {props.children}
       </StoreContext.Provider>
    );
 }