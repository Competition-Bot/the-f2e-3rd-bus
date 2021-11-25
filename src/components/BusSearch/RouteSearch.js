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
    const _data = await getRouteInfo(
      _city,
      _routeOption.label,
      _routeOption.value
    );
    const _routeData = {
      routeName: _routeOption.label,
      routeUID: _routeOption.value,
      destinationStopName: _data.destinationStopName,
      departureStopName: _data.departureStopName,
      trickPrice: _data.trickPrice,
      bufferZone: _data.bufferZone,
    };
    dispatch(setRouteInfo(_routeData));
  }

  return (
    <div className="mt-4 bg-white h-full shadow-card md:pt-8 pt-6 grid auto-rows-max items-start justify-center gap-6">
      <div className="grid grid-rows-2 justify-start gap-x-9 gap-y-4 items-center">
        <div className="step-circle bg-blue-400 step-circle-active">1</div>
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
          className="col-start-2 md:w-60 w-56"
          options={routesData}
          onChange={_handleRouteSelected}
        />
      </div>
      <Link
        to={`/bussearch/route/${_routeUID}`}
        className="btn justify-self-center mt-10"
      >
        查詢
      </Link>
    </div>
  );
};

export default BusSearchBar;
