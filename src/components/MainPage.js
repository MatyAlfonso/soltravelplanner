import { Link } from "react-router-dom";

import { Button } from './Button';
import { NavBar } from './NavBar';
import { NavBarDesktop } from './NavBarDesktop';

import Carousel from 'react-bootstrap/Carousel';

import img1 from '../assets/img1.jpg';
import img2 from '../assets/img2.jpg';
import img3 from '../assets/img3.jpg';
import img4 from '../assets/img4.jpg';
import img5 from '../assets/img5.jpg';

import 'animate.css';



export const MainPage = () => {
    return (
        <div className="main-page__page">
            <NavBar />
            <NavBarDesktop />

            <div className="main-page__container">
                <div className="main-page__center-title-btn">
                    <h1 className="main-page__title animate__animated animate__jackInTheBox">DESCUBRÍ LA <br /> MAGIA <br /> DE UN MONTÓN <br /> DE DESTINOS.</h1>
                    <Link to="destinos" className="main-page__btn"> <Button text={"Ver más"} width={"50%"} /> </Link>
                </div>
                <Carousel className="main-page__slider">
                    <Carousel.Item>
                        <img
                            className="main-page__img"
                            src={img1}
                            alt="First slide"
                        />
                    </Carousel.Item>
                    <Carousel.Item>
                        <img
                            className="main-page__img"
                            src={img2}
                            alt="Second slide"
                        />
                    </Carousel.Item>
                    <Carousel.Item>
                        <img
                            className="main-page__img"
                            src={img3}
                            alt="Third slide"
                        />
                    </Carousel.Item>
                    <Carousel.Item>
                        <img
                            className="main-page__img"
                            src={img4}
                            alt="Third slide"
                        />
                    </Carousel.Item>
                    <Carousel.Item>
                        <img
                            className="main-page__img"
                            src={img5}
                            alt="Third slide"
                        />
                    </Carousel.Item>
                </Carousel>
            </div>
        </div>
    )
}
