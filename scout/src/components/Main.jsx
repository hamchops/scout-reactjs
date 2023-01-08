import { Route, Routes } from 'react-router-dom'
import React from 'react';
import SkateParks from './SkateParks'
import Home from './Home'
import Header from './Header'
import DogParks from './DogParks'
import SnowParks from './SnowParks'
import AddSkatePark from './AddSkatePark';

export default function Main () {

return (
    <div>
    <div className="App-header">
    <Header />
    </div>
    <div class="navbar">
        <Routes>
        <Route path ="/skateparks" element={<SkateParks/>} />
        <Route path ="/home" element={<Home/>} />
        <Route path="/dogparks" element={<DogParks/>} />
        <Route path="/snowparks" element={<SnowParks/>} />
        <Route path="/addparkform" element={<AddSkatePark/>} />
        </Routes>
    </div>

    <div>
    </div>

</div>

)

}