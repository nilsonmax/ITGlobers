import React from 'react'
import '../../SCSS/Suscribite.scss'
import { Formulario } from '../Formulario/Formulario'

export const Suscribite = () => {
  return (
    <div className='containerSuscribite'>
      <p className='txtSuscribite'>newsletter</p>
      <h2 className='titleSuscribite'>Suscribite</h2>
      <p>Y enterete de todas las novedaddes </p>
      <Formulario />
    </div>
  )
}
