import { useContext } from "react";
import { Link } from "react-router-dom";
import { SET＿NEWS_CITY } from "../utils/actionType/BusActionType";
import { StoreContext } from "../reducers/newsReducer";

import taipei from "../Json/Taipei.json"
import newtaipei from "../Json/NewTaipei.json"
import news from "../Json/News.json"

export default function SeletctItem(props){
    const { children, to, className, activeClassName } = props
    const { state, dispatch } = useContext(StoreContext);






    return(
        <div>新北市</div>
    );
}