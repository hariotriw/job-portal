import React from 'react'
import { Routes, Route } from 'react-router-dom'

// General
import Login from '../pages/Login'
import Register from '../pages/Register'

import Katalog from '../pages/Katalog'
import ListJob from '../pages/ListJob'
import DetailJob from '../pages/DetailJob'

const MainContent = () => {

    return (
        <>
            <div className='container-fluid'>
            <Routes>
                <Route path="/login" element={<Login></Login>}></Route>
                <Route path="/register" element={<Register></Register>}></Route>
                <Route path="/" element={<ListJob></ListJob>}></Route>
                <Route path="/detail/:id" element={<DetailJob></DetailJob>}></Route>
            </Routes>
            </div>
        </>
    );
}

export default MainContent