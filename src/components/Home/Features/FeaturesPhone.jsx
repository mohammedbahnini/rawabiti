import React from 'react'

function FeaturesPhone() {
    return (
        <div className="phone px-0 relative max-w-[22rem] col-start-2 row-start-1 row-span-3 justify-self-center hidden lg:block">
            <div className="frame relative top-[50%] translate-y-[-50%]">
                <img src="/assets/phone-mockup.svg" alt="Phone" />
                <div className="avatar absolute overflow-hidden rounded-full w-1/3 left-1/2 -translate-x-1/2 top-[20%] ">
                    <img src="/assets/wills-mith.webp" alt="Avatar" />
                </div>
            </div>
        </div>
    )
}

export default FeaturesPhone
