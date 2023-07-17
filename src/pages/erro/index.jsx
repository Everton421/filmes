import React from "react";  
import './index.css'
import { Link } from "react-router-dom";
const Erro = ()=>{
    return(
        <div className="not-found">
            <h1>404 ! </h1>
            <h2>pagina não encontrada!</h2>
            <a><Link to="/">veja todos filmes</Link></a>
        </div>
    );
}

export default Erro