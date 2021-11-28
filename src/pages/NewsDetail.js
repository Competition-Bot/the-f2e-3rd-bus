import News from "../Json/News.json";
import { useParams } from "react-router-dom";

function NewsDetail() {
  let { newsid } = useParams();

  const news = News.find((x) => x.id === newsid);
  return (
    <div className="py-12 px-9 h-screen lg:px-48">
      <div className="text-3xl font-medium">{news.Title}</div>
      <div className=" text-gray-400 my-2 pr-5 pt-4">2021/10/1</div>
      <div className="line pt-4"></div>
      <div className="pt-4"> {news.Description} </div>
    </div>
  );
}

export default NewsDetail;
