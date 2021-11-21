import axios from '.';

const baseUrl = `https://ptx.transportdata.tw/MOTC/v2/Bus/`;

//$filter=RouteName/Zh_tw eq '${routeName}'
export const getEstimatedTimeOfRoute = async(city,routeName) => {
  try{
    const url = `${baseUrl}/EstimatedTimeOfArrival/City/${city}/${routeName}?$filter=RouteName/Zh_tw eq '${routeName}'&$orderby=StopSequence,Direction&$format=JSON`;
    let result = await axios.get(url);
    result.data.sort(function(a,b){
      return a.Direction - b.Direction
    })
    console.log(result.data)
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
        ZoneDescription:item.FareBufferZoneDescriptionZh,
      }
      data.push(routedata)
    })
    return data;
    
  }catch(err){
    alert("查無資料!");
  }
}