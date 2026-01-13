

export default function BurgerMenu() {

    const scrollDown = (y:number) => {
        window.scrollTo({
        top: y, 
        behavior: "smooth",
    });
    };
    
    return (
        <div className="w-75 h-44 font-extralight bg-[#0C0C0C]  text-white box rounded-l rounded-r">
            <ul className="w-full h-full p-3 flex flex-col justify-around relative triangle">
                
                <li className="cursor-pointer hover:text-zinc-300 p-2" onClick={() => {
                    scrollDown(300)
                }}>About</li>
                <hr />
                
                <li className="cursor-pointer hover:text-zinc-300 p-2 " onClick={() => {
                    scrollDown(700)
                }}>Skills</li>
                
                <hr />
                
                <li className="cursor-pointer hover:text-zinc-300  p-2" onClick={() => {
                    scrollDown(1290)
                }}>Projects</li>
                
            </ul>
        </div>
    )
}