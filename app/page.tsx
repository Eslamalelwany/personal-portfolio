import Info from './components/Info'
import Skills from './components/Skills';

export default function Home() {
  return (
    <div  className=" w-screen min-h-screen p-10  dark:bg-black">
      
      <div className='flex w-full justify-center'>
        <Info/>
      </div>
        {/* <About/> */}
        <Skills/>
    </div>
  );
}

