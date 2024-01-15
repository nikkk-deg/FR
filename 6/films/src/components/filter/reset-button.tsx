import CloseIcon from "@mui/icons-material/Close";
import { useFilterDispatch } from "./context";

export function FilterReset() {
  const dispatch = useFilterDispatch();

  const handleResetFilters = () => {
    dispatch({
      type: "reset_filters",
    });
  };

  return (
    <CloseIcon
      className="filter-reset"
      onClick={handleResetFilters}
    ></CloseIcon>
  );
}
