import { Routes, Route } from 'react-router-dom'

import Navbar from "../components/Navbar"
import Footer from "../components/Footer"
import Home from "./Home"
import Posts from "./Posts"

const Layout = () => {
    return (
        <div>
            <Navbar />
            <div>
                <Routes>
                    <Route path="/" element={<Home />}></Route>
                    <Route path="/posts" element={<Posts />}></Route>
                </Routes>
            </div>
            <Footer />
        </div>
    )
}

export default Layout