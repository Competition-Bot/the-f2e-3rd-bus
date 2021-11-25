function RouteListItem() {
  const statusStyle = [
    "bg-gray-300 text-white",
    "bg-gray-300 text-black",
    "bg-yellow-400 text-white",
    "bg-yellow-300 text-white",
  ];

  const statusText = ["未發車","5分","進站中","3分"]

  return (
    <div className="relative flex justify-between px-5">
      <div className="grid grid-flow-col auto-cols-max gap-x-5 items-center py-4">
        <div className={`${statusStyle[0]} px-4 py-1`}>{statusText[0]}</div>
        <div>
          <div>福德二路</div>
          <div className="border-b border-gray-300 w-1/2 absolute bottom-0"></div>
        </div>
      </div>
      <div className="h-full w-max flex items-center justify-center">
        <div className="border-l-2 border-blue-300 h-full absolute"></div>
        <div className="rounded-full w-4 h-4 bg-blue-300"></div>
      </div>
    </div>
  );
}

export default RouteListItem;
