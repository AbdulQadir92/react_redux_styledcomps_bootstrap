import { CarouselStyled } from '../../styles/components/home/Carousel.styled'

import image1 from '../../images/home/img1-min.jpg'
import image2 from '../../images/home/img2-min.png'
import image3 from '../../images/home/img3-min.jpg'


const Carousel = () => {
    return (
        <CarouselStyled id="carouselExampleControls" className="carousel slide" data-bs-ride="carousel">
            <div className="carousel-inner">
                <div className="carousel-item active">
                    <img src={image1} className="d-block w-100" alt="..." />
                </div>
                <div className="carousel-item">
                    <img src={image2} className="d-block w-100" alt="..." />
                </div>
                <div className="carousel-item">
                    <img src={image3} className="d-block w-100" alt="..." />
                </div>
            </div>
            <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="prev">
                <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                <span class="visually-hidden">Previous</span>
            </button>
            <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="next">
                <span class="carousel-control-next-icon" aria-hidden="true"></span>
                <span class="visually-hidden">Next</span>
            </button>
        </CarouselStyled>
    )
}

export default Carousel