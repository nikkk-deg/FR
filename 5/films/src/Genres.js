import { useEffect, useState } from "react";





export default function Genres(){
    const [genres, setGenres] = useState([]);


    const getGenres = async () => {
        const response = await fetch('https://api.themoviedb.org/3/genre/movie/list?language=en',{
            method: 'GET',
            headers: {
                accept : 'application/json',
                Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI2Y2I3M2UwZmJlNzkyYjZmZGFlOGQwYTg1YmExNGNmMiIsInN1YiI6IjY1NmI3OWFlODgwNTUxMDBhZWU4Yzk0OSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.fIILgVPsRFrQZweu3ZQ0-aUnacAzRGBiNTOduh3_92I',
            },
        });
        const valueRequest = await response.json();
        return valueRequest.genres
    }

    useEffect(()=>{
        getGenres()
        .then(genres => setGenres(genres));
    })


const listItems = genres.map(item => <li key={item.id}>{item.name}</li>)

    return <ul>{listItems}</ul>
}