function RouteListItem({routeData}) {
  const statusStyleList = [
    "bg-gray-300 text-white",
    "bg-gray-300 text-black",
    "bg-yellow-300 text-white",
    "bg-yellow-400 text-white",
  ];

  return (
    <div key={routeData.routeUID} className="relative flex justify-between px-5">
      <div className="grid grid-flow-col auto-cols-max gap-x-5 items-center py-4">
        <div className={`${statusStyleList[routeData.status]} px-4 py-1`}>{routeData.estimateTime}</div>
        <div>
          <div>{routeData.stopName}</div>
          <div className="border-b border-gray-300 w-1/2 absolute bottom-0"></div>
        </div>
      </div>
      <div className="h-full w-max flex items-center justify-center">
        <div className="border-l-2 border-blue-300 h-full absolute z-0"></div>
        <div className={`rounded-full w-4 h-4 z-10 ${routeData.status === 3 ? "bg-blue-400 shadow-busCircle" :'bg-blue-300'}`}></div>
      </div>
    </div>
  );
}

export default RouteListItem;
