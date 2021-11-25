import { Link } from "react-router-dom";
import Select from "react-select";

function PlanSearchBar() {
  return (
    <div className="h-full">
      <div className="lg:px-7 md:px-16 px-3 absolute w-full h-full">
        <div className="px-3">
          <h2 className="text-white">路線規劃</h2>
        </div>
        <div className="mt-5 bg-white h-full shadow-card md:pt-8 pt-6 grid auto-rows-max items-start justify-center gap-6">
          <div className="grid grid-rows-2 justify-start gap-x-6 gap-y-4 items-center">
            <div className="step-circle bg-blue-400 step-circle-active">1</div>
            <div className="text-blue-400 font-medium">選擇起點</div>
            <Select className="col-start-2 md:w-60 w-56" />
          </div>
          <div className="grid grid-rows-2 justify-start gap-x-6 gap-y-4 items-center">
            <div className="step-circle">2</div>
            <div className="text-blue-400 font-medium">選擇目的地</div>
            <Select className="col-start-2 md:w-60 w-56" />
          </div>
          <div className="grid grid-rows-2 justify-start gap-x-6 gap-y-4 items-center">
            <div className="step-circle step-circle-dash step-circle-dash-active">3</div>
            <div className="text-blue-400 font-medium">選擇時間</div>
            <Select className="col-start-2 w-36" />
            <div className="col-start-2 grid grid-flow-col gap-2 col-span-2">
              <Select className="w-36" />
              <Select className="w-36" />
            </div>
          </div>
          <Link
            to={`/plansearch/result`}
            className="btn hover:btn-hover justify-self-center mt-10"
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
