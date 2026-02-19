import BtnLink from "./BtnLink";
import {containerPadding} from './Context';

export default function SplitSection({classNameParent, classNameChild, image, priority, hint, rounded, title, desc, titleBtn, linkBtn, classNameImg}){
    return(
        <div className={`${containerPadding} ${classNameParent}`}>
            <div className={`grid grid-cols-1 md:grid-cols-2 overflow-hidden ${rounded === 'notRounded' ? '' : 'rounded-xl'} group`}>
                <div className={`${classNameChild} ${priority === 'img' ? 'md:order-1' : 'md:order-2'} order-2 col-span-2 md:col-span-1 justify-center p-6 lg:p-20 flex flex-col gap-y-4 lg:gap-y-8`}>
                    <span className={`font-semibold text-[#FD5E2B] ${classNameParent === 'bg-white' ? 'bg-white' : 'bg-second-color' } text-sm tracking-widest uppercase px-2 rounded-full w-fit`}>{hint}</span>
                    <h2 className="text-3xl font-semibold leading-10 mb-2 lg:mb-4">{title}</h2>
                    <p className="text-md leading-8">{desc}</p>
                    {titleBtn && <BtnLink title={titleBtn} link={linkBtn} />}
                </div>
                <div className={`${priority === 'img' ? 'md:order-2' : 'md:order-1'} order-1 col-span-2 md:col-span-1`}>
                    <img className={`h-full ${classNameImg}`} src={image} alt="img" />
                </div>
            </div>
        </div>
    )
}