import Pagination from "@mui/material/Pagination";
import { CHANGE_PAGE, CLASS_PAGINATION, MAX_PAGE_COUNT } from "./consts";

export function Pages() {

  const handleChangePage = (newPage: number) => {
    // dispatch({
    //   type: CHANGE_PAGE,
    //   page: newPage,
    // });
  };

  return (
    <Pagination
      count={MAX_PAGE_COUNT}
      size="small"
      className={CLASS_PAGINATION}
      onChange={(e, newPage) => handleChangePage(newPage)}
    />
  );
}
