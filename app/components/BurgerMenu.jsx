'use client'
import {SiGithub} from 'react-icons/si';
import { FaLinkedin } from "react-icons/fa";


export default function BurgerMenu({setOpen}) {

    const scrollDown = (y) => {
        window.scrollTo({
        top: y, 
        behavior: "smooth",
    });
    };
    
    return (
        <div className="w-75 h-50  bg-[#0C0C0C]  font-bold text-white box rounded-xl rounded-r">
            <ul className="w-full h-full p-3 flex flex-col justify-around relative triangle">
                
                <li className="cursor-pointer hover:text-zinc-300 p-2" onClick={() => {
                    scrollDown(300)
                    setOpen(false)

                }}>About</li>
                
                <li className="cursor-pointer hover:text-zinc-300 p-2 " onClick={() => {
                    scrollDown(700)
                    setOpen(false)

                }}>Skills</li>
                
                
                <li className="cursor-pointer hover:text-zinc-300  p-2" onClick={() => {
                    scrollDown(1290)
                    setOpen(false)

                }}>Projects</li>

                <li className="cursor-pointer hover:text-zinc-300 pl-2 mt-2 flex" >          
                    <a href='https://github.com/Eslamalelwany' target='_blank' className='text-white '  style={{fill:"#FFFFFF"}}><SiGithub size={30}/></a>
                    <a href="https://www.linkedin.com/in/eslam-elelwany-3b550220b?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app" target='_blank' className='ml-3.5'> <FaLinkedin size={30} fill='white'/></a>

                </li>
                

            </ul>
        </div>
    )
}