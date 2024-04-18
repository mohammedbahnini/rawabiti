import React from 'react'

function OpenMenu({openMenu}) {
    return (
        <div className="lg:hidden open-menu text-2xl cursor-pointer" onClick={() => openMenu(true)}>
            <i className="fa-solid fa-bars"></i>
        </div>
    )
}

export default OpenMenu
