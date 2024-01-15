export const SORT_OPTION = "sort-option";
export const SELECT_YEAR = "select-year";
export const RESET_FILTERS = "reset-filters";
export const CHOOSE_GENRE = "choose-genre";
export const CHANGE_PAGE = "change-page";
export const CHANGE_FILM_LIST = "change-film-list";
export const ERROR = "Unknow action";
export const GENRES_TXT = "Жанры";
export const CLASS_GENRES_FILTER = "genres-filter";
export const SIDEBAR_TITLE = "Фильтры";
export const CLASS_FILTER_SIDEBAR = "filter-sidebar";
export const CLASS_FILM_TXT = "film-txt";
export const CLASS_OPTION_SORTING = "option-sorting";
export const CLASS_OPTION_SORT = "option-sort";
export const SORT_OPTION_TITLE = "Сортировать по:";
export const CLASS_PAGINATION = "pagination";
export const MAX_PAGE_COUNT = 500;
export const CLASS_FILTER_RESET = "filter-reset";
export const CLASS_YEAR_SLIDER = "year-slider";
export const CLASS_YEAR_SLIDER_TITLE = "year-slider-text";
export const SLIDER_TITLE = "Год релиза";
export const MIN_YEAR = 1940;

export const FILTER_OPTIONS = [
  { label: "популярности", key: "popular" },
  { label: "убыванию рейтинга", key: "low_rating" },
  { label: "возрастанию рейтинга", key: "high_rating" },
];

export const LAST_YEAR = Number(new Date().getFullYear());

export const INITIAL_STATE = {
  sortOption: FILTER_OPTIONS[0].key,
  min: "2010",
  max: LAST_YEAR,
  genres: [],
  page: "1",
  films: [],
};

export interface SelectProps {
  title: string;
  name: string;
  isYearFilter: boolean;
  value: string;
}

export const MARKS = [
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
