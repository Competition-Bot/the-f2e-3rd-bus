import Select from "react-select";
import AllCity from "../Json/City.json";

function HomeStopSearch(){

    return(
        <div className="md:flex">
            <Select className="w-32 mr-7" options={AllCity} defaultValue={{ label:"選擇縣市"}}/>
            <Select className="w-64 mt-7 md:mt-0" defaultValue={{ label:"請輸入站牌關鍵字"}}/>
          </div>
    );
}
export default HomeStopSearch