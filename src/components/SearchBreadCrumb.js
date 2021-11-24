import { ReactComponent as Line_arrow  } from '../assets/icon/line-arrow.svg'

function SearchBreadCrumb() {
  return (
    <div className="lg:px-10 px-20 lg:pt-5 pt-4 pb-3 grid grid-flow-col gap-3 items-center justify-start bg-blue-400">
      <div className="rounded-full w-4 h-4 bg-yellow-400"></div>
      <div className="text-white">搜尋</div>
      <Line_arrow alt="log" stroke="#333333" fill="#333333"/>
    </div>
  );
}

export default SearchBreadCrumb;
