import React from 'react'
import CloseMenu from './CloseMenu'
import { Link } from 'react-router-dom'

function Navbar({openMenu , menuIsOpen}) {
    return (

        <nav className={`flex flex-grow fixed bg-slate-700/55 w-full h-svh top-0 right-0 z-10 m-0 transition-transform duration-300 translate-x-[100%] ${menuIsOpen ? 'open' : ''} lg:bg-transparent lg:static lg:transform-none lg:h-auto lg:w-auto`}>
            <div className="flex flex-col justify-between lg:flex-row lg:flex-1  py-4  px-8 bg-white w-[80%] h-svh md:h-full lg:bg-transparent" >

                <CloseMenu openMenu={openMenu} />

                <ul className="flex flex-grow items-start lg:gap-6 flex-col lg:flex-row gap-8 mt-4 lg:mt-0 lg:items-center">
                    <li>
                        <a href="#" className="font-semibold text-dark-grey text-base active relative after:absolute after:bottom-[-4px] after:left-0 after:h-1 after:bg-cyan after:w-full px-4 hover:after:w-full after:transition-[width] after:duration-200 after:ease-linear ">المدونة</a>
                    </li>
                    <li>
                        <a href="#" className="font-semibold text-dark-grey font-base relative hover:text-purple after:absolute after:bottom-[-4px] after:left-0 after:h-1 after:bg-cyan after:w-0 px-4 hover:after:w-full after:transition-[width] after:duration-200 after:ease-linear ">مساعدة</a>
                    </li>
                    <li>
                        <Link className='font-semibold text-dark-grey font-base relative hover:text-purple after:absolute after:bottom-[-4px] after:left-0 after:h-1 after:bg-cyan after:w-0 px-4 hover:after:w-full after:transition-[width] after:duration-200 after:ease-linear ' to='profile' onClick={() => openMenu(false)}>Profile</Link>
                    </li>

                </ul>

                <div className="actions flex items-center gap-2 md:gap-4  lg:gap-6 flex-col lg:flex-row ">
                    <a href="#" className="btn  inline-block text-dark-grey font-semibold f-s-4 bg-transparent hover:bg-cyan transition-colors duration-300"
                    >تسجيل الدخول</a
                    >
                    <a href="#" className="btn font-semibold  bg-cyan w-full"
                    >إنشأ حساب مجانا</a
                    >
                </div>
            </div>
        </nav>
    )
}

export default Navbar
