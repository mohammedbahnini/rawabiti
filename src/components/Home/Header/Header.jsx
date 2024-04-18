import React, { useState } from 'react'
import { Link } from 'react-router-dom';
import OpenMenu from './Navbar/OpenMenu';
import Navbar from './Navbar/Navbar';
import Logo from './Navbar/Logo';
import Hero from './Hero/Hero';

function Header() {

    const [menuIsOpen, setMenuIsOpen] = useState(false);

    const openMenu = (isOpen) => {
        setMenuIsOpen(isOpen)
        document.body.style.overflowY = isOpen ? 'hidden' : 'auto'
    }

    return (
        <header className="md:pb-20 pb-10 bg-pale-grey">
            <div className="container  flex gap-10 lg:gap-10 items-center pt-4  lg:pt-10 justify-between " >

                <Logo />
                <Navbar menuIsOpen={menuIsOpen }  openMenu={openMenu}  />
                <OpenMenu openMenu={openMenu} />

            </div>

            <Hero />

          

        </header>

    )
}

export default Header
