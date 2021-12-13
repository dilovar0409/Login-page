import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Cart1 from '../Cart-1/Cart'
import Cart2 from '../Cart-2/Cart'
import Cart3 from '../Cart-3/Cart'
import Cart4 from '../Cart-4/Cart'

const Components = () => {
    return (
        <div>
            <BrowserRouter>
                <Routes>
                    <Route exact path="/" element={<Cart1 />} />
                </Routes>
                <Routes>
                    <Route path="/sign-in" element={<Cart2 />} />
                </Routes>
                <Routes>
                    <Route path="/sign-up" element={<Cart3 />} />
                </Routes>
                <Routes>
                    <Route path="/welcome" element={<Cart4 />} />
                </Routes>
            </BrowserRouter>
        </div>
    )
}

export default Components;
