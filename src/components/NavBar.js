import { useState } from "react";
import { Link } from "react-router-dom";

import { ReactComponent as Logo } from '../assets/Logo.svg';
import { ReactComponent as OpenMenu } from '../assets/Menu.svg';
import { ReactComponent as CloseMenu } from '../assets/CloseMenu.svg';

import 'animate.css';

export const NavBar = () => {

    const [isOpen, setIsOpen] = useState(false);

    const handleClick = () => {
        setIsOpen(!isOpen);
    }

    return (
        <>
            {isOpen
                ?
                <nav className="nav-bar__container" >
                    <div className="nav-bar__logo-position">
                        <Link to="/">
                            <Logo className="nav-bar__logo" />
                        </Link>
                        <CloseMenu className="nav-bar__close-menu" onClick={handleClick} />
                    </div>
                    <div className="nav-bar__open">
                        <ul className="nav-bar__ul">
                            <li className="animate__animated animate__tada">
                                <Link to="/destinos" className="nav-bar__links">
                                    Destinos
                                </Link>
                            </li>
                            <li className="animate__animated animate__tada">
                                <Link to="/asesoria" className="nav-bar__links">
                                    Asesoría
                                </Link>
                            </li>
                            <li className="animate__animated animate__tada">
                                <Link to="/about-me" className="nav-bar__links">
                                    Acerca de mí
                                </Link>
                            </li>
                        </ul>
                    </div>
                </nav>
                :
                <nav className="nav-bar__closed nav-bar__container">
                    <Link to="/">
                        <Logo className="nav-bar__logo" />
                    </Link>
                    <OpenMenu className="nav-bar__open-menu" onClick={handleClick} />
                </nav>}
        </>
    )
}
