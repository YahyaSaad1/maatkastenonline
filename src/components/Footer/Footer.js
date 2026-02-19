import { Link } from 'react-router-dom';
import {containerPadding, FOOTER_DATA, socialMedia} from '../Context';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Woman from '../../images/Wonen.png';
import Concept from '../../images/Concept.png';
import DobbitInnovation from '../../images/DobbitInnovation.png';

export default function Footer(){
    const classNameHead= "font-semibold text-lg mb-2";
    const classNameItems= "w-fit duration-150 hover:scale-105 focus:scale-90 hover:text-hover-hint-link text-sm";

    return(
        <div className={`${containerPadding} grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-10 bg-first-color text-white`}>
            <div className="flex flex-col gap-y-2">
                <h4 className={classNameHead}>Contact</h4>
                <a className={classNameItems} href="mailto:info@maatkastenonline.be">info@maatkastenonline.be</a>
                <a className={classNameItems} href="tel:+3250695901">+32 50 69 59 01</a>
                <p>monday to friday 9am-12pm & 1pm-5pm</p>
                <p>BE 0650.983.826 (OIC BV)</p>
            </div>

            {FOOTER_DATA.map((item)=>{
                return(
                <div key={item.id} className="flex flex-col gap-y-2">
                    <h4 className={classNameHead}>{item.title}</h4>
                    {item.links.map((itemsec)=>{
                        return(
                            <Link key={itemsec.id} className={classNameItems} to={itemsec.to}>
                                {itemsec.name}
                            </Link>
                        )
                    })
                    }
                </div>
                )
            })}
            <div className="flex flex-col gap-y-2">
                <h4 className={classNameHead}>Don't be shy, come say hi!</h4>

                <div className='flex gap-4'>
                    {socialMedia.map((item)=>{
                        return(
                            <a key={item.name} href={item.link} className='rounded-full w-8 h-8 bg-white hover:bg-hover-hint-link hover:scale-105 focus:scale-90 duration-150 flex justify-center items-center text-center'>
                                <FontAwesomeIcon className='text-hover-first-color text-xl' icon={item.icon} />
                            </a>
                        )
                    })}
                </div>

                <div className='inline-flex gap-4 h-fit'>
                    <img className='h-10 2xl:h-16' src={Woman} alt="Woman" />
                    <img className='h-10 2xl:h-10 self-center' src={Concept} alt="Concept" />
                    <img className='h-10 2xl:h-16 self-center' src={DobbitInnovation} alt="DobbitInnovation" />
                </div>
            </div>
        </div>
    )
}