import { Link } from "react-router-dom";

export default function BtnLink({className, title, link}){
    return(
        <Link to={link} className={`flex w-fit font-semibold text-md border-2 py-2 px-8 rounded-full bg-first-color border-first-color text-white hover:bg-hover-first-color hover:b-hover-first-color duration-150 cursor-pointer ${className}`}>
            <span className="whitespace-nowrap">{title}</span>
        </Link>
    )
}