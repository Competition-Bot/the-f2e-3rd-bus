import { ReactComponent as Line_arrow } from "../assets/icon/line-arrow.svg";

function SearchBreadCrumb() {
  return (
    <div className="w-full lg:px-10 md:px-20 px-8 md:py-4 pt-2 pb-1 grid grid-flow-col gap-3 items-center justify-start bg-blue-400">
      <div className="rounded-full w-4 h-4 bg-yellow-400"></div>
      <div className="text-white">搜尋</div>
      <Line_arrow alt="log" />
    </div>
  );
}

export default SearchBreadCrumb;
