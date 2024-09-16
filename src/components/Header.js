import { Bars3Icon } from '@heroicons/react/24/solid'
import { useCallback, useState } from 'react'

export default function Header() {

    const [toggleMenu, setToggleMenu] = useState(false) 


    return (
        <header className="font-bold text-balck flex justify-between px-5 py-2 bg-primary">
            <a>mohamed mujahith</a>
            <nav className="hidden md:block">
                <ul className="flex text-white">
                    <li>Home</li>
                    <li>About</li>
                    <li>Projects</li>
                    <li>Contact</li>
                </ul>
            </nav>

            { toggleMenu && <nav className="block md:hidden ">
                <ul className="flex flex-col text-white mobile-nav">
                    <li>Home</li>
                    <li>About</li>
                    <li>Projects</li>
                    <li>Contact</li>
                </ul>
            </nav>
            }

            <button onClick={()=>setToggleMenu(!toggleMenu)} className='block md:hidden'><Bars3Icon className='text-white h-5'/></button>
           
        </header>
    )
}