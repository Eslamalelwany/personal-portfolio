"use client"
import { useState } from 'react';
import { Menu  } from 'lucide-react';
import {SiGithub} from 'react-icons/si';
import BurgerMenu from './BurgerMenu';
import { FaLinkedin } from "react-icons/fa";
export default function Header() {

    const [isOpen, setOpen] = useState(false)

    const scrollDown = (y) => {
    window.scrollTo({
        top: y, 
        behavior: "smooth",
    });
    };
    
    function SetMenuOpen() {
        setOpen(prev => !prev)
    }
    
    return (
        <header className="flex font-extralight bg-black  text-white   flex-row w-full  m-auto justify-between  items-center p-8 lg:pl-36 lg:pr-36  xl:pl-36 xl:pr-36">
        <h1 className=" md:text-xl font-extralight lg:text-xl">Eslam Alelwany</h1>
        <div className='relative'>
            <Menu 
                onClick={SetMenuOpen} 
                className="cursor-pointer lg:hidden"
            />
            <div className={`box ${isOpen ? 'visible' : 'invisible'} lg:hidden  `} >
                <BurgerMenu setOpen = {setOpen}/>
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
            <div className='hidden lg:flex xl:flex w-[15%] justify-evenly'>
                <a href="https://www.linkedin.com/in/eslam-elelwany-3b550220b?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app" target='_blank'> <FaLinkedin size={30} fill='white' className=""/></a>
                <a href='https://github.com/Eslamalelwany' target='_blank' className='text-white hidden lg:flex xl:flex '  style={{fill:"#FFFFFF"}}><SiGithub size={30}/></a>
           </div>
            
    </header>
    )
}