
import { containerPadding } from '../Context';
import SubTitle from '../SubTitle';
import closet4 from "../../images/closet4.png";
import closet5 from "../../images/closet5.png";
import closet6 from "../../images/closet6.png";
import closet7 from "../../images/closet7.png";
import closet8 from "../../images/closet8.png";
import closet9 from "../../images/closet9.png";
import closet10 from "../../images/closet10.png";
import closet11 from "../../images/closet11.png";
import closet12 from "../../images/closet12.png";
import closet13 from "../../images/closet13.png";
import closet14 from "../../images/closet14.png";
import closet15 from "../../images/closet15.png";
import { Link } from 'react-router-dom';

export default function Realizations(){
    const discoverItems = [
        {id: 1, srcImage: closet4, hint: ''},
        {id: 2, srcImage: closet5, hint: ''},
        {id: 3, srcImage: closet6, hint: ''},
        {id: 4, srcImage: closet7, hint: ''},
        {id: 5, srcImage: closet8, hint: ''},
        {id: 6, srcImage: closet9, hint: ''},
        {id: 7, srcImage: closet10, hint: ''},
        {id: 8, srcImage: closet11, hint: ''},
        {id: 9, srcImage: closet12, hint: ''},
        {id: 10, srcImage: closet13, hint: ''},
        {id: 11, srcImage: closet14, hint: ''},
        {id: 12, srcImage: closet15, hint: ''},
    ]

    return(
        <div className={`${containerPadding} bg-second-color`}>
            <SubTitle title="Discover your bespoke furniture online!" desc='Over 14 352 customers are already enjoying their bespoke wardrobes from Maatkasten Online.Be inspired by some examples of made-to-measure closets.' />
            <div>
                <div className="flex flex-nowrap gap-4 overflow-x-auto overflow-y-hidden py-4">
                    {discoverItems.map((item) => (
                        <Link key={item.id} to={item.link} className="relative cursor-default flex-shrink-0 flex flex-col items-center justify-center text-center duration-150 hover:-mt-4">
                            <img className="rounded-xl h-60 md:h-80 xl:h-96" src={item.srcImage} alt={item.title} />
                            <h3 className="font-semibold text-xl mt-4">{item.title}</h3>
                            {item.hint && <p className="bg-white rounded-full p-1 px-3 absolute top-5 right-5 text-hint-color font-semibold text-sm tracking-widest">{item.hint}</p>}
                        </Link>
                    ))}
                </div>
            </div>
        </div>
    )
}