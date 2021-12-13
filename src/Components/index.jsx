import React from 'react'
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom'
import Cart1 from '../Cart-1/Cart'
import { Click } from '../Cart-1/style'
import Cart2 from '../Cart-2/Cart'
import Cart3 from '../Cart-3/Cart'
import Cart4 from '../Cart-4/Cart'

const Components = () => {
    return (
        <div>
            <BrowserRouter>
                <Routes>
                    <Route exact path="/" element={<Cart1 />} />
                    <Route path="/sign-in" element={<Cart2 />} />
                    <Route path="/sign-up" element={<Cart3 />} />
                    <Route path="/welcome" element={<Cart4 />} />
                    <Route path="*" element={<Link to="/"><Click>onClick</Click></Link>} />
                </Routes>

            </BrowserRouter>
        </div>
    )
}

export default Components;
