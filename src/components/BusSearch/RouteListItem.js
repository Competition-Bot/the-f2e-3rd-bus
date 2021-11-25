function RouteListItem() {
  return (
    <div className="border border-red-400 grid grid-flow-col items-center">
      <div className="bg-yellow-400 px-4 py-1 text-white">未發車</div>
      <div>福德二路</div>
      <div className="line w-1/2"></div>
      <div>
        <div className="line"></div>
        <div></div>
      </div>
    </div>
  );
}

export default RouteListItem;
