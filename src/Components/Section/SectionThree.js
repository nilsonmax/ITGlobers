import React from 'react'
import '../../SCSS/Section.scss'
import { Card } from '../Card/Card';
import { DataCard } from '../Data/Data'

export const SectionThree = () => {
    return (
        <div id='pufipuff' className="container-plus">
            <div>
                <Card
                    imageOne={DataCard[1].imageOne}
                    text={DataCard[1].text}
                    descripcion={DataCard[1].descripcion}
                />
            </div>
            <div><img src={DataCard[1].imageTwo} alt="playa" /></div>
        </div>
    )
}
