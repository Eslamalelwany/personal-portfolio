"use client"
import { useState } from 'react';
import { Menu, Github  } from 'lucide-react';
import BurgerMenu from './BurgerMenu';

export default function Header() {

    const [isOpen, setOpen] = useState<boolean>(false)

    const scrollDown = (y:number) => {
    window.scrollTo({
        top: y, 
        behavior: "smooth",
    });
    };
    
    function SetMenuOpen() {
        setOpen(prev => !prev)
    }
    
    return (
        <header className="flex font-extralight bg-black text-white   flex-row w-full  m-auto justify-between  items-center p-8">
        <h1 className=" md:text-xl font-extralight lg:text-xl">Eslam Alelwany</h1>
        <div className='relative'>
            <Menu 
                onClick={SetMenuOpen} 
                className="cursor-pointer lg:hidden"
            />
            <div className={`box ${isOpen ? 'visible' : 'invisible'} lg:hidden  `} >
                <BurgerMenu/>
            </div>
        </div>
        <div className=' hidden font-extralight  lg:flex w-[40%] items-center' >
            <ul className="flex justify-around w-full">
                <li className="cursor-pointer" onClick={() => {
                    scrollDown(300)
                }}>About</li>
                <li className="cursor-pointer" onClick={()=> {
                    scrollDown(700)
                }}>Skills</li>
                <li className="cursor-pointer" onClick={() => {
                    scrollDown(1290)
                }}>Projects</li>
            </ul>
        </div>
            <a href='https://github.com/Eslamalelwany' target='_blank' className=' hidden lg:flex'><Github/></a>
    </header>
    )
}