import React from 'react'
import axios from 'axios'
import { useState, useEffect } from 'react'



export default function DogParks(props) {
    const [dogparks, setDogParks] = useState(null)
    useEffect(() => {
        const getDogParks = async () => {
            const response = await axios.get('http://localhost:3001/api/dogparks')
                setDogParks(response.data)
        }
        getDogParks()
    }, [])
    if (!dogparks){
        return <h2>loading</h2>
    } else { 

    return (
        <div>
        
        <div className="category" >
            {dogparks.map((dogparks) =>(
            <div className="box"  key={dogparks.name}>
            <h3 className="parkname"> {dogparks.name}</h3>
            <h4 className="parkaddress">{dogparks.address}</h4>
            </div>))}
        </div>
        </div>
    )
}
}