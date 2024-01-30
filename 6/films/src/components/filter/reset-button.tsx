import CloseIcon from "@mui/icons-material/Close";
import { CLASS_FILTER_RESET, RESET_FILTERS } from "./consts";

export function FilterReset() {

  const handleResetFilters = () => {
    // dispatch({
    //   type: RESET_FILTERS,
    // });
  };

  return (
    <CloseIcon
      className={CLASS_FILTER_RESET}
      onClick={handleResetFilters}
    ></CloseIcon>
  );
}
