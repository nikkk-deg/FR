import { Box } from "@mui/material";
import { useFilmInfo } from "./context";
import {
  CLASS_ACTOR,
  CLASS_ACTORS_TITLE,
  CastMember,
  TITLE_ACTORS,
} from "./consts";

export default function Actors() {
  const filmInfo = useFilmInfo();

  return (
    <Box className={CLASS_ACTOR} component={"ul"}>
      <Box component={"u"} className={CLASS_ACTORS_TITLE}>
        {TITLE_ACTORS}
      </Box>
      {filmInfo.actorInfo.map((item: CastMember) => {
        return (
          <Box component={"li"} key={item.id}>
            {item.name}
          </Box>
        );
      })}
    </Box>
  );
}
