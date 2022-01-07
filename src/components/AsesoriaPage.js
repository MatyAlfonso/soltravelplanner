import { NavBar } from './NavBar';
import { NavBarDesktop } from './NavBarDesktop';
import { ContactForm } from './ContactForm';

export const AsesoriaPage = () => {
    return (
        <>
            <NavBar />
            <NavBarDesktop />

            <div className="asesoria-page__container">

                <h2 className="asesoria-page__title">
                    ¿Estás listo para que tus <br /> sueños se hagan realidad?
                </h2>
                <h3 className="asesoria-page__subtitle">
                    ¡Solicita tu asesoría!
                </h3>

                <p className="asesoria-page__p">
                    ¡Gracias por confiar en mí para ayudarte en tu viaje! Con la información que me <br/> vas a dar a continuación, voy a poder saber un poco sobre vos para poder <br/> contactarte y seguir con la cotización.
                </p>

                <ContactForm />
            </div>
        </>
    )
}
