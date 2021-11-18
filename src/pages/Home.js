import { setCityAllRoute } from '../actions';
import { useSelector, useDispatch } from "react-redux"; import { getByDisplayValue } from '@testing-library/dom';
import { getCityAllRoute } from '../api/routeApi';
import AllCity from '../Json/City.json';
import Select from 'react-select'



const Home = () => {
    const city = useSelector(state => state.reducer.city)
    const dispatch = useDispatch();
    function btn() {
        //dispatch(setCityAllRoute(city, getCityAllRoute(city)));
        console.log(AllCity)
    }

    return (
        <div>
            <Select options={AllCity} />
        
        </div>

    )
}



export default Home;