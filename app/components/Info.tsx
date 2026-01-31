'use client'
import { useState, useEffect } from "react"

export default function Info() {
    const [type, setType] = useState("")

const fullText = "Hello, Iam Eslam,"
useEffect(() => {
        let i = 0;
        const interval = setInterval(() => {
        if (i <= fullText.length) {
            setType(fullText.slice(0, i))
            i++
        } else {
            clearInterval(interval)
        }
    }, 100)

    return () => clearInterval(interval)
},[])

    
    return (
        <div className="flex flex-col justify-around lg:mt-0 p-4 items-center font-mono md:justify-evenly w-full  md:flex-row lg:flex-row lg:justify-evenly ">

        <div className="xs:w-[46%] lg:w-[40%]  lg:mt-10 xl:mt-1 md:w-[39%] md:h-[60%] lg:h-[70%] mt-10 md:ml:10 lg:ml-10 ">
    <img 
        src="/images/photo_2026-01-02_18-56-46.jpg" 
        alt="Profile" 
        className="w-32 h-32 sm:w-40 sm:h-40 md:w-52 md:h-52 lg:w-[100%] lg:h-64 xl:w-[100%] xl:h-[108%] rounded-full  "
    />
        </div>
            <div className=" w-screen p-2 mt-7 flex flex-col items-center md:mt-10 sm:mt-10  md:ml-16 lg:ml-20 bg-black">
                <p className="w-full font-extralight md:text-2xl lg:text-4xl mr-auto  lg:indent-1.5 indent-1 text-white">{type}</p>
                <h1 className="lg:text-8xl text-5xl text-white md:text-7xl font-bold mt-3">Frontend Developer.</h1>
            <a target="_blank"  href="https://drive.google.com/file/d/1gKga_RUesL9oRs0kDD6PnDRuUqHBVeyX/view"  className="bg-[#301CA0] p-3  font-extralight mr-auto  cursor-pointer mt-3 text-white rounded-xl text-sm">Download CV</a>
            </div>
        </div>
    )
}