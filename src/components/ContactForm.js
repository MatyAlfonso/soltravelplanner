import { useRef } from 'react';
import emailjs from 'emailjs-com';

import Swal from 'sweetalert2';

import { Button } from "./Button";

const USER_TOKEN = process.env.REACT_APP_USER_TOKEN;
const CONTACT_SERVICE_ASESORIA = process.env.REACT_APP_CONTACT_SERVICE_ASESORIA;
const CONTACT_TEMPLATE_ASESORIA = process.env.REACT_APP_CONTACT_TEMPLATE_ASESORIA;

export const ContactForm = () => {

    const form = useRef();

    const onSubmit = (e) => {
        e.preventDefault();

        if (e.target.user_name.value === "" || e.target.user_email.value === "" || e.target.user_number.value === "" || e.target.user_country.value === "" || e.target.user_destination.value === "" || e.target.user_date.value === "" || e.target.user_passengers.value === "") {
            Swal.fire('¡Hay campos sin completar!', 'Todos los campos del formulario marcados con *Obligatorio, deben ser completados.', 'error');
        } else {
            emailjs.sendForm(CONTACT_SERVICE_ASESORIA, CONTACT_TEMPLATE_ASESORIA, form.current, USER_TOKEN)
                .then((result) => {
                    console.log('SUCCESS!', result.status, result.text);
                    Swal.fire('¡Enviado con éxito!', 'El formulario fue completado y enviado exitosamente.', 'success');
                })
                .catch((error) => {
                    console.log('FAILED...', error.text);
                    Swal.fire('Error', 'Algo falló. Por favor, intentá de nuevo.', 'error');
                });

            e.target.user_name.value = "";
            e.target.user_email.value = "";
            e.target.user_number.value = "";
            e.target.user_country.value = "";
            e.target.user_destination.value = "";
            e.target.user_date.value = "";
            e.target.user_passengers.value = "";
            e.target.user_lodgment.value = "";
            e.target.user_message.value = "";
        }
    };

    return (
        <form ref={form} onSubmit={onSubmit} className="contact-form__container">

            <label className="contact-form__form-label">Nombre y apellido:</label>
            <br />
            <input type="text" name="user_name" className="contact-form__input" placeholder="*Obligatorio" />
            <br />

            <label className="contact-form__form-label">Email:</label>
            <br />
            <input type="email" name="user_email" className="contact-form__input" placeholder="*Obligatorio" />
            <br />

            <label className="contact-form__form-label">Número de celular:</label>
            <br />
            <input type="number" name="user_number" className="contact-form__input" placeholder="*Obligatorio" />
            <br />

            <label className="contact-form__form-label">¿En qué país vivís?</label>
            <br />
            <input type="text" name="user_country" className="contact-form__input" placeholder="*Obligatorio" />
            <br />

            <label className="contact-form__form-label">Indicame el destino que querés cotizar:</label>
            <br />
            <input type="text" name="user_destination" className="contact-form__input" placeholder="*Obligatorio" />
            <br />

            <label className="contact-form__form-label">¿Cuándo te gustaría viajar?</label>
            <br />
            <input type="text" name="user_date" className="contact-form__input" placeholder="*Obligatorio" />
            <br />

            <label className="contact-form__form-label">¿Cuántos pasajeros son?</label>
            <br />
            <input type="number" name="user_passengers" className="contact-form__input" placeholder="*Obligatorio" />
            <br />

            <label className="contact-form__form-label">En caso de que viajes a Orlando, ¿te gustaría hospedarte dentro de Disney o Universal?</label>
            <br />
            <input type="text" name="user_lodgment" className="contact-form__input" placeholder="*Opcional" />
            <br />

            <label className="contact-form__form-label">Dejame saber cualquier otra cosa que sientas que es importante:</label>
            <br />
            <textarea name="user_message" className="contact-form__text-area" placeholder="*Opcional" />
            <br />

            <div className="contact-form__btn">
                <Button type="submit" text={"Enviar"} width={"100%"} />
            </div>

        </form>
    )
}

