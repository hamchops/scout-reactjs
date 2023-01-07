import { Link } from "react-router-dom";
import React from "react";

export default function Nav () {
    return (
        <div className="navbar">
            <Link id="home" to='/'>Home</Link>
            <Link id="skateparks" to="/Skateparks">Skateparks</Link>
            
        </div>
    


    )
    
}