import { faFaceSmile } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function Customers(){
    return(
        <div className="bg-first-color p-12 text-center text-white flex justify-center items-center gap-2">
            <FontAwesomeIcon size="2xl" color="white" icon={faFaceSmile} />
            <p className="font-semibold text-xl tracking-wider">More than <strong className="font-semibold text-3xl">24 900 </strong>customers are already proud owners</p>
        </div>
    )
}