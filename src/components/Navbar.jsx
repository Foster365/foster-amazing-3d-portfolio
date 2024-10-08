import React, { useEffect, useState } from 'react'
import { NavLink } from 'react-router-dom'

export const Navbar = ({props}) => {
    const [isDarkBackground, setIsDarkBackground] = useState(false)
    var textColor=''
    useEffect(() => {
        isDarkBackground? textColor='text-black':textColor='text-white'
    },[isDarkBackground])
    console.log("textcolor: ", isDarkBackground)
    return (
        <header className="header ">
            <NavLink to="/foster-amazing-3d-portfolio/" className="w-10 h-10 rounded-lg bg-white items-center justify-center flex font-bold shadow-md">
                <p className="blue-gradient_text">BL</p>
            </NavLink>
            <nav className='flex text-lg gap-7 font-medium'>
                <NavLink to="/about" className={({isActive}) => isActive? 'text-blue-500':textColor}>
                About
                </NavLink>
                <NavLink to="/projects" className={({isActive}) => isActive? 'text-blue-500':textColor}>
                Projects
                </NavLink>
                <NavLink to="/art" className={({isActive}) => isActive? 'text-blue-500':textColor}>
                My Art
                </NavLink>
                <NavLink to="/chrono-steam" className={({isActive}) => isActive? 'text-blue-500':textColor}>
                Chrono-Steam
                </NavLink>
            </nav>
        </header>
    )
}
