import { useSelector, useDispatch } from "react-redux";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { setCity, setRouteName, setRouteEstimatedTime, setStopEstimatedTime } from "../../actions/busActions";
import Select from "react-select";
import { getCityAllRoute, getEstimatedTimeOfRoute, getRouteAllStop } from "../../api/routeApi";
import AllCity from "../../Json/City.json";

const BusSearchBar = () => {
  let _city = useSelector((state) =>{ 
    return state.busReducer.city
  });
  const [routesData, setRoutesData] = useState([]);
  const [_routeName, _setRouteName] = useState("");
  const dispatch = useDispatch();

  function _handleCitySelected(_cityOption) {
    let options = [];
    getCityAllRoute(_cityOption.value)
      .then((data) => {

        for (let i = 0; i < data.length; i++) {
          const option = {
            value: data[i].routeName,
            label: data[i].routeName,
          };

          options.push(option);
        }
        dispatch(setCity(_cityOption.value));
        setRoutesData(options);
      })
      .catch((e) => {
        console.log(e);
      });
  }

  function _handleRouteSelected(_routeOption) {
    _setRouteName(_routeOption.value);
    dispatch(setRouteName(_routeOption.value))
    console.log(_city)
  }

  function _getRouteDetail() {
    console.log(_city)
    getEstimatedTimeOfRoute(_city, _routeName).then((_routedata) => {
      dispatch(setRouteEstimatedTime(_routedata.goRoute, _routedata.backRoute, _routedata.goBus, _routedata.backBus));
    });
    // getRouteAllStop(_citySelected,_routeName).then((_stopdata)=>{
    //   dispatch(setStopEstimatedTime(_stopdata.goRoute,_stopdata.backRoute,_stopdata.allBusData))
    // }) 
  }
  function _showcity() {
    console.log(_city)
  }


  return (
    <div>
      <Select options={AllCity} onChange={_handleCitySelected} />
      <Select options={routesData} onChange={_handleRouteSelected} />
      {_routeName === "" ? (
        <button onClick={_showcity}>你什麼都還沒搜尋</button>
      ) : (
        <button onClick={_getRouteDetail}>
          <Link to={`/bussearch/route/${_routeName}`}>查詢</Link>
        </button>

      )}
    </div>
  );
};

export default BusSearchBar;