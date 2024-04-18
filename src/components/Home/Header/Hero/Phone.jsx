import React from 'react'

function Phone() {
    return (
        <div className=" w-full lg:w-[27%] shrink-0 relative">
            <img src="/assets/phone-mockup.svg" alt="Phone" />
            <div className="avatar absolute overflow-hidden rounded-full w-[33%] left-[50%] translate-x-[-50%] aspect-square top-[20%]">
                <img src="/assets/wills-mith.webp" alt="Avatar" className='object-cover' />
            </div>
            <div className="social-media-group absolute top-[30%] left-[50%] translate-x-[-50%] w-full md:w-[120%] lg:w-[130%] ">
                <img src="/assets/social-media-group.svg" alt="" />
            </div>
        </div>
    )
}

export default Phone
