import * as React from "react"
import { Card, CardContent } from "@/components/ui/card"
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"


import { 
  SiReact, 
  SiNextdotjs, 
  SiTypescript, 
  SiTailwindcss,
  SiRedux,
  SiHtml5,
  SiCss3,
  SiVite,
  SiGit,
  SiGithub,
  SiJavascript,
  SiPostman 
} from 'react-icons/si';

const skills = [
  {id:1, icon: SiReact, name: "React", color: "#61DAFB" },
  {id:2, icon: SiNextdotjs, name: "Next.js", color:  "#FFFFFF"  },
  {id:3, icon: SiTypescript, name: "TypeScript", color: "#3178C6" },
  {id:4, icon: SiJavascript, name: "JavaScript", color: "#F7DF1E" },
  {id:5, icon: SiTailwindcss, name: "Tailwind", color: "#06B6D4" },
  {id:6, icon: SiRedux, name: "Redux", color: "#764ABC" },
  {id:7, icon: SiGit, name: "Git", color: "#F05032" },
  {id:8, icon: SiGithub, name: "GitHub", color: "#FFFFFF" },
  {id:9, icon: SiVite, name: "Vite", color: "#646CFF" },
  {id:10, icon: SiHtml5, name: "HTML", color: "#E34F26" },
  {id:11, icon: SiCss3, name: "CSS", color: "#1572B6" },
  {id:12, icon: SiPostman , name: "Postman", color: "#FF6C37" },
];

export default function CarouselSize() {
  return (
    <Carousel c
      opts={{
        align: "start",
      }}
      className="w-full mt-7 ml-auto mr-auto  max-w-[12rem] sm:max-w-xs md:max-w-sm"
    >
      <CarouselContent >
        {skills.map((index) => (
          <CarouselItem key={index.id} className="basis-1/2  lg:basis-1/3">
            <div className="p-1">
              <Card className="border-0">
                <CardContent className="flex aspect-square items-center justify-center p-6">
                  <div className="w-full h-full flex flex-col justify-center items-center" >
                    <div><index.icon style={{fill:index.color}} className="w-10 m-auto h-10" /></div>
                    <h2 className="mt-2 ">{index.name}</h2>
                  </div>
                </CardContent>
              </Card>
            </div>
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselPrevious className="border-0" />
      <CarouselNext className="border-0"  />
    </Carousel>
  )
}
