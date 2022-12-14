import { Link } from "react-router-dom"
import { connect } from "react-redux"
import { logout } from "../store/actions/authActions"

const Navbar = ({ user, logout }) => {
    return (
        <nav style={{ marginBottom: '50px' }}>
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
        </nav>
    )
}

const mapStateToProps = (state) => {
    return {
        user: state.auth.item
    }
}

export default connect(mapStateToProps, { logout })(Navbar)