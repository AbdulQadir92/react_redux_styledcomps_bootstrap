import { Link } from "react-router-dom"
import { NotFoundStyled } from "../styles/pages/NotFound.styled"


const NotFound = () => {
    return (
        <NotFoundStyled>
            <div>Page not found</div>
            <div>
                <Link to="/">Back to Home</Link>
            </div>
        </NotFoundStyled>
    )
}

export default NotFound