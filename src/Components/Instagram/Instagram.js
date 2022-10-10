import React from 'react'
import '../../SCSS/Instagram.scss'
import imagen from '../assets/instagram.png'

export const Instagram = () => {
    return (

        <div className='container'>
            <p className='txtInstagram'>Instagram</p>
            <h2 className='titleInstagram'>#espufi</h2>
            <img className='container' src={imagen} alt='instagram'/>
        </div>
    )
}
