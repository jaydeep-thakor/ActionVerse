import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Show from '../pages/Show'
import Home from '../pages/Home'

const AppRoutes = () => {
    return (
        <Routes>
            <Route path='/show' element={<Show/>}></Route>
            <Route path='/' element={<Home/>}></Route>
        </Routes>
    )
}

export default AppRoutes