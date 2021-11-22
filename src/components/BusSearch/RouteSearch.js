import { useSelector, useDispatch } from "react-redux";
import { useState } from "react";
import { Link } from "react-router-dom";
import { setCity, setRouteResult } from "../../actions/busActions";
import Select from "react-select";
import { getCityAllRoute, getEstimatedTimeOfRoute } from "../../api/routeApi";
import AllCity from "../../Json/City.json";

const BusSearchBar = ({ route }) => {
  console.log(route);
  const [routesData, setRoutesData] = useState([]);
  const [_routeName, _setRouteName] = useState("");
  const dispatch = useDispatch();
  let _citySelected = useSelector((state) => state.busReducer.city);

  function _handleCitySelected(value) {
    let options = [];
    getCityAllRoute(value.value)
      .then((data) => {
        for (let i = 0; i < data.length; i++) {
          const option = {
            value: data[i].RouteName,
            label: data[i].RouteName,
          };

          options.push(option);
        }
        dispatch(setCity(value.value));
        setRoutesData(options);
      })
      .catch((e) => {
        console.log(e);
      });
  }

  function _handleRouteSelected(value) {
    getEstimatedTimeOfRoute(_citySelected, value.value).then((data) => {
      const half = Math.ceil(data.length / 2);
      const goRoute = data.slice(0, half);
      const backRoute = data.slice(-half);
      dispatch(setRouteResult(value.value, goRoute, backRoute));
      _setRouteName(value.value);
    });
  }

  return (
    <div>
      <Select options={AllCity} onChange={_handleCitySelected} />
      <Select options={routesData} onChange={_handleRouteSelected} />
      {_routeName === "" ? (
        <button>你什麼都還沒搜尋</button>
      ) : (
        <Link to={`/bussearch/route/${_routeName}`}>查詢</Link>
      )}
    </div>
  );
};

export default BusSearchBar;
