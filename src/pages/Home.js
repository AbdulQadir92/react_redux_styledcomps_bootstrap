import { HomeStyled } from '../styles/pages/Home.styled'
import Carousel from '../components/home/Carousel'

const Home = () => {
    return (
        <HomeStyled>
            <Carousel />
            <h1>Home</h1>
        </HomeStyled>
    )
}

export default Home