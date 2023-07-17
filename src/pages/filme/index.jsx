import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import api from "../../services/api";
const Filme = ()=>{
    const {id} = useParams(); 
    useEffect(
        ()=>{
            async function loadFilme(){
                await api.get(`/movie/${id}`,{
                    params:{
                        api_key: "b5b128dcef2492da021f6f8c079540a0",
                        language:"pt-br",
                    }
                })
                
                .then( (response)=>{
                        console.log(response)
                 })
                 .catch( ()=>{
                    console.log("filme nao encontrado")
                 })
            }
       loadFilme();
        },[]
        )

    return(
        <div>
            <h2>
                acessando filme {id}
            </h2>
        </div>
    )
}
export default Filme