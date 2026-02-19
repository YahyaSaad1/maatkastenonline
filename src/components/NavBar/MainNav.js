import { faCartShopping, faHeart, faUser, faBars, faXmark } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Logo from '../../images/logo.png';
import NavIcon from "./NavIcon";
import { Link } from "react-router-dom";
import BtnLink from "../BtnLink";
import {side} from '../Context';

export default function MainNav({mainLinks, toggleMenu, isOpen}){
    return(
        <div className={`${side} gap-x-16 flex justify-between items-center`}>
                <div>
                    <img src={Logo} alt="Logo" className="h-20 w-auto cursor-pointer" />
                </div>
                <div className="gap-x-8 flex items-center">
                    <div className="hidden lg:flex">
                        <ul className="list-none flex gap-6">
                            {mainLinks.map((link)=>{
                                return(
                                    <Link key={link.name} to={link.to} className="hover:text-first-color text-lg duration-150 whitespace-nowrap cursor-pointer">{link.name}</Link>
                                )
                            })}
                        </ul>
                    </div>

                    <div className="hidden lg:flex gap-x-8">
                        <Link className="font-semibold text-md border-2 py-2 px-8 rounded-full text-first-color border-first-color hover:bg-hover-first-color hover:text-white duration-150 cursor-pointer">
                            <span className="whitespace-nowrap">Free color samples</span>
                        </Link>
                        <BtnLink title="Design your closet" />
                    </div>

                    <div className="flex lg:hidden gap-2 items-center">
                        <NavIcon icon={faUser} label="Login" />
                        <NavIcon icon={faHeart} />
                        <NavIcon icon={faCartShopping} />
                    </div>

                    <div className="flex flex-col lg:hidden hover:text-first-color duration-150 cursor-pointer">
                        <FontAwesomeIcon onClick={toggleMenu} size="xl" icon={isOpen ? faXmark : faBars} />
                    </div>
                </div>
        </div>
    )
}