import React from 'react'

function FeatureItem({ item }) {
    return (
        <div className="feature py-4 px-4 bg-white shadow-[0px_2px_16px_0px] shadow-black/20 rounded-xl h-fit lg:h-auto ">
            <div className="feature-header flex items-center gap-6 mb-2 md:mb-4">
                <div className="icon w-8 md:w-11 aspect-square">
                    <img src={item.icon} alt="User" className='w-full h-full' />
                </div>
                <h2 className="title text-xl font-semibold text-dark-grey">{item.title}</h2>
            </div>
            <div className="feature-body">
                <p className="font-normal text-grey leading-relaxed ">{item.text}</p>
            </div>
        </div>
    )
}

export default FeatureItem
