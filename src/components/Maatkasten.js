import SubTitle from "./SubTitle";
import {containerPadding} from './Context';

export default function Maatkasten(){
    return(
        <div className={`${containerPadding} bg-white`}>
            <SubTitle classNameT="tracking-wider" title='"The cabinets from Maatkasten Online arrived on time!"' />
            <p className="text-center font-semibold uppercase tracking-widest text-neutral-400">Dina Tersago, Huis Gemaakt (VTM)</p>
            <p className="text-center font-semibold uppercase tracking-widest mt-12">We're famous! You know us from VTM, StuBru and many more</p>
        </div>
    )
}