import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function NavIcon({icon, label}) {
    return (
        <div className={`flex gap-1 items-center hover:text-first-color duration-150 cursor-pointer`}>
        <FontAwesomeIcon size="xl" icon={icon} />
            {label && <span className="tracking-widest">{label}</span>}
        </div>
    );
}
