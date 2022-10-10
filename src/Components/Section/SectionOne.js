// import { ArrowBack, ArrowForward } from '@mui/icons-material'
import React, { useState } from 'react'
import { Data } from '../Data/Data'
import '../../SCSS/SectionOne.scss'

const SectionOne = ({ slides }) => {
    const [first, setFirst] = useState(0)

    const length = slides.length


    const nextSlide = () => {
        setFirst(first === length - 1 ? 0 : first + 1)
    }


    const prevSlide = () => {
        setFirst(first === 0 ? length - 1 : first - 1)
    }

    return (
        <section>
            <p className="back" onClick={prevSlide} rel="noopener noreferrer">❮</p>
            <p className="forward" onClick={nextSlide} rel="noopener noreferrer">❯</p>
           
            <div className="slide">
                {Data.map((item, index) => {
                    
                    return (
                        <div key={index} className={item.className}>
                            <div className={index === first ? 'slides active' : 'slides'}>
                                {index === first && (
                                    <div>
                                        <img src={item.image} alt="playa" />
                                        <p className='placesOne'>{item.textOne}</p>
                                        <p className='placesTwo'>{item.textTwo}</p>
                                        <div className="buttons">
                                            <button>Shop</button>
                                        </div>
                                    </div>
                                )}
                            </div>
                        </div>
                    )

                })}
            </div>

        </section>
    )
}

export default SectionOne
