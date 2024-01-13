import { Box } from "@mui/material";
import { useState } from "react";
import { useEffect } from "react";
import { getActorInfo } from "./getInfo";
import { useFilter } from "../filters-sidebar/filter-context";

export default function Actors() {
  const filter = useFilter();
  console.log(filter);

  return (
    <Box
      component={"ul"}
      sx={{
        fontSize: "small",
        listStyleType: "none",
        position: "absolute",
        top: "220px",
        left: "350px",
        minWidth: "200px",
      }}
    >
      <Box component={"u"} sx={{ fontSize: "large" }}>
        Актерский состав:
      </Box>
      {filter.actorInfo.map((item: any) => {
        return (
          <Box component={"li"} key={item.name}>
            {item.name}
          </Box>
        );
      })}
    </Box>
  );
}
