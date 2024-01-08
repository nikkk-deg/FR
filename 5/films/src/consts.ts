export const token =
  "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI2Y2I3M2UwZmJlNzkyYjZmZGFlOGQwYTg1YmExNGNmMiIsInN1YiI6IjY1NmI3OWFlODgwNTUxMDBhZWU4Yzk0OSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.fIILgVPsRFrQZweu3ZQ0-aUnacAzRGBiNTOduh3_92I";

export const lastYear = Number(new Date().getFullYear());

export const filterOptions = [
  { label: "популярности", key: "popular" },
  { label: "убыванию рейтинга", key: "low_raiting" },
  { label: "возрастанию рейтинга", key: "high_raiting" },
];

export const initialState = {
  sortOption: filterOptions[0].key,
  min: "2010",
  max: lastYear,
  genres: [],
};

export interface SelectProps {
  title: string;
  name: string;
  isYearFilter: boolean;
  value: string;
}

export interface IGenres {
  handleChooseGenre: Function;
}

export const marks = [
  {
    value: 1950,
    label: "1950",
  },
  {
    value: 1970,
    label: "1970",
  },
  {
    value: 1990,
    label: "1990",
  },
  {
    value: 2010,
    label: "2010",
  },
];
