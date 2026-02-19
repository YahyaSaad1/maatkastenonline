import { Link } from 'react-router-dom';
import bannerVideo from '../../images//maatkastenonline-home-mobile.webm';
import BtnLink from '../BtnLink';
import Woman from '../../images/Wonen.png';
import Concept from '../../images/Concept.png';
import {side} from '../Context';

export default function Banner(){
    return(
        <div className='w-screen h-[75vh] overflow-hidden relative text-white'>
            <video src={bannerVideo} className='w-full h-full object-cover' autoPlay muted loop></video>
            <div className='absolute inset-0 flex gap-x-10 items-center justify-center z-10'>
                <div className={`${side} w-full flex absolute top-8 justify-end lg:justify-between z-20`}>
                    <Link to={"/#"} className='bg-accent-color hover:bg-hover-accent-color hidden lg:flex rounded-lg text-black p-9 py-16 flex-col gap-2 text-center duration-150'>
                        <h3 className='text-xl font-semibold'>WINTER DISCOUNT</h3>
                        <p>up to</p>
                        <strong className='text-6xl font-semibold'>-20%</strong>
                    </Link>

                    <div className='inline-flex gap-6 h-fit'>
                        <img className='h-28 2xl:h-40' src={Woman} alt="Woman" />
                        <img className='h-16 2xl:h-20 self-center' src={Concept} alt="Concept" />
                    </div>
                </div>

                <div className='relative w-[90%] md:w-[80%] lg:w-[50%] flex justify-center items-start z-15'>
                    <div className='flex flex-col items-center gap-y-6'>
                        <h1 className='text-4xl lg:text-5xl font-bold text-center'>The most affordable custom cabinets?</h1>
                        <h1 className='text-4xl lg:text-5xl font-bold text-center'>Order them online!</h1>
                        <BtnLink title="Design your bespoke furniture now" />
                        <p className='text-center text-xl'>We’ll immediately show you the price and delivery time</p>
                    </div>
                </div>
            </div>
        </div>
    )
}