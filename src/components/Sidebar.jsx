import React, { useRef } from 'react'

import { navLinks } from '../constants'

function Sidebar({ closeSidebar }) {

    const toggleCloseSidebar = () => {
        if (closeSidebar) {
            closeSidebar()
        }
    }

    return (
        <div className="fixed top-0 left-0 bg-white h-full w-9/12 sm:w-2/5 z-50">
            <div
                className='p-4'
                onClick={() => toggleCloseSidebar()}
            >

                <p className='text-red-500' >FECHAR</p>
            </div>
            <div className='p-2'>
        
          <ul className='text-black'>
            {navLinks.map((link, index) => (
                <li
                    key={index}
                    className='text-xl font-bold mb-4'
                    onClick={() => toggleCloseSidebar()}
                >
                    <a href={link.path}>{link.name}</a>
                </li>
            ))}
          </ul>
            </div>
        </div>
    )
}

export default Sidebar