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
    // function handlerTest(){
    //     fetch('https://api.themoviedb.org/3/genre/movie/list?language=en', {
    //         method: 'GET',
    //         headers: {
    //             accept: 'application/json',
    //             Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI2Y2I3M2UwZmJlNzkyYjZmZGFlOGQwYTg1YmExNGNmMiIsInN1YiI6IjY1NmI3OWFlODgwNTUxMDBhZWU4Yzk0OSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.fIILgVPsRFrQZweu3ZQ0-aUnacAzRGBiNTOduh3_92I',
    //         },
    //     })
    //     .then(response => response.json())
    //     .then(response => console.log(response))
    // }
    useEffect(()=>{
        getGenres().
        then(genres => setGenres(genres));
        console.log(genres);
    })


const listItems = genres.map(item => <li key={item.id}>{item.name}</li>)

    return <ul>{listItems}</ul>
}






// curl --request GET \

// 2

//      --url 'https://api.themoviedb.org/3/genre/movie/list?language=en' \

// 3

//      --header 'Authorization: Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI2Y2I3M2UwZmJlNzkyYjZmZGFlOGQwYTg1YmExNGNmMiIsInN1YiI6IjY1NmI3OWFlODgwNTUxMDBhZWU4Yzk0OSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.fIILgVPsRFrQZweu3ZQ0-aUnacAzRGBiNTOduh3_92I' \

// 4

//      --header 'accept: application/json'