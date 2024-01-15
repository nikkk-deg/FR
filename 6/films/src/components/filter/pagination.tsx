import Pagination from "@mui/material/Pagination";
import { useFilterDispatch } from "./context";

export function Pages() {
  const dispatch = useFilterDispatch();

  const handleChangePage = (page: any) => {
    dispatch({
      type: "change_page",
      page: page,
    });
  };

  return (
    <Pagination
      count={500}
      size="small"
      sx={{ position: "absolute", bottom: "15px", marginLeft: "25px" }}
      onChange={(e) => handleChangePage((e.target as HTMLElement).textContent)}
    />
  );
}
