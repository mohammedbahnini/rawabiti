import React from 'react'
import InputText from './InputText'
import Phone from './Phone'
import Description from './Description'

function Hero() {
    return (

        <>
            <div className="container  w-full  md:w-[80%]  mx-auto flex items-center  lg:gap-24 md:gap-20 gap-10 mb-10 pt-5 md:pt-20 flex-col lg:flex-row">

                <Phone />
                <Description />

            </div>

            <InputText />
        </>
    )
}

export default Hero
