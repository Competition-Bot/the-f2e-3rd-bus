import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { useState } from "react";
import Select from "react-select";
import AllCity from "../../Json/City.json";
import { getCityAllStation } from '../../api/stopApi'
import { setCity } from "../../actions/busActions";

function StopSearch() {
  const [_city, _setCity] = useState("");
  const [_stationData, _setStationData] = useState([]);
  const [_stationName, _setStationName] = useState("");
  const [step, setstep] = useState(1);
  const dispatch = useDispatch();
  async function _handleCitySelected(_cityOption) {
    
    let _options = [];
    if (_cityOption.value === "Unselected") return;
    const _allStation = await getCityAllStation(_cityOption.value);
    for (let i = 0; i < _allStation.length; i++) {
      const _option = {
        value: _allStation[i].stationName,
        label: _allStation[i].stationDes,
      };
      _options.push(_option);
    }
    dispatch(setCity(_cityOption.value));
    _setStationData(_options); //useState儲存下一個select選項
    _setCity(_cityOption.value);
    setstep(2);

  }
 
  function _handleStationSelected(_stationOption) {
    _setStationName(_stationOption.value);
    setstep(3);
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
          className={`step-circle ${step === 2 ? "step-circle-active" : ""}`}
        >
          2
        </div>
        <div className="text-blue-400 font-medium">輸入站牌關鍵字</div>
        <Select
          className="col-start-2 md:w-60 w-56"
          options={_stationData}
          onChange={_handleStationSelected}
          isDisabled={step >= 2 ? false : true}
        />
      </div>
      <Link
        to={`/bussearch/stop/${_city}/${_stationName}`}
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
}

export default StopSearch;
