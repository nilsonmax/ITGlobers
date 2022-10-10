import React, { useState } from 'react'
import '../../SCSS/Card.scss'

export const Card = ({imageOne,text,descripcion}) => {

    return (
        <div className='card'>
            <div className='infos'>

                <div><img src={imageOne} alt={text} /></div>
                <h2 className='title'>{text}</h2>
                <p className='txt'>
                    {descripcion}
                </p>
                <h3 className='details'> ❯ ver mas</h3>
            </div>
        </div>
    )
}
