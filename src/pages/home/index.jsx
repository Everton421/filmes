import React from "react";
import api from "../../services/api";
//import axios  from 'axios'
import { useEffect, useState } from "react";

// https://api.themoviedb.org/3/movie/550?api_key=b5b128dcef2492da021f6f8c079540a0
// https://api.themoviedb.org/3/movie/now_playing?api_key=b5b128dcef2492da021f6f8c079540a0
 
const Home =()=>{
    const [filmes , setFilmes] = useState([])

    useEffect(
        ()=>{
            async function loadfilmes(){
                const response = await api.get("/movie/now_playing", {
                    params:{
                        api_key: "b5b128dcef2492da021f6f8c079540a0",
                        language:"pt-br",
                        page:1,
                    }
                })
                //console.log(response.data.results.slice(0,10));
                setFilmes(response.data.results.slice(0,10))
            }

            loadfilmes();
        },[]
    )
    return(
            <div>
                {filmes.map( (filme)=>{
                    return(
                        <div key={filme.id}>
                            <p>{filme.title}</p>

                        </div>
                    );
                })}
            </div>
        );
    }

    export default Home;