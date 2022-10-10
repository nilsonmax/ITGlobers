import React from 'react'
import { DataCard } from '../Data/Data'
import '../../SCSS/SectionTwo.scss'
import { Card } from '../Card/Card';

export const SectionTwo = () => {
    return (
        <div className="container-two">
            <div><img src={DataCard[0].imageTwo} alt="playa" /></div>
            <div>
                <Card  
                imageOne={DataCard[0].imageOne}
                text={DataCard[0].text}
                descripcion={DataCard[0].descripcion}                
                />
            </div>
        </div>
    )
}
