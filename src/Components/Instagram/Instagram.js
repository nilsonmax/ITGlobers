import React from 'react'
import '../../SCSS/Instagram.scss'
// import imagen from '../assets/instagram.png'
import InstaFeeds from '../Feeds/InstaFeeds'

export const Instagram = () => {
    return (

        <div id='instagram'className='containerInst'>
            <p className='txtInstagram'>Instagram</p>
            <h2 className='titleInstagram'>#espufi</h2>
            {/* <img className='container' src={imagen} alt='instagram'/> */}
            <div className="wrapper">
                <div className="item1"><InstaFeeds token={process.env.REACT_APP_INS_TOKEN} limit={6} /></div>
            </div>
            <div className='block'></div>
        </div>
    )
}
