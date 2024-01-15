import Pagination from "@mui/material/Pagination";
import { useFilterDispatch } from "./context";
import { CHANGE_PAGE, CLASS_PAGINATION, MAX_PAGE_COUNT } from "./consts";

export function Pages() {
  const dispatch = useFilterDispatch();

  const handleChangePage = (page: any) => {
    dispatch({
      type: CHANGE_PAGE,
      page: page,
    });
  };

  return (
    <Pagination
      count={MAX_PAGE_COUNT}
      size="small"
      className={CLASS_PAGINATION}
      onChange={(e) => handleChangePage((e.target as HTMLElement).textContent)}
    />
  );
}
