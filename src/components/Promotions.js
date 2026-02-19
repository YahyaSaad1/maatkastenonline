import { containerPadding } from "./Context";
import Card from "./ourClosets/Card";
import SubTitle from "./SubTitle";
import Promotions1 from '../images/Promotions-1.png';
import Promotions2 from '../images/Promotions-2.png';
import WinterDiscount from "./WinterDiscount";

export default function Promotions(){
    const closet = [
        {id: 1, image: Promotions1, title:"WINTER DISCOUNT: Limited time up to 20% off custom-made cabinets", desc:'#Offers', to:'/#'},
        {id: 1, image: Promotions2, title:'Win a magnificent Bloomon bouquet!', desc:'#Offers #News', to:'/#'},
        
    ]

    return(
        <div className={`${containerPadding}`}>
            <SubTitle title='Promotions' classNameT='text-4xl'/>
            <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-16">
                <Card data={closet} />
                <WinterDiscount titleDiscount='WINTER DISCOUNT' count='20' />
            </div>
        </div>
    )
}