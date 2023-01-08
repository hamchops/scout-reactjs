import React from 'react'
import { useState, useEffect } from 'react'
import axios from "axios"



export default function SkateParks() {

    const [skateparks, setSkateparks] = useState(null)
    useEffect(() => {
        const getData = async () => {
            const response = await axios.get(`http://localhost:3001/api/skateparks`)
                setSkateparks(response.data)
        }
        getData()
    }, [])
    if (!skateparks){
        return <h2>loading</h2>
    } else {

    return (
        <div>

            <div className="parkcards" >
                {skateparks.map((skateparks) =>(
                <div className="box"  key={skateparks.name}>
                    <h3 className="parkname"> {skateparks.name}</h3>
                    <h4 className="parkaddress">{skateparks.address}</h4>
                </div>))}
        </div>









        </div>
        )
    }
}