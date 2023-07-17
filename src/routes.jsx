import React from "react";
import {Route, Routes, BrowserRouter } from 'react-router-dom'
import Home from "./pages/home";
import Header from "./components/header";
import Sobre from "./pages/sobre";
import Favoritos from "./pages/favoritos";
import Erro from "./pages/erro";
import Filme from "./pages/filme";

    const Rotas = ()=>{
        return(
           
        <BrowserRouter>
         <Header/>
            <Routes>

                <Route path="/" element={<Home/>}/>
                <Route path="/sobre" element={<Sobre/>}/>
                <Route path="/favoritos" element={<Favoritos/>}/>
                <Route path="*" element={<Erro/>} ></Route>
                <Route path="/filme/:id" element={<Filme/>}> </Route>
                
                    
                
            </Routes>
        </BrowserRouter>
        );
    }
    export default Rotas