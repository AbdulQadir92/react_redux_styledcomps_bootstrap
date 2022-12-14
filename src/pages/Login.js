import { useState, useEffect } from "react"
import { useNavigate, Link } from "react-router-dom"
import { connect } from "react-redux"
import { login } from "../store/actions/authActions"
import { LoginStyled, LoginForm } from "../styles/pages/Login.styled"


const Login = ({ login, user }) => {
    const [formData, setFormData] = useState({});
    const navigate = useNavigate();

    useEffect(() => {
        if (user?.username) {
            setFormData({});
            navigate('/');
        }
        if (user?.error) {
            console.log(user.error.message);
        }
    }, [user, navigate])

    const handleChange = (e) => {
        const name = e.target.id;
        const value = e.target.value;
        setFormData(prevValue => ({ ...prevValue, [name]: value }))
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        login(formData);
    }


    return (
        <LoginStyled>
            <div>
                <h1>Login</h1>
                <LoginForm onSubmit={handleSubmit}>
                    <div>
                        <label htmlFor="username">Username</label>
                        <input type="text" id="username" value={formData.username || ''} onChange={handleChange} required />
                    </div>
                    <div>
                        <label htmlFor="password">Password</label>
                        <input type="password" id="password" value={formData.password || ''} onChange={handleChange} required />
                    </div>
                    <div>
                        <button type="submit">Login</button>
                    </div>
                </LoginForm>
                <div>
                    <Link to="/signup">Signup</Link>
                </div>
            </div>
        </LoginStyled>
    )
}

const mapStateToProps = (state) => {
    return {
        user: state.auth.item
    }
}

export default connect(mapStateToProps, { login })(Login)