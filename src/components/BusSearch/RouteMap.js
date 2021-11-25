import { useEffect } from "react";
import { useSelector } from "react-redux";
function RouteMap(){
    let _city = useSelector((state) => state.busReducer.city);
    let _goStop = useSelector((state) => state.busReducer.goStopEstimatedTime);
    let _backStop = useSelector((state) => state.busReducer.backStopEstimatedTime);
    return(

        
        <div>Route地圖</div>
    )
}

export default RouteMap;