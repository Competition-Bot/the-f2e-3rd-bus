import Vector_blue from "../assets/img/Vector_blue.png";
import { Link } from "react-router-dom";


function NewsItem({ news }) {

    return (
        <Link to={`/newsdetail/${news.id}`}>
            <ul>
                <span className="flex items-center justify-between py-5">
                    {/* <span className=" text-gray-400 pr-5">2021/11/17</span> */}
                    <span className="truncate">
                        <span className="text-blue-400  w-20 pr-5" >{news.city}</span>
                        <span className="pr-5 hover:text-blue-400">{news.Title}</span>
                    </span>
                    <img alt="" className=" h-3 w-2" src={Vector_blue} />
                </span>
            </ul>
        </Link>

    );
}
export default NewsItem;