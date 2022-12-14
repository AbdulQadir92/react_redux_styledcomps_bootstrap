import { useState, useEffect } from "react"
import { useNavigate, Link } from "react-router-dom"
import { connect } from "react-redux"
import { signup } from "../store/actions/authActions"
import { SignupStyled, SignupForm } from "../styles/pages/Signup.styled"


const Signup = ({ signup, user }) => {
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
        signup(formData);
    }

    return (
        <SignupStyled>
            <div>
                <h1>Signup</h1>
                <SignupForm onSubmit={handleSubmit}>
                    <div>
                        <label htmlFor="username">Username</label>
                        <input type="text" id="username" value={formData.username || ''} onChange={handleChange} required />
                    </div>
                    <div>
                        <label htmlFor="password1">Password</label>
                        <input type="password" id="password1" value={formData.password1 || ''} onChange={handleChange} required />
                    </div>
                    <div>
                        <label htmlFor="password2">Confirm Password</label>
                        <input type="password" id="password2" value={formData.password2 || ''} onChange={handleChange} required />
                    </div>
                    <div>
                        <button type="submit">Signup</button>
                    </div>
                </SignupForm>
                <div>
                    <Link to="/login">Login</Link>
                </div>
            </div>
        </SignupStyled>
    )
}

const mapStateToProps = (state) => {
    return {
        user: state.auth.item
    }
}

export default connect(mapStateToProps, { signup })(Signup)