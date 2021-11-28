import { faMapMarkerAlt } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom";
import Select, { components } from "react-select";
import { useState } from "react";

const options = {
  start: [
    { value: "Unselected", label: "輸入起點", icon: false },
    { value: "桃園火車站", label: "桃園火車站", icon: true },
  ],
  end: [
    { value: "Unselected", label: "輸入目的地", icon: false },
    { value: "桃園藝文廣場", label: "桃園藝文廣場", icon: true },
  ],
  time: [
    { value: "Now", label: "立即出發", isDisabled: true },
    { value: "StartTime", label: "出發時間" },
    { value: "ArrivalTime", label: "抵達時間", isDisabled: true },
  ],
  timeDate: [{ value: "12/31(五)", label: "12/31(五)" }],
  timeClock: [{ value: "14:00", label: "14:00" }],
};
const { Option } = components;
const IconOption = (props) => (
  <Option {...props}>
    {props.data.icon ? (
      <FontAwesomeIcon icon={faMapMarkerAlt} size="lg" className="mr-4" />
    ) : null}
    {props.data.label}
  </Option>
);

function PlanSearchBar() {
  const [step, setstep] = useState(1);
  const [inputStart, setinputStart] = useState(options.start[0].value);
  const [inputEnd, setinputEnd] = useState(options.end[0].value);

  function _handleStartSelected(_startOption) {
    if (_startOption.value !== "Unselected") {
      if (inputEnd === "Unselected") setstep(2);
      else setstep(3);
    } else setstep(1);
    setinputStart(_startOption.value);
  }

  function _handleEndSelected(_endOption) {
    if (_endOption.value !== "Unselected") {
      if (step === 2) setstep(3);
    } else {
      if (step === 3) setstep(2);
    }
    setinputEnd(_endOption.value);
  }

  return (
    <div className="h-full">
      <div className="lg:px-7 md:px-16 px-3 absolute w-full h-full">
        <div className="px-3">
          <h2 className="text-white">路線規劃</h2>
        </div>
        <div className="mt-5 bg-white h-full shadow-card md:pt-8 pt-6 grid auto-rows-max items-start justify-center gap-6">
          <div className="grid grid-rows-2 justify-start gap-x-6 gap-y-4 items-center">
            <div
              className={`step-circle ${
                step === 1 ? "step-circle-active" : ""
              }`}
            >
              1
            </div>
            <div className="text-blue-400 font-medium">選擇起點</div>
            <Select
              className="col-start-2 md:w-60 w-56"
              defaultValue={options.start[0]}
              options={options.start}
              components={{ Option: IconOption }}
              onChange={_handleStartSelected}
            />
          </div>
          <div className="grid grid-rows-2 justify-start gap-x-6 gap-y-4 items-center">
            <div
              className={`step-circle ${
                step === 2 ? "step-circle-active" : ""
              }`}
            >
              2
            </div>
            <div className="text-blue-400 font-medium">選擇目的地</div>
            <Select
              className="col-start-2 md:w-60 w-56"
              defaultValue={options.end[0]}
              options={options.end}
              components={{ Option: IconOption }}
              onChange={_handleEndSelected}
            />
          </div>
          <div className="grid grid-rows-2 justify-start gap-x-6 gap-y-4 items-center">
            <div
              className={`step-circle step-circle-dash ${
                step === 3 ? "step-circle-dash-active" : ""
              }`}
            >
              3
            </div>
            <div className="text-blue-400 font-medium">選擇時間</div>
            <Select
              className="col-start-2 w-36"
              defaultValue={options.time[1]}
              options={options.time}
              components={{ Option: IconOption }}
            />
            <div className="col-start-2 grid-flow-col gap-2 col-span-2 grid">
              <Select
                className="w-36"
                defaultValue={options.timeDate[0]}
                options={options.timeDate[0]}
                isDisabled={true}
              />
              <Select
                className="w-36"
                defaultValue={options.timeClock[0]}
                options={options.timeClock[0]}
                isDisabled={true}
              />
            </div>
          </div>
          <Link
            to={`/plansearch/result`}
            className={`btn justify-self-center mt-10 ${
              step < 3 ? "bg-gray-300" : ""
            }`}
            onClick={(e) => {
              if (step !== 3) e.preventDefault();
            }}
          >
            查詢
          </Link>
        </div>
      </div>
      <div className="bg-blue-400 w-full h-48 -mt-1"></div>
    </div>
  );
}

export default PlanSearchBar;
