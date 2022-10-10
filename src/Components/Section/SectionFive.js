import React from 'react'
import '../../SCSS/Section.scss'
import { Card } from '../Card/Card';
import { DataCard } from '../Data/Data'

export const SectionFive = () => {
    return (
        <div className="container-plus">
            <div>
                <Card
                    imageOne={DataCard[3].imageOne}
                    text={DataCard[3].text}
                    descripcion={DataCard[3].descripcion}
                />
            </div>
            <div><img src={DataCard[3].imageTwo} alt="playa" /></div>
        </div>
    )
}
