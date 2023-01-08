import React from 'react'
import axios from 'axios'
import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'



export default function Home(props) {
    const [places, setPlaces] = useState(null)
    useEffect(() => {
        const getDataFromPlaces = async () => {
            const response = await axios.get('http://localhost:3001/api/places')
                setPlaces(response.data)
        }
        getDataFromPlaces()
    }, [])
    if (!places){
        return <h2>loading</h2>
    } else {

    return (
        <div>
                
                <h3 className="greeting" style={{flex:1, alignItems: 'center', justifyContent: 'center', backgroundColor: "aqua"}}>Welcome to Scout. Lets find your next adventure!</h3>
        
        <div className="categories" >
        <Link className="dogbtn" to='/dogparks' style={{textDecoration: 'none', color: 'orange', fontSize: '28px', margin: '50px'}}>
                    DOG PARKS
        </Link>
        
        <Link className="snowbtn" to='/snowparks' style={{textDecoration: 'none', color: 'blue', fontSize: '28px', margin: '50px'}}>
                    SNOW PARKS
        </Link>

        <Link className="skatebtn" to='/skateparks' style={{textDecoration: 'none', color: 'red', fontSize: '28px'}}>
                    SKATE PARKS
        </Link>

        </div>
        </div>
    )
}
}
