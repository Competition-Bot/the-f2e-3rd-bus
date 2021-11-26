import StopListItem from "./StopListItem";

function StopResultInfo() {
  
  return (
    <div className="h-full">
      <div className="lg:px-7 md:px-16 px-3 absolute w-full h-full">
        <div className="px-5">
          <h2 className="text-white mb-2">公車動態</h2>
          <div className="grid gap-6 grid-flow-col justify-start">
            <a className="tab-line hover:tab-line-hover tab-line-active">站牌１</a>
            <a className="tab-line hover:tab-line-hover">站牌２</a>
            <a className="tab-line hover:tab-line-hover">站牌３</a>
            <a className="tab-line hover:tab-line-hover">站牌４</a>
          </div>
        </div>
        <div className="mt-4 pb-28 bg-white h-full shadow-card grid auto-rows-max overflow-scroll">
          <StopListItem />
          <StopListItem />
          <StopListItem />
          <StopListItem />
          <StopListItem />
          <StopListItem />
          <StopListItem />
        </div>
      </div>
      <div className="bg-blue-400 w-full h-48 -mt-1"></div>
    </div>
  )
}

export default StopResultInfo;
