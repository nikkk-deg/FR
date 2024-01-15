import Box from "@mui/material/Box";
import InputLabel from "@mui/material/InputLabel";
import FormControl from "@mui/material/FormControl";
import NativeSelect from "@mui/material/NativeSelect";
import { useFilter, useFilterDispatch } from "./context";
import {
  CLASS_OPTION_SORT,
  CLASS_OPTION_SORTING,
  SORT_OPTION,
  SORT_OPTION_TITLE,
  FILTER_OPTIONS,
} from "./consts";

export default function OptionSort() {
  const filter = useFilter();
  const dispatch = useFilterDispatch();

  const handleChangeOption = (e: any) => {
    dispatch({
      type: SORT_OPTION,
      option: e.target.value,
    });
  };
  return (
    <Box className={CLASS_OPTION_SORTING}>
      <FormControl className={CLASS_OPTION_SORT}>
        <InputLabel>{SORT_OPTION_TITLE}</InputLabel>
        <NativeSelect onChange={handleChangeOption} value={filter.sortOption}>
          <option value={FILTER_OPTIONS[0].key}>
            {FILTER_OPTIONS[0].label}
          </option>
          <option value={FILTER_OPTIONS[1].key}>
            {FILTER_OPTIONS[1].label}
          </option>
          <option value={FILTER_OPTIONS[2].key}>
            {FILTER_OPTIONS[2].label}
          </option>
        </NativeSelect>
      </FormControl>
    </Box>
  );
}
