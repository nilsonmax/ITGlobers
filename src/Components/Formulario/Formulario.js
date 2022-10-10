import React from 'react';
import { useForm, ValidationError } from '@formspree/react';
import '../../SCSS/Formulario.scss'

export const Formulario = () => {
    const [state, handleSubmit] = useForm("mjvzovep");
    if (state.succeeded) {
        return <p>Gracias por Suscribirte</p>;
    }
    return (
        <form onSubmit={handleSubmit}>
            <div class="modal">
                <div class="email-box">
                    <input
                        class="email-box__input"
                        id="email"
                        type="email"
                        name="email"
                        placeholder="Ingresa tu Email"
                    />
                    <ValidationError
                        prefix="Email"
                        field="email"
                        errors={state.errors}
                    />
                    {/* <textarea
                        id="message"
                        name="message"
                    />
                    <ValidationError
                        prefix="Message"
                        field="message"
                        errors={state.errors}
                    /> */}
                    <button type="submit" class="email-box__button" disabled={state.submitting}>➔</button>
                </div>
            </div>


            {/* <label htmlFor="email">
                Email Address
            </label>
            <input
                id="email"
                type="email"
                name="email"
            /> */}
            {/* <ValidationError
                prefix="Email"
                field="email"
                errors={state.errors}
            /> */}
            {/* <textarea
                id="message"
                name="message"
            /> */}
            {/* <ValidationError
                prefix="Message"
                field="message"
                errors={state.errors}
            /> */}
            {/* <button type="submit" disabled={state.submitting}>
                Submit
            </button> */}
        </form>


    );
}