import React from 'react'
import axios from 'axios'
import { useState, useEffect } from 'react'



export default function SnowParks(props) {
    const [snowparks, setSnowParks] = useState(null)
    useEffect(() => {
        const getSnowParks = async () => {
            const response = await axios.get('http://localhost:3001/api/snowparks')
                setSnowParks(response.data)
        }
        getSnowParks()
    }, [])
    if (!snowparks){
        return <h2>loading</h2>
    } else { 

    return (
        <div>
        
        <div className="category" >
            {snowparks.map((snowparks) =>(
            <div className="box"  key={snowparks.name}>
            <h3 className="parkname"> {snowparks.name}</h3>
            <h4 className="parkaddress">{snowparks.address}</h4>
            </div>))}
        </div>
        </div>
    )
}
}


