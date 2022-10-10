import React from 'react'
import pufiLogo from '../assets/pufiLogo.png'
import segura from '../assets/segura.png'
import live from '../assets/live.png'
import '../../SCSS/Footer.scss'

export const Footer = () => {
    return (
        <>
            <div className='container-footer'>
                <div>
                    <img className='imgLogo' src={pufiLogo} alt="pufi Logo" />
                </div>
                <div className='separador'>
                    <ul>
                        <li>PUFI RAIN</li>
                        <li>PUFI PUFF</li>
                        <li>PUFI CART</li>
                        <li>PUFI NAP</li>
                    </ul>
                </div>
                <div className='separador'>
                    <ul>
                        <li>CONTACTO</li>
                        <li>AYUDA</li>
                        <li>CÒMO COMPRAR</li>
                        <li>TÈRMINOS & CONDICIONES</li>
                    </ul>
                </div>
                <div className='separador'>
                    <p>COMPRA 100% SEGURA</p>
                    <img className='imgSegura' src={segura} alt="compra segura" />
                </div>
                <div className='separador-siguenos'>
                    <div className='texto'>SIGUENOS EN</div>
                    <div className='textoDos'><ion-icon name="logo-facebook"></ion-icon>
                    <ion-icon name="logo-twitter"></ion-icon>
                    <ion-icon name="logo-instagram"></ion-icon></div>
                </div>
            </div>

            <div className='sub-container'>
                <div className='copy'>
                    <p>Pufi Copyrigth 2017 - Todos los derechos reservados</p>
                    <img src={live} alt="live" />
                </div>
            </div>

        </>
    )
}
