import { Box } from "@mui/material";
import { useFilter } from "../filter/context";
import { CLASS_ACTOR, CLASS_ACTORS_TITLE, CastMember, TITLE_ACTORS } from "./consts";


export default function Actors() {
  const filter = useFilter()

  return (
    <Box
      className = {CLASS_ACTOR}
      component={"ul"}
    >
      <Box component={"u"} className={CLASS_ACTORS_TITLE}>
        {TITLE_ACTORS}
      </Box>
      {filter.actorInfo.map((item: CastMember) => {
        return (
          <Box component={"li"} key={item.id}>
            {item.name}
          </Box>
        );
      })}
    </Box>
  );
}
