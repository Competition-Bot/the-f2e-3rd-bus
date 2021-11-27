import _axios from "./index";

const NewsURL="https://ptx.transportdata.tw/MOTC/v2/Bus/News/City/Taipei?$top=10&$format=JSON";


async function getNews() {
    const { newsdata } = await _axios.get(NewsURL)
    return newsdata;
}
export default getNews;
