import { renderRoutes } from "react-router-config";
import BusSearchBar from "../components/BusSearch/BusSearchBar";
export default function BusSearch({route}){
    return(
        <>
        <BusSearchBar route={route} />
       
        </>
    )
}