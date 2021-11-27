import { ReactComponent as AngleRight } from "../../assets/icon/angle-right.svg";
import { Link } from "react-router-dom";


function StopListItem({data}) {
    console.log(data)
    const statusStyleList = [
        "bg-gray-300 text-white",
        "bg-gray-300 text-black",
        "bg-yellow-400 text-white",
        "bg-yellow-300 text-white",
    ];

    const statusTextList = ["未發車", "5分", "進站中", "3分"]

    return (
        <Link to="/bussearch/route/:city/:routename" className="relative flex justify-between px-5 items-center">
            <div className="grid grid-flow-col auto-cols-max gap-x-5 items-center py-4">
                <div className={`${statusStyleList[0]} px-4 py-1`}>{data.estimateTime}</div>
                <div>
                    <div>{data.routeName} 往{data.direction}</div>
                    <div className="border-b border-gray-300 w-1/2 absolute bottom-0"></div>
                </div>
            </div>
            <AngleRight stroke="#333" />
        </Link>
    );
}

export default StopListItem;
