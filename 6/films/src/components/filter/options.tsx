import Box from "@mui/material/Box";
import InputLabel from "@mui/material/InputLabel";
import FormControl from "@mui/material/FormControl";
import NativeSelect from "@mui/material/NativeSelect";
import {
  CLASS_OPTION_SORT,
  CLASS_OPTION_SORTING,
  SORT_OPTION_TITLE,
  FILTER_OPTIONS,
} from "./consts";
import { memo } from "react";
import { useAppDispatch, useAppSelector } from "../../store/hooks/redux";
import { setOptions } from "../../store/reducers/filter-slice";

export default memo(function OptionSort() {
  const dispatch = useAppDispatch();
  const option = useAppSelector(state => state.filterReducer.sortOption)
  const handleChangeOption = (
    e: React.ChangeEventHandler<HTMLSelectElement> | undefined
  ) => {
    dispatch(setOptions(e.target.value))
  };
  return (
    <Box className={CLASS_OPTION_SORTING}>
      <FormControl className={CLASS_OPTION_SORT}>
        <InputLabel>{SORT_OPTION_TITLE}</InputLabel>
        <NativeSelect onChange={handleChangeOption} value={option}>
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
});
