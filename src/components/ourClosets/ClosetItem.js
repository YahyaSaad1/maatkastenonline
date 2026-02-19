import BtnLink from '../BtnLink';
import { side } from '../Context';

export default function ClosetItem({classNameParent, classNameChild, image, priority, hint, rounded, title, desc, titleBtn, linkBtn}){
    return(
        <div className={`${side} ${classNameParent}`}>
            <div className={`grid grid-cols-1 md:grid-cols-2 overflow-hidden ${rounded === 'notRounded' ? '' : 'rounded-xl'} group`}>
                <div className={`${classNameChild} ${priority === 'img' ? 'md:order-1' : 'md:order-2'} order-2 col-span-2 md:col-span-1 p-6 lg:pl-4 lg:pr-16 xl:pr-24 justify-center flex flex-col gap-y-4 lg:gap-y-8`}>
                    <span className={`font-semibold text-[#FD5E2B] ${classNameParent === 'bg-white' ? 'bg-white' : 'bg-second-color' } text-sm tracking-widest uppercase px-2 rounded-full w-fit`}>{hint}</span>
                    <h2 className="text-4xl font-semibold leading-tight tracking-wider mb-2 lg:mb-4 2xl:w-2/3">{title}</h2>
                    <p className="text-md leading-8">{desc}</p>
                    <BtnLink title={titleBtn} link={linkBtn} />
                </div>
                <div className={`${priority === 'img' ? 'md:order-2' : 'md:order-1'} order-1 col-span-2 md:col-span-1`}>
                    <img className="h-full" src={image} alt="img" />
                </div>
            </div>
        </div>
    )
}