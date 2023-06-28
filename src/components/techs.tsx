import Image from 'next/image'
import react from '../assets/react.gif'
import tech from '../assets/techs.png'
import { TechPattern } from './ui/techPattern'

export function Techs() {
    return (
        <div className=" flex items-center justify-center relative min-h-screen" id="home">
            <div className='absolute max-w-3xl'>
                <Image src={tech} alt="" />
            </div>
            <div className='w-32'> 
                <Image src={react} alt="" />
            </div> 
            <TechPattern className='absolute top-1/2 left-1/2 translate-x-[-50%] translate-y-[-50%] -z-10' />
        </div>
    )
}