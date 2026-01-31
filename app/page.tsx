import Info from './components/Info'
import Skills from './components/Skills';
export default function Home() {
  return (
    <div  className=" w-screen min-h-screen p-7  dark:bg-black overflow-x-hidden">
      
      <div className='flex w-full justify-center'>
        <Info/>
      </div>
        <Skills/>
    </div>
  );
}

