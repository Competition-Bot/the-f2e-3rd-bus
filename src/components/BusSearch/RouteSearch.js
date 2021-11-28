import { useDispatch } from "react-redux";
import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { setCity } from "../../actions/busActions";
import Select from "react-select";
import { getCityAllRoute } from "../../api/routeApi";
import AllCity from "../../Json/City.json";

const BusSearchBar = () => {
  let location = useLocation();
  const dispatch = useDispatch();

  const [_city, _setCity] = useState("");
  const [_routeName, _setRouteName] = useState("");
  const [_routesData, _setRoutesData] = useState([]);

  const [step, setstep] = useState(1);

  async function _handleCitySelected(_cityOption) {
    _setRoutesData([]);
    let _options = [];
    if (_cityOption.value === "Unselected") return;
    const _allRoute = await getCityAllRoute(_cityOption.value);
    if (_allRoute) {
      for (let i = 0; i < _allRoute.length; i++) {
        const _option = {
          value: _allRoute[i].routeName,
          label: _allRoute[i].routeDes,
        };

        _options.push(_option);
      }

      dispatch(setCity(_cityOption.value));
      _setRoutesData(_options); //useState儲存下一個select選項
      _setCity(_cityOption.value);
      setstep(2);
    }
  }

  function _handleRouteSelected(_routeOption) {
    _setRouteName(_routeOption.value);
    setstep(3);
  }

  return location.pathname === "/" ? (
    <>
      <div className="grid lg:grid-flow-col auto-cols-max gap-4">
        <Select
          className="w-36"
          options={AllCity}
          onChange={_handleCitySelected}
          defaultValue={AllCity[0]}
        />
        <Select
          className="md:w-60 w-56"
          options={_routesData}
          onChange={_handleRouteSelected}
          isDisabled={step >= 2 ? false : true}
          placeholder="請輸入路線號碼"
        />
      </div>
      <Link
        to={`/bussearch/route/${_city}/${_routeName}`}
        className={`btn justify-self-center mt-6 ${
          step !== 3 ? "bg-gray-300" : ""
        }`}
        onClick={(e) => {
          if (step !== 3) e.preventDefault();
        }}
      >
        查詢
      </Link>
    </>
  ) : (
    <div className="mt-4 bg-white h-full shadow-card md:pt-8 pt-6 grid auto-rows-max items-start justify-center gap-6">
      <div className="grid grid-rows-2 justify-start gap-x-9 gap-y-4 items-center">
        <div
          className={`step-circle ${step === 1 ? "step-circle-active" : ""}`}
        >
          1
        </div>
        <div className="text-blue-400 font-medium">選擇縣市</div>
        <Select
          className="col-start-2 w-36"
          options={AllCity}
          onChange={_handleCitySelected}
          defaultValue={AllCity[0]}
        />
      </div>
      <div className="grid grid-rows-2 justify-start gap-x-9 gap-y-4 items-center">
        <div
          className={`step-circle ${step === 2 ? "step-circle-active" : ""}`}
        >
          2
        </div>
        <div className="text-blue-400 font-medium">輸入公車號碼</div>
        <Select
          className="col-start-2 md:w-60 w-56"
          options={_routesData}
          onChange={_handleRouteSelected}
          isDisabled={step >= 2 ? false : true}
          placeholder="請輸入路線號碼"
        />
      </div>
      <Link
        to={`/bussearch/route/${_city}/${_routeName}`}
        className={`btn justify-self-center mt-10 ${
          step !== 3 ? "bg-gray-300" : ""
        }`}
        onClick={(e) => {
          if (step !== 3) e.preventDefault();
        }}
      >
        查詢
      </Link>
    </div>
  );
};

export default BusSearchBar;
