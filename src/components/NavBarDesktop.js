import { Link } from "react-router-dom";

import { ReactComponent as Logo } from '../assets/Logo.svg';

export const NavBarDesktop = () => {
    return (
        <nav className="nav-bar-desktop__container">
            <div className="nav-bar-desktop__logo-position">
                <Link to="/">
                    <Logo className="nav-bar-desktop__logo" />
                </Link>
            </div>
            <div>
                <ul className="nav-bar-desktop__ul">
                    <li className="animate__animated animate__tada">
                        <Link to="/destinos" className="nav-bar-desktop__links">
                            Destinos
                        </Link>
                    </li>
                    <li className="animate__animated animate__tada">
                        <Link to="/asesoria" className="nav-bar-desktop__links">
                            Asesoría
                        </Link>
                    </li>
                    <li className="animate__animated animate__tada">
                        <Link to="/about-me" className="nav-bar-desktop__links">
                            Acerca de mí
                        </Link>
                    </li>
                </ul>
            </div>
        </nav>
    )
}
