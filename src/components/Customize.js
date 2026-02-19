import customize1 from "../images/customize1.png";
import customize2 from "../images/customize2.png";
import customize3 from "../images/customize3.png";
import MapItems from "./MapItems";
import SubTitle from "./SubTitle";
import {containerPadding} from './Context';

export default function Customize(){
        const items = [
        {id: 1, srcImage: customize1, title: 'Tailor-made for any space', desc: 'From wall to wall or under the roof? Anything is possible.',},
        {id: 2, srcImage: customize2, title: 'The perfect layout', desc: 'Drawers, shelves, clothing rods... Let your ideas run wild!',},
        {id: 3, srcImage: customize3, title: 'Matching your interior', desc: 'From colors to handles, the style is yours!',},
    ]

    return(
        <div className={`${containerPadding} text-black`}>
            <SubTitle title="Customize your bespoke cabinets online" />
            <MapItems items={items} place="center" />
        </div>
    )
}