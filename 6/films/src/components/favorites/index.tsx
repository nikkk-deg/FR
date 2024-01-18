import StarBorderIcon from '@mui/icons-material/StarBorder';
import StarIcon from '@mui/icons-material/Star';
import { useEffect, useState } from 'react';
import { ADD_DELETE_FAVORITES, FAVORITES_FILMS } from '../consts';
import Cookie from 'js-cookie';
import { addDelFavorites, getInfo } from '../getInfo';
import { getFavFilms } from './getFav';
import { useFilmFav, useFilmFavDispatch } from './context';
import { SET_FAV_FILMS } from './consts';



interface Favotite{
    id: number;
}

export function Favotite({id}: Favotite){
    const [isFav, setIsFav] = useState(false);
    const favFilm = useFilmFav();

    const dataAdd = { 
        "media_type": "movie",
         "media_id": id,
        "favorite": true 
        }
        const dataDel = { 
            "media_type": "movie",
             "media_id": id,
            "favorite": false 
        }
      

    // const getFavFilms = () => {
    //         const dispatch = useFilmFavDispatch();
    //         getInfo(FAVORITES_FILMS, Cookie.get('account-id'))
    //         .then(item => {
    //             dispatch({
    //                 type: SET_FAV_FILMS,
    //                 films: item.results,
    //             });
    //         })
    //         .catch(error => console.warn(error));
        
    //     }
    //invalid hook call
        
    const handleAddFav = () => {
        addDelFavorites(ADD_DELETE_FAVORITES, Cookie.get('account-id'), dataAdd)
        setIsFav(!isFav);
        getFavFilms();
        console.log(favFilm);

    }

    const handleDelFav = () => {
        addDelFavorites(ADD_DELETE_FAVORITES, Cookie.get('account-id'), dataDel)
        setIsFav(!isFav);
        getFavFilms();

    }

    if(isFav){
        return(
            <StarIcon sx={{cursor: 'pointer'}} onClick = {handleDelFav}/>
        );
    }
    return(
        <StarBorderIcon sx={{cursor: 'pointer'}} onClick = {handleAddFav}/>
    );
}
   