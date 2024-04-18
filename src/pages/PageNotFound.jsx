import React from 'react'

function PageNotFound() {
    return (
        <div className="container h-screen flex flex-col items-center justify-center">
            <div className='flex flex-col items-center gap-y-8'>
                <img src="/assets/broken-robot-96.png" alt="" className='w-20' />
                <h1 className='text-4xl font-bold text-grey'>Page Not Found</h1>
            </div>
        </div>
    )
}

export default PageNotFound
