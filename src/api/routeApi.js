import axios from "../api";

const baseUrl = `https://ptx.transportdata.tw/MOTC/v2/Cycling/Shape/`;
const baseUrl_Param = `?$orderby=RouteName&&$format=JSON`;

export const getRouteResult = async (cityName) => {
  try {
    let result = await axios.get(baseUrl + cityName + baseUrl_Param);
    result.data = result.data
      .map((ele) => ({
        ...ele,
        positions: ele.Geometry.replace("MULTILINESTRING ", "")
          .replace("((", "")
          .replace("))", "")
          .split(",")
          .map((ele) => ele.split(" ").map((item)=>item.replace('(','').replace(')','')).reverse()),
      }))
      .sort((a, b) => {
        return a.RouteName.localeCompare(b.RouteName, "zh-hant");
      });
    return result.data;
  } catch (error) {
    alert("查無資料!!");
  }
};
