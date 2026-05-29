import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Show from '../pages/Show'
import Home from '../pages/Home'
import Shows from '../pages/Shows'

const AppRoutes = () => {
    return (
        <Routes>
            <Route path='/' element={<Home/>}></Route>
            <Route path='/show' element={<Show/>}></Route>
            <Route path='/shows' element={<Shows/>}></Route>
        </Routes>
    )
}

export default AppRoutes