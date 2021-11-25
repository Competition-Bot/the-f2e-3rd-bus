import { useSelector, useDispatch } from "react-redux";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { setCity, setRouteInfo } from "../../actions/busActions";
import Select from "react-select";
import { getCityAllRoute, getRouteInfo } from "../../api/routeApi";
import AllCity from "../../Json/City.json";

const BusSearchBar = () => {
  let _routeName = useSelector((state) => state.busReducer.routeName);
  let _routeUID = useSelector((state) => state.busReducer.routeUID);
  let _city = useSelector((state) => state.busReducer.city);
  const [routesData, setRoutesData] = useState([]);
  const dispatch = useDispatch();

  async function _handleCitySelected(_cityOption) {
    console.log('click')
    let options = [];
    const _allRoute = await getCityAllRoute(_cityOption.value);

    for (let i = 0; i < _allRoute.length; i++) {
      const option = {
        value: _allRoute[i].routeUID,
        label: _allRoute[i].routeName,
      };

      options.push(option);
    }
    dispatch(setCity(_cityOption.value));
    setRoutesData(options); //useState儲存下一個select選項
  }

  async function _handleRouteSelected(_routeOption) {
    const _data = await getRouteInfo(_city, _routeOption.label, _routeOption.value)

    const _routeData = {
      routeName: _routeOption.label,
      routeUID: _routeOption.value,
      destinationStopName: _data[0].destinationStopName,
      departureStopName: _data[0].departureStopName,
      trickPrice: _data[0].trickPrice,
      bufferZone: _data[0].bufferZone,
    }
    console.log(_routeData)
    dispatch(setRouteInfo(_routeData))
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
        <button>
          <Link to={`/bussearch/route/${_routeUID}`}>查詢</Link>
        </button>

      )}
    </div>
  );
};

export default BusSearchBar;