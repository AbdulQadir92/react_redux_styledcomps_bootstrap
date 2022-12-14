import { Routes, Route } from 'react-router-dom'
import { LayoutStyled, PagesContainer } from '../styles/pages/Layout.styled'

import Navbar from "../components/Navbar"
import Footer from "../components/Footer"
import Home from "./Home"
import Posts from "./Posts"

const Layout = ({ theme, setTheme }) => {
    return (
        <LayoutStyled>
            <Navbar theme={theme} setTheme={setTheme} />
            <PagesContainer>
                <Routes>
                    <Route path="/" element={<Home />}></Route>
                    <Route path="/posts" element={<Posts />}></Route>
                </Routes>
            </PagesContainer>
            <Footer />
        </LayoutStyled>
    )
}

export default Layout