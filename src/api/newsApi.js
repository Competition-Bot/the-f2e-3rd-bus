import axios from "axios";
import jsSHA from "jssha";

const NewsURL="https://ptx.transportdata.tw/MOTC/v2/Bus/News/City/Taipei?$top=10&$format=JSON";


async function getNews() {
    const { newsdata } = await axios.get(NewsURL, {
        headers: getAuthorizationHeader()
    })
    return newsdata;
}

export default getNews;





function getAuthorizationHeader() {
    //  填入自己 ID、KEY 開始
        let AppID = 'FFFFFFFF-FFFF-FFFF-FFFF-FFFFFFFFFFFF';
        let AppKey = 'FFFFFFFF-FFFF-FFFF-FFFF-FFFFFFFFFFFF';
    //  填入自己 ID、KEY 結束
        let GMTString = new Date().toGMTString();
        let ShaObj = new jsSHA('SHA-1', 'TEXT');
        ShaObj.setHMACKey(AppKey, 'TEXT');
        ShaObj.update('x-date: ' + GMTString);
        let HMAC = ShaObj.getHMAC('B64');
        let Authorization = 'hmac username=\"' + AppID + '\", algorithm=\"hmac-sha1\", headers=\"x-date\", signature=\"' + HMAC + '\"';
        return { 'Authorization': Authorization, 'X-Date': GMTString }; 
    }