import { token } from "../consts";
import { ACTORS_INFO, FILM_INFO_TXT, GENRES, POPULAR, TOP_RATED } from "./consts";




const getURL = (type: string, id: string | undefined) : string => {
    switch(type){
        case FILM_INFO_TXT:
            {return `https://api.themoviedb.org/3/movie/${id}?language=ru-US`;}
        case ACTORS_INFO: 
            {return `https://api.themoviedb.org/3/movie/${id}/credits?language=ru-US`;}
        case GENRES: {
            return "https://api.themoviedb.org/3/genre/movie/list?language=ru";
        }
        case TOP_RATED:{
            return `https://api.themoviedb.org/3/movie/top_rated?language=ru-US&page=${id}`;
        }
        case POPULAR: {
            return `https://api.themovied.org/3/movie/popular?language=ru-US&page=${id}`;
        }
        default: {
            throw new Error("Unknow action: " + type);
        }
       
    }
}

export const getInfo = async (type: string, id: string | undefined) =>{
    try{const response = await fetch(
       getURL(type, id),
        {
          method: "GET",
          headers: {
            accept: "application/json",
            Authorization: token,
          },
        }
      );
        const valueRequest = await response.json();
        if(valueRequest.results !== undefined){ return valueRequest.results }
        return valueRequest;
      
    }
      catch{
        console.log('fuck fuck fuck');
      }//сделать нормальный try catch
}


// import { token } from "../../consts";

// export const topRatedFilms = async (page: string) => {
//   const response = await fetch(
//     `https://api.themoviedb.org/3/movie/top_rated?language=ru-US&page=${page}`,
//     {
//       method: "GET",
//       headers: {
//         accept: "application/json",
//         Authorization: token,
//       },
//     }
//   );
//   const valueRequest = await response.json();
//   return valueRequest.results;
// };

// export const popularFilms = async (page: string) => {
//   const response = await fetch(
//     `https://api.themoviedb.org/3/movie/popular?language=ru-US&page=${page}`,
//     {
//       method: "GET",
//       headers: {
//         accept: "application/json",
//         Authorization: token,
//       },
//     }
//   );
//   const valueRequest = await response.json();
//   return valueRequest.results;
// };
