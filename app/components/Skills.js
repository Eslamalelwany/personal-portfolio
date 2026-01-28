'use client'
import { useRef, useEffect } from "react"

const projects = [
    {id:1, project:"E-commerce store",  technology:"React.JS, JavaScript, Tailwind, Redux",img:"/images/photo_2026-01-05_12-15-20.jpg", liveDemo:"https://westedition.netlify.app/"},
    {id:2, project:"weather-app", technology:"React.JS, JavaScript, Tailwind, Redux",img:"/images/photo_2026-01-04_15-53-18.jpg", liveDemo:"https://weatherreduxx.netlify.app/"},
    {id:3, project:"Todo-list",  technology:"React.JS, JavaScript, MaterialUi", img:"/images/photo_2026-01-04_17-14-12.jpg", liveDemo:"https://lambent-dasik-40d281.netlify.app/"},
    {id:4, project:"Landing page",  technology:"HTML, CSS, JavaScript", img:"/images/photo_2026-01-04_17-27-06.jpg", liveDemo:"https://eslamalelwany.github.io/software-house-site/"},
    {id:5, project:"Hangman game",  technology:"HTML, CSS, JavaScript", img:"/images/photo_2026-01-04_17-34-54.jpg", liveDemo:"https://eslamalelwany.github.io/hangman/"},
    {id:6, project:"Portfolio project",  technology:"REACT.JS, Javascript", img:"/images/WhatsApp Image 2026-01-28 at 5.17.20 AM.jpeg", liveDemo:"https://portfolio-39.netlify.app/"},
]

export default function Skills() {
    const aboutRef = useRef(null)
    const skillsSectionRef = useRef(null)
    const projectsRef = useRef(null)
    
    useEffect(() => {
        const observer = new IntersectionObserver((entries) => {
            entries.forEach((entry) => {
                if(entry.isIntersecting) {
                    entry.target.classList.remove('opacity-0', 'translate-x-10')
                    entry.target.classList.add('opacity-100', 'translate-x-0')
                    observer.unobserve(entry.target)
                }
            })
        }, {
            threshold: 0.1,
            rootMargin: '50px'
        }) 
        
        const elements = [aboutRef.current, skillsSectionRef.current, projectsRef.current].filter(Boolean)
        
        elements.forEach((el) => {
            if (el) observer.observe(el)
        })
        
        return () => observer.disconnect()
    }, [])

    return (
        <div className="mt-20">
            {/* About Section */}
            <div 
                ref={aboutRef}
                className="text-white sm:mr-10 font-extralight flex flex-col p-2 justify-around items-center w-full mt-2 opacity-0 translate-x-10 transition-opacity duration-500"
            >
                <div className="w-full">
                    <h1 className="text-white font-bold text-3xl">About</h1>
                    <p className="mt-4 sm:mt-6 bg-[#0C0C0C] leading-relaxed text-xs sm:text-sm md:text-base lg:text-lg xl:text-xl p-4 sm:p-6 md:p-8 lg:p-10 rounded-xl md:rounded-2xl max-w-full">
                        Front-end developer passionate about creating interactive and seamless web applications. Experienced in HTML, CSS, JavaScript, TypeScript, and proficient in React and Next.js for building modern, high-performance interfaces. I enjoy turning ideas into real projects, always focusing on delivering an excellent user experience.
                    </p>
                </div>
            </div>

            {/* Skills Section */}
            <div 
                ref={skillsSectionRef}
                className="text-white sm:mr-10 font-extralight flex flex-col p-2 justify-around items-center w-full mt-2 opacity-0 translate-x-10 transition-opacity duration-500"
            >
                <div className="w-full">
                    <h1 className="text-white font-bold text-3xl">Skills</h1>
                    <div className="bg-[#0C0C0C] mt-10 p-5 lg:p-10 rounded-xl max-w-full text-2xl lg:text-5xl flex flex-col md:flex-wrap md:flex-row lg:flex-row lg:flex-wrap justify-around lg:items-center font-bold">
                        <div className="w-full md:w-[50%] lg:p-5 leading-14">
                            <p>HTML</p>
                            <p>CSS</p>
                            <p>Javascript</p>
                        </div>
                        <div className="w-full md:w-[50%] lg:p-5 leading-14">
                            <p>Typescript</p>
                            <p>React.JS</p>
                            <p>Next.JS</p>
                        </div>
                    </div>
                </div>
            </div>

            {/* Projects Section */}
            <div  id="Projects"
                ref={projectsRef}
                className="text-white sm:mr-10 font-extralight flex flex-col p-2 justify-around items-center w-full mt-2 opacity-0 translate-x-10 transition-opacity duration-500"
            >
                <h1 className="text-white font-bold text-3xl mr-auto">Projects</h1>
                {projects.map((p) => {
                    return (
                        <div key={p.id}>
                            <div className="bg-[#0C0C0C] mt-10 p-5 lg:p-10 rounded-xl max-w-full text-2xl lg:text-5xl flex flex-col md:flex-wrap md:flex-row lg:flex-row lg:flex-wrap justify-around lg:items-center font-bold">
                                <h3 className="w-full text-lg lg:text-xl">{p.project}</h3>
                                <div className="pt-4 pb-4 w-full md:w-[70%] mr-auto">
                                    <img src={p.img} alt={`${p.project} screenshot`} className="w-full h-full rounded-xl"/>
                                </div>
                                <p className="w-full text-xs md:text-xl">{p.technology}</p>
                                <a 
                                    href={p.liveDemo} 
                                    className="bg-[#301CA0] p-3 mt-5 font-extralight mr-auto text-white rounded-xl text-sm" 
                                    target="_blank" 
                                    rel="noopener noreferrer"
                                >
                                    View Livedemo
                                </a>
                            </div>
                        </div>
                    )
                })}
            </div>
        </div>
    )
}
