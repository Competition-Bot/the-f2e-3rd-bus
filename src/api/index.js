import axios from "axios";
import jsSHA from "jssha";

const _axios = (baseURL) => {
  const instance = axios.create({
    baseURL: baseURL,
    timeout: 20000,
    headers: GetAuthorizationHeader(),
  });

  return instance;
};

export { _axios };
export default _axios();

// API 驗證用
function GetAuthorizationHeader() {
  var AppID = "d31e3fdd534a4554bd50e40ba24c3f63";
  var AppKey = "_Ry04DuJZdmiYqLMY-s6dXWf5Fs";

  var GMTString = new Date().toGMTString();
  var ShaObj = new jsSHA("SHA-1", "TEXT");
  ShaObj.setHMACKey(AppKey, "TEXT");
  ShaObj.update("x-date: " + GMTString);
  var HMAC = ShaObj.getHMAC("B64");
  var Authorization =
    'hmac username="' +
    AppID +
    '", algorithm="hmac-sha1", headers="x-date", signature="' +
    HMAC +
    '"';
  return {
    Authorization: Authorization,
    "X-Date": GMTString,
  };
}
