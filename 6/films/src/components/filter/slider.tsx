import Box from "@mui/material/Box";
import Slider from "@mui/material/Slider";
import {
  MARKS,
  LAST_YEAR,
  CLASS_YEAR_SLIDER,
  CLASS_YEAR_SLIDER_TITLE,
  SELECT_YEAR,
  SLIDER_TITLE,
  MIN_YEAR,
} from "./consts";
import { useFilter, useFilterDispatch } from "./context";

function valuetext(value: number) {
  return `${value}`;
}

export default function RangeSlider() {
  const filter = useFilter();
  const dispatch = useFilterDispatch();

  const handleChange = (_event: Event, newValue: number | number[]) => {
    const min = Array.isArray(newValue) ? newValue[0] : newValue;
    const max = Array.isArray(newValue) ? newValue[1] : newValue;
    dispatch({
      type: SELECT_YEAR,
      min: min,
      max: max,
    });
  };

  return (
    <Box className={CLASS_YEAR_SLIDER}>
      <Box className={CLASS_YEAR_SLIDER_TITLE}>{SLIDER_TITLE}</Box>
      <Slider
        getAriaLabel={() => "Temperature range"}
        min={MIN_YEAR}
        max={LAST_YEAR}
        value={[filter.min, filter.max]}
        onChange={handleChange}
        valueLabelDisplay="on"
        getAriaValueText={valuetext}
        marks={MARKS}
      />
    </Box>
  );
}
