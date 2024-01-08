import Box from "@mui/material/Box";
import InputLabel from "@mui/material/InputLabel";
import FormControl from "@mui/material/FormControl";
import NativeSelect from "@mui/material/NativeSelect";
import { useFilter, useFilterDispatch } from "./filter-context";
import { filterOptions } from "../../consts";

export default function OptionSort() {
  const filter = useFilter();
  const dispatch = useFilterDispatch();

  const handleChangeOption = (e: any) => {
    dispatch({
      type: "sort_option",
      option: e.target.value,
    });
  };
  return (
    <Box className="option-sorting">
      <FormControl className="option-sort">
        <InputLabel>Сортировать по:</InputLabel>
        <NativeSelect onChange={handleChangeOption} value={filter.sortOption}>
          <option value={filterOptions[0].key}>{filterOptions[0].label}</option>
          <option value={filterOptions[1].key}>{filterOptions[1].label}</option>
          <option value={filterOptions[2].key}>{filterOptions[2].label}</option>
        </NativeSelect>
      </FormControl>
    </Box>
  );
}
