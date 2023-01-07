import { Route, Routes } from 'react-router-dom'
import React from 'react';
import SkateParks from './SkateParks'
import Header from './Header'

export default function Main () {

return (
    <div>
    <div className="App-header">
    <Header />
    </div>
    <div>
        <Routes>
        <Route path ="/skateparks" element={<SkateParks/>} />
        </Routes>
    </div>
    <div>
        <h3>this is main</h3>
    </div>

</div>

)

}