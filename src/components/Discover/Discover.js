import SubTitle from "../SubTitle";
import img1 from "../../images/img1.png";
import img2 from "../../images/img2.png";
import img3 from "../../images/img3.png";
import img4 from "../../images/img4.png";
import img5 from "../../images/img5.png";
import { Link } from "react-router-dom";
import {containerPadding} from '../Context';

export default function Discover(){
    const discoverItems = [
        {id: 1, srcImage: img1, discount: '15', link: 'our-closets/closet/1', title:'Walk-in or closed wardrobes',},
        {id: 2, srcImage: img2, discount: '20', link: 'our-closets/closet/1', title:'Storage cupboard',},
        {id: 3, srcImage: img3, discount: '15', link: 'our-closets/closet/1', title:'Sideboard and chest of drawers',},
        {id: 4, srcImage: img4, discount: '20', link: 'our-closets/closet/1', title:'TV unit',},
        {id: 5, srcImage: img5, discount: '15', link: 'our-closets/closet/1', title:'Stair cupboard',},
    ]

    return(
        <div className={`${containerPadding} bg-second-color`}>
            <SubTitle title="Discover your bespoke furniture online!" />
            <div>
                <div className="flex flex-nowrap gap-4 overflow-x-auto overflow-y-hidden py-4">
                    {discoverItems.map((item) => (
                        <Link key={item.id} to={item.link} className="relative cursor-pointer flex-shrink-0 flex flex-col items-center justify-center text-center duration-150 hover:-mt-4">
                            <img className="rounded-xl h-60" src={item.srcImage} alt={item.title} />
                            <h3 className="font-semibold text-xl mt-4">{item.title}</h3>
                            <p className="bg-white rounded-full p-1 px-3 absolute top-5 right-5 text-hint-color font-semibold text-sm tracking-widest">-{item.discount}%</p>
                        </Link>
                    ))}
                </div>
            </div>
        </div>
    )
}