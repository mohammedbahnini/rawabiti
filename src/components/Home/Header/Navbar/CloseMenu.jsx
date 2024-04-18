import React from 'react'

function CloseMenu({openMenu}) {
    return (
        <div className="close-menu text-2xl lg:hidden cursor-pointer" onClick={() => openMenu(false)}>
            <i className="fa-solid fa-xmark"></i>
        </div>
    )
}

export default CloseMenu
