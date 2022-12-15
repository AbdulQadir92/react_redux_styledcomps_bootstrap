import { HomeStyled } from '../styles/pages/Home.styled'
import Modal from '../components/Modal'


const Home = () => {
    return (
        <HomeStyled>
            <h1>Home</h1>
            <button type="button" className="btn btn-primary" data-bs-toggle="modal" data-bs-target="#exampleModal">
                Launch demo modal
            </button>

            <Modal />
        </HomeStyled>
    )
}

export default Home