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
    // <div>
    //   <Select options={AllCity} onChange={_handleCitySelected} />
    //   <Select options={routesData} onChange={_handleRouteSelected} />
    //   {_routeName === "" ? (
    //     <button>你什麼都還沒搜尋</button>
    //   ) : (
    //     <Link to={`/bussearch/route/${_routeName}`}>查詢</Link>
    //   )}
    // </div>
    <div className="mt-4 bg-white h-full shadow-card pt-8 grid auto-rows-max items-start justify-center gap-6">
      <div className="grid grid-rows-2 justify-start gap-x-9 gap-y-4 items-center">
        <div className="step-circle bg-blue-400 step-circle-active">
          1
        </div>
        <div className="text-blue-400 font-medium">選擇縣市</div>
        <Select
          className="col-start-2 w-36"
          options={AllCity}
          onChange={_handleCitySelected}
        />
      </div>
      <div className="grid grid-rows-2 justify-start gap-x-9 gap-y-4 items-center">
        <div className="step-circle">2</div>
        <div className="text-blue-400 font-medium">輸入公車號碼</div>
        <Select
          className="col-start-2 w-60"
          options={AllCity}
          onChange={_handleCitySelected}
        />
      </div>
      <a className="btn justify-self-center mt-10">查詢</a>
    </div>
  );
};

export default BusSearchBar;
