import { Button } from './Button';
import { NavBar } from './NavBar';
import { NavBarDesktop } from './NavBarDesktop';

import img1 from '../assets/about-me1.jpg';
import img2 from '../assets/about-me2.jpg';

import { Link } from 'react-router-dom';

export const AboutPage = () => {
    return (
        <>
            <NavBar />
            <NavBarDesktop />

            <div className="about-page__container">


                <div className="about-page__sub-container">
                    <div className="about-page__text-sub-container">
                        <h2 className="about-page__subtitle">Acerca de mí</h2>
                        <p className="about-page__p">Hola! Me llamo Solange Gadischeski, tengo 23 años, soy UX/UI designer y también agente de viajes especializada en Disney y Universal. </p>
                        <p className="about-page__p">Mi amor por Disney está desde que tengo uso de razón, cuando en casa miraba los VHS de películas como 101 Dalmatas, La Sirenita, El Libro de la Selva, entre otras más. Mi pasión por los viajes también siempre estuvo en mí, desde muy chica sueño con emigrar (sueño cumplido desde 2021 que emigré a Italia).</p>
                    </div>
                    <div className="about-page__img-container">
                        <img src={img1} className="about-page-page__img" alt="Solange Gadischeski"></img>
                    </div>
                </div>

                <div className="about-page__sub-container2">
                    <h2 className="about-page__subtitle">¿Qué hago <br /> por tí?</h2>
                    <ul className="about-page__ul">
                        <li className="about-page__li">Realizo la compra de tickets para parques.</li>
                        <li className="about-page__li">Reservo tu estadía de hotel, sea dentro de los complejos o fuera, en cualquier parte del mundo. </li>
                        <li className="about-page__li">Armo tu itinerario de viaje, te comparto todos los tips que tenés que saber antes de viajar. </li>
                        <li className="about-page__li">Nos mantenemos comunicados todo el tiempo, ya sea por un posible problema que surja o sólo para seguir dándote tips. </li>
                        <li className="about-page__li">Y más...</li>
                    </ul>
                </div>

                <div className="about-page__sub-container3">
                    <div className="about-page__img-container">
                        <img src={img2} className="about-page-page__img" alt="Solange Gadischeski"></img>
                    </div>
                    <div>
                        <h2 className="about-page__subtitle">¿Por qué contratar tu viaje con un agente?</h2>
                        <p className="about-page__p">La cantidad de información que hay para viajar a Disney es abrumadora, ¡pero yo estoy para ayudarte!</p>
                        <p className="about-page__p">Soy agente de viajes certificada por Disney y Universal, por lo que puedo organizar tu viaje de manera 100% personalizada, ya que cada viaje es único. </p>
                        <p className="about-page__p">La asesoría es totalmente GRATUITA conmigo, los precios que manejo son los mismos que en las páginas oficiales. </p>
                        <p className="about-page__p">Mi acompañamiento es antes, durante y hasta después del viaje, ya sea en Disney, Universal o en cualquier parte a donde quieras viajar. </p>
                    </div>
                </div>

                <div className="about-page__btn">
                    <Link to='/asesoria'>
                        <Button text={"¡Quiero presupuestar mi viaje!"} width={'70%'} />
                    </Link>
                </div>

            </div>
        </>
    )
}
