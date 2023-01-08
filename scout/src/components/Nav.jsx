import { Link } from "react-router-dom";
import React from "react";

export default function Nav () {
    return (
        <div className="navbar" >
            <Link id="home" to='/home' style={{margin: '40px'}}>Home</Link>
            <Link id="skateparks" to="/Skateparks" style={{margin: '40px'}}>Skateparks</Link>
            <Link id="dogparks" to="/dogparks" style={{margin: '40px'}}>Dog Parks</Link>
            <Link id="snowparks" to="/snowparks" style={{margin: '40px'}}>Snow Parks</Link>
            <Link id="addform" to="/addparkform" style={{margin: '40px'}}>Add a Park</Link>
        </div>
    


    )
    
}