import { faPhone, faCartShopping, faHeart, faUser } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import NavIcon from "./NavIcon";
import {side} from '../Context';
import { Link } from "react-router-dom";

export default function TopNav({topLinks}){
    return(
        <div className={`${side} hidden lg:flex gap-x-16 py-3 bg-second-color justify-between items-center`}>
                <div>
                    <div className="flex gap-2 items-center hover:text-first-color duration-150 cursor-pointer">
                        <FontAwesomeIcon icon={faPhone} />
                        <span className="font-medium tracking-widest">+201127471188</span>
                    </div>
                </div>

                <div className="flex gap-x-16">
                    <div className="flex">
                        <ul className="list-none flex gap-6">
                            {topLinks.map((link)=>{
                                return(
                                    <Link key={link.name} to={link.to} className="hover:text-first-color duration-150 whitespace-nowrap cursor-pointer">{link.name}</Link>
                                )
                            })}
                        </ul>
                    </div>

                    <div className="flex gap-2 items-center">
                        <NavIcon icon={faUser} label="Login" />
                        <NavIcon icon={faHeart} />
                        <NavIcon icon={faCartShopping} />
                    </div>
                </div>
        </div>
    )
}