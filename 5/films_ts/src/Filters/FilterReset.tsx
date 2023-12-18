import { useFitlerDispatch } from "./Context";


export default function FilterReset(){

    const dispatch = useFitlerDispatch();

    const handleResetFilters = () => {
        dispatch({
            type: 'reset_filters',
        })
    }

    return(
        <button 
        id="resetFilterButton"
        onClick={handleResetFilters}
        style={{width: "50px", height: "50px"}}
        >RESET</button>
    );
}