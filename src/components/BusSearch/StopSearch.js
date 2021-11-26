import { Link } from "react-router-dom";

import Select from "react-select";
function StopSearch() {
  return (
    <div className="mt-4 bg-white h-full shadow-card md:pt-8 pt-6 grid auto-rows-max items-start justify-center gap-6">
      <div className="grid grid-rows-2 justify-start gap-x-9 gap-y-4 items-center">
        <div className="step-circle bg-blue-400 step-circle-active">1</div>
        <div className="text-blue-400 font-medium">選擇縣市</div>
        <Select className="col-start-2 w-36" />
      </div>
      <div className="grid grid-rows-2 justify-start gap-x-9 gap-y-4 items-center">
        <div className="step-circle">2</div>
        <div className="text-blue-400 font-medium">輸入站牌關鍵字</div>
        <Select className="col-start-2 md:w-60 w-56" />
      </div>
      <Link to="/bussearch/stop/:stopid" className="btn justify-self-center mt-10">查詢</Link>
    </div>
  );
}

export default StopSearch;
