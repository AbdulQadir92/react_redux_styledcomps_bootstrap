import { Link } from "react-router-dom"
import { connect } from "react-redux"
import { logout } from "../store/actions/authActions"
import { NavbarStyled, IconContainer } from "../styles/components/Navbar.styled"
import { FaMoon, FaSun } from 'react-icons/fa'


const Navbar = ({ user, logout, theme, setTheme }) => {
    const toggleTheme = (newTheme) => {
        localStorage.setItem('theme', newTheme);
        setTheme(newTheme);
    }

    return (
        <NavbarStyled>
            <ul>
                <li>
                    <Link to="/">Home</Link>
                </li>
                <li>
                    <Link to="/posts">Posts</Link>
                </li>
                {user ? (
                    <li onClick={logout}>
                        <div style={{ cursor: 'pointer' }}>Logout</div>
                    </li>
                ) : (
                    <>
                        <li>
                            <Link to="/login">Login</Link>
                        </li>
                        <li>
                            <Link to="/signup">Signup</Link>
                        </li>
                    </>
                )}
            </ul>
            <IconContainer>
                {theme === 'light' ? (
                    <FaMoon onClick={() => toggleTheme('dark')} />
                ) : (
                    <FaSun onClick={() => toggleTheme('light')} />
                )}

            </IconContainer>
        </NavbarStyled>
    )
}

const mapStateToProps = (state) => {
    return {
        user: state.auth.item
    }
}

export default connect(mapStateToProps, { logout })(Navbar)