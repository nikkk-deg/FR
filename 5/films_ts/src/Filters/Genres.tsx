import { useEffect, useState } from "react";
import { useFilter, useFitlerDispatch, useToken } from "./Context";


export function Genres(){
    const [genres, setGenres] = useState([]);
    const BearerToken = useToken();
    const filters = useFilter();
    const dispatch = useFitlerDispatch();

    const handleChooseGenre = (genre: string) =>{
        filters.genres.includes(genre) ? (
            dispatch({
                type: 'delete_genre',
                genre: genre,
            })
        ) : (
            dispatch({
                type: 'choose_genre',
                genre: genre,
            })
        )

    }

    const getGenres = async () => {
        const response = await fetch('https://api.themoviedb.org/3/genre/movie/list?language=ru',{
            method: 'GET',
            headers: {
                accept : 'application/json',
                Authorization: BearerToken,
            },
        });
        const valueRequest = await response.json();
        return valueRequest.genres
    }
    useEffect(()=>{
        getGenres()
        .then(genres => setGenres(genres));
    })
    const listItems = genres.map((item:any) => {
          
        if (filters.genres.includes(item.name)){
            return(
                <li key={item.name}><input onChange={() => handleChooseGenre(item.name)}  defaultChecked={true} type = "checkbox"/>{item.name}</li>
            );
        }else{
            return(
                <li key={item.name}><input onChange={() => handleChooseGenre(item.name)}  defaultChecked={false} type = "checkbox"/>{item.name}</li>
            );
        }
})
    return <ul>{listItems}</ul>

}