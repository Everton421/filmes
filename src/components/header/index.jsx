import React from "react";
import  {Link} from 'react-router-dom'
import './styles/index.css'
    const Header =()=>{
        return(
            <div className="header">
              <Link to="/" >  <h2 className="logo">Header</h2></Link>
         
            <Link to="/sobre">  <button> sobre</button></Link>
            <Link to="/favoritos">  <button> favoritos</button></Link>
                
            </div>
        );
    }

    export default Header;