import React from 'react'
import '../../SCSS/Header.scss'
import puff from '../assets/puff.png'
import rain from '../assets/rain.png'
import cart from '../assets/cart.png'
import nap from '../assets/nap.png'

export const Header = () => {
    return (
        <div className='principal'>
            <div className='header'>
                <nav className='nav-container'>
                    {/* <div className="menu">
                    <MenuOutlined className='menu-icon' onClick={showMenu} />
                </div> */}

                    <div className="logo">
                        <h1>Pufi</h1>
                    </div>

                    <div className='container'>
                        <div className="right">
                            <ul>
                                <li>
                                    <div className='menuIco separador'>
                                        <div><img src={puff} alt="puff" /></div>
                                        <div><a href='#pufipuff'>Pufi puff</a></div>
                                    </div>
                                </li>
                                <li>
                                    <div className='menuIco separador'>
                                        <div><img src={rain} alt="rain" /></div>
                                        <div><a href='#pufirain'>Pufi rain</a></div></div>
                                </li>
                                <li>
                                    <div className='menuIco separador'>
                                        <div><img src={cart} alt="cart" /></div>
                                        <div><a href='#puficart'>Pufi cart</a></div>
                                    </div>
                                </li>
                                <li>
                                    <div className='menuIco'>
                                        <div><img src={nap} alt="nap" /></div>
                                        <div><a href='#pufinap'>Pufi nap</a></div>
                                    </div>
                                </li>
                            </ul>
                        </div>
                    </div>
                </nav>
            </div>
        </div>
    )
}
