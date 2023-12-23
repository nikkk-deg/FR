import { useFitlerDispatch } from "./Context";
import Button from '@mui/material/Button';


export default function FilterReset(){

    const dispatch = useFitlerDispatch();

    const handleResetFilters = () => {
        dispatch({
            type: 'reset_filters',
        })
    }

    return(
        <Button
        variant="contained"
        onClick={handleResetFilters}
        style={{width: "50px", height: "50px"}}
        >RESET</Button>
    );
}