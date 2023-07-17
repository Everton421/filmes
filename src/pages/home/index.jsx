import React from "react";
import api from "../../services/api";
import './home.css';
//import axios  from 'axios'
import { useEffect, useState } from "react";
import  {Link} from 'react-router-dom'

// https://api.themoviedb.org/3/movie/550?api_key=b5b128dcef2492da021f6f8c079540a0
// https://api.themoviedb.org/3/movie/now_playing?api_key=b5b128dcef2492da021f6f8c079540a0
 
const Home =()=>{

    const [filmes , setFilmes] = useState([])
    const [loading, setLoading] = useState(true)

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
                setLoading(false)
            }

            loadfilmes();
        },[]
    )

            if(loading){
                return(
                    <div className="loading">
                        <h2>carregando filmes...</h2>
                    </div>
                )
            }
    return(
            <div className="container">
               <div className="lista-filmes">
                    {filmes.map( (filme)=> { 
                        return(
                            <article>
                                <strong key={filme.id}> {filme.title}</strong>
                                <img src={`https://image.tmdb.org/t/p/original/${filme.poster_path}`} alt={filme.title}/>
                               
                               <Link to={`/filme/${filme.id} `} >Acessar</Link>
                            </article> 
                        )
                        } )}
               </div>
            </div>
        );
    }

    export default Home;

    