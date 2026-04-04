export default function Projects() {
    const projects = [
    {id:0, project:"E-commerce store",  technology:"React.JS, JavaScript, Tailwind, Redux",img:"/images/photo_2026-01-05_12-15-20.jpg", liveDemo:"https://westedition.netlify.app/"},
    {id:1, project:"Recipe finder",  technology:"React.JS, JavaScript, Tailwind, Redux",img:"/images/poster.jpeg", liveDemo:"https://recipe-finder30.netlify.app/"},
    {id:2, project:"weather-app", technology:"React.JS, JavaScript, Tailwind, Redux",img:"/images/photo_2026-01-04_15-53-18.jpg", liveDemo:"https://weatherreduxx.netlify.app/"},
    {id:3, project:"Todo-list",  technology:"React.JS, JavaScript, MaterialUi", img:"/images/photo_2026-01-04_17-14-12.jpg", liveDemo:"https://lambent-dasik-40d281.netlify.app/"},
    {id:4, project:"Landing page",  technology:"HTML, CSS, JavaScript", img:"/images/photo_2026-01-04_17-27-06.jpg", liveDemo:"https://eslamalelwany.github.io/software-house-site/"},
    {id:5, project:"Hangman game",  technology:"HTML, CSS, JavaScript", img:"/images/photo_2026-01-04_17-34-54.jpg", liveDemo:"https://eslamalelwany.github.io/hangman/"},
    {id:6, project:"Portfolio project",  technology:"REACT.JS, Javascript", img:"/images/WhatsApp Image 2026-01-28 at 5.17.20 AM.jpeg", liveDemo:"https://portfolio-39.netlify.app/"},
]

   return (
  <div className="relative ">
    {projects.map((project) => (
      <div key={project.id} className="panel font-normal h-[80vh] md:h-[85vh] lg:h-[100vh] xl:h-[100vh]">
        
        <div className="baby w-[95vw] bg-[#0f1923] border border-white/[0.08] lg:p-10 p-6 rounded-2xl lg:w-[80vw] xl:w-[80vw] mx-auto flex flex-col relative overflow-hidden transition-all duration-300 hover:-translate-y-1.5 hover:shadow-2xl">
          
          <h3 className="text-xl lg:text-2xl text-white mb-4 tracking-tight">
            {project.project}
          </h3>

          <div className="relative w-full h-[200px] md:h-[280px] lg:h-[400px] rounded-xl overflow-hidden mb-5 group">
            <img
              className="w-full h-full object-cover rounded-xl transition-transform duration-500 group-hover:scale-105"
              src={project.img}
              alt={project.project}
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#0f1923]/60 to-transparent rounded-xl" />
            <span className="absolute top-3 right-3 text-[11px] text-white bg-white/10 backdrop-blur-md border border-white/20 px-3 py-1 rounded-full tracking-wide">
              Featured
            </span>
          </div>

          <div className="flex flex-wrap gap-1.5 mb-5">
            {[project.technology].map(tag => (
              <span key={tag} className="text-[11px] text-blue-300 bg-blue-300/10 border border-blue-300/20 px-3 py-1 rounded-full">
                {tag}
              </span>
            ))}
          </div>

          <div className="h-px bg-white/[0.07] mb-4" />

          <div className="flex items-center justify-between">
            <a
              rel="noopener noreferrer"
              target="_blank"
              className="flex items-center gap-2 bg-white text-[#0f1923] text-sm font-medium px-5 py-2.5 rounded-full hover:bg-blue-50 transition-all duration-200 hover:scale-[1.03]"
              href={project.liveDemo}
            >
              View Livedemo
            </a>
          </div>

        </div>
      </div>
    ))}
  </div>
)
}




