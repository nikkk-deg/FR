import Box from "@mui/material/Box";
import Slider from "@mui/material/Slider";
import { marks, lastYear } from "../../consts";
import { useFilter, useFilterDispatch } from "./filter-context";

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
      type: "select_year",
      min: min,
      max: max,
    });
  };

  return (
    <Box className="year-slider">
      <Box id="year-slider-text">Год релиза</Box>
      <Slider
        getAriaLabel={() => "Temperature range"}
        min={1940}
        max={lastYear}
        value={[filter.min, filter.max]}
        onChange={handleChange}
        valueLabelDisplay="on"
        getAriaValueText={valuetext}
        marks={marks}
      />
    </Box>
  );
}
