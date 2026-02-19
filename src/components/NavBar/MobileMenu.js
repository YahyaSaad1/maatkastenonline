import { faCartShopping, faHeart, faUser } from "@fortawesome/free-solid-svg-icons"
import NavIcon from "./NavIcon"
import { Link } from "react-router-dom";

export default function MobileMenu({topLinks, mainLinks, isOpen}){
    const buttonClass = "list-none flex flex-col gap-y-8";

    return(
        <div className={`${isOpen === true ? 'flex flex-col' : 'hidden'} lg:hidden absolute bg-white shadow-xl p-8 md:p-12 lg:p-16 xl:p-20 right-0 z-50`}>
            <ul className={buttonClass}>
                {topLinks.map((link)=>{
                    return(
                        <li key={link.name} className="hover:text-first-color text-xl duration-150 whitespace-nowrap cursor-pointer">{link.name}</li>
                    )
                })}
            </ul>

            <hr className="my-8 w-52"/>

            <div className="flex flex-col gap-8 mb-8">
                <NavIcon icon={faUser} label="Login" />
                <NavIcon icon={faHeart} label="Saved cabinets" />
                <NavIcon icon={faCartShopping} label="Shopping cart" />
            </div>

            <ul className={buttonClass}>
                {mainLinks.map((link)=>{
                    return(
                        <Link key={link.name} to={link.to} className="hover:text-first-color text-xl duration-150 whitespace-nowrap cursor-pointer">{link.name}</Link>
                    )
                })}
            </ul>
        </div>
    )
}