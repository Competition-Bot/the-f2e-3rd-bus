import { useDispatch } from "react-redux";
import { useState} from "react";
import { Link } from "react-router-dom";
import { setCity } from "../../actions/busActions";
import Select from "react-select";
import { getCityAllRoute } from "../../api/routeApi";
import AllCity from "../../Json/City.json";

const BusSearchBar = () => {
  const dispatch = useDispatch();

  const [_city,_setCity] = useState("");
  const [_routeName,_setRouteName] = useState("");
  const [_routesData, _setRoutesData] = useState([]);

  const [step, setstep] = useState(1);

  async function _handleCitySelected(_cityOption) {
    let _options = [];
    if (_cityOption.value === "Unselected") return;
    const _allRoute = await getCityAllRoute(_cityOption.value);

    for (let i = 0; i < _allRoute.length; i++) {
      const _option = {
        value: _allRoute[i].routeName,
        label: _allRoute[i].routeName,
      };

      _options.push(_option);
    }

    dispatch(setCity(_cityOption.value));
    _setRoutesData(_options); //useState儲存下一個select選項
    _setCity(_cityOption.value);
    setstep(2);
  }

  function _handleRouteSelected(_routeOption) {
    _setRouteName(_routeOption.value);
    setstep(0);
  }

  return (
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
          className={`step-circle ${step !== 1 ? "step-circle-active" : ""}`}
        >
          2
        </div>
        <div className="text-blue-400 font-medium">輸入公車號碼</div>
        <Select
          className="col-start-2 md:w-60 w-56"
          options={_routesData}
          onChange={_handleRouteSelected}
        />
      </div>
      <Link
        to={`/bussearch/route/${_city}/${_routeName}`}
        className="btn justify-self-center mt-10"
        onClick={(e) => {
          if (step !== 0) e.preventDefault();
        }}
      >
        查詢
      </Link>
    </div>
  );
};

export default BusSearchBar;
