import { Link } from 'react-router-dom';

import { Button } from './Button';
import { NavBar } from './NavBar';
import { NavBarDesktop } from './NavBarDesktop';

import img1 from '../assets/img3.jpg';
import img2 from '../assets/img1.jpg';
import img3 from '../assets/seaworld.jpg';
import img4 from '../assets/universal-hollywood.jpg';
import img5 from '../assets/universal.jpg';

export const DestinosPage = () => {
    return (
        <div className="destinos-page__page">
            <NavBar />
            <NavBarDesktop />

            <div className="destinos-page__container">

                <div className="destinos-page__sub-container">
                    <div className="destinos-page__grid">
                        <h1 className="destinos-page__title">
                            Mirá algunos de los destinos que podemos planear juntos
                        </h1>
                        {/*<Vector1 className="destinos-page__vector1" />*/}
                    </div>

                    <div className="destinos-page__grid">
                        <img src={img1} alt="Disney World, Orlando" className="destinos-page__img" />
                        <p className="destinos-page__img-text">Disney World, Orlando</p>
                    </div>
                </div>
                <div className="destinos-page__sub-container">
                    <div className="destinos-page__grid">
                        <img src={img2} alt="Disneyland, California" className="destinos-page__img" />
                        <p className="destinos-page__img-text">Disneyland, California</p>
                    </div>

                    <div className="destinos-page__grid">
                        <img src={img5} alt="Universal Studios Orlando" className="destinos-page__img" />
                        <p className="destinos-page__img-text">Universal Studios Orlando</p>
                    </div>
                </div>
                <div className="destinos-page__sub-container">
                    <div className="destinos-page__grid">
                        <img src={img4} alt="Universal Studios Hollywood" className="destinos-page__img" />
                        <p className="destinos-page__img-text">Universal Studios Hollywood</p>
                    </div>

                    <div className="destinos-page__grid">
                        <img src={img3} alt="SeaWorld / BuschGarden" className="destinos-page__img" />
                        <p className="destinos-page__img-text">SeaWorld/BuschGarden</p>
                    </div>
                </div>
            </div>
            <div className='destinos-page__bottom'>
                <h2 className="destinos-page__subtitle">
                    Pero eso no es todo, si tenés
                    otro destino en mente,
                    contactame que lo 
                    organizamos juntos.
                </h2>
                {/*<Vector2 className="destinos-page__vector2" />*/}

                <div className="destinos-page__btn">
                    <Link to='/asesoria'>
                        <Button text={"¡Quiero presupuestar mi viaje!"} width={'50%'} />
                    </Link>
                </div>
            </div>
        </div>
    )
}
