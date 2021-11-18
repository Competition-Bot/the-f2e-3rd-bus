import axios from '.';

const baseUrl = `https://ptx.transportdata.tw/MOTC/v2/Bus/`;
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

export const getRealTimeRoute = async(city,routeName,search) => {
  try{
    let url = "";
    if(!search){
      url = `${baseUrl}/EstimatedTimeOfArrival/City/${city}/${routeName}?$filter=contains(RouteName/Zh_te,'${search}')&$format=JSON`;
    }else{
      url = `${baseUrl}/EstimatedTimeOfArrival/City/${city}/${routeName}?$format=JSON`;
    }
    let result = await axios.get(url);
    console.log(result)
    return result.data;
    
  }catch(err){
    alert("查無資料!");
  }
}

export const getCityAllRoute = async(city) => {
  let data = []
  try{
    let url = `${baseUrl}/Route/City/${city}?$format=JSON`;
    let result = await axios.get(url);
    let routedata = {}
    result.data.map((item)=>{
      routedata = {
        RouteName:item.RouteName.Zh_tw,
        RouteID:item.RouteID,
        ZoneDescription:item.FareBufferZoneDescriptionZh
      }
      data.push(routedata)
    })
    console.log(data)
    return data;
    
  }catch(err){
    alert("查無資料!");
  }
}