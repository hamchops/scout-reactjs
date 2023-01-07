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

    return (
        <div>

            <p> Name: {skateparks ? <p>{skateparks.map(skateparks => <div>{skateparks.name}</div>)}</p>: <p>Loading...</p>}</p>

            <div>
                
                    { skateparks.map((skateparks) =>(
                        <div className="box"  key={skateparks.name}>
                        <h3 className="parksline1"> {skateparks.name}</h3>
                        <h4 className="parksline2">{skateparks.address}</h4>
                        </div> 
                        ))}

                </div>
            </div>

        )
    }