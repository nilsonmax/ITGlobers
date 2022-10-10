import React from 'react'
import { DataCard } from '../Data/Data'
import '../../SCSS/Section.scss'
import { Card } from '../Card/Card';

export const SectionFour = () => {
    return (
        <div id='puficart' className="container-plus">
            <div><img src={DataCard[2].imageTwo} alt="playa" /></div>
            <div>
                <Card
                    imageOne={DataCard[2].imageOne}
                    text={DataCard[2].text}
                    descripcion={DataCard[2].descripcion}
                />
            </div>
        </div>
    )
}
