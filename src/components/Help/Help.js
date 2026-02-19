import SubTitle from "../SubTitle";
import helpImg1 from "../../images/helpImg1.png";
import helpImg2 from "../../images/helpImg2.png";
import helpImg3 from "../../images/helpImg3.png";
import MapItems from "../MapItems";
import {containerPadding} from '../Context';

export default function Help(){
    const items = [
        {id: 1, srcImage: helpImg1, title: 'Visit our store', desc: 'Experience the full range in our Antwerp showroom. Get inspired and start your custom wardrobe project right away.',},
        {id: 2, srcImage: helpImg2, title: 'Tailored interior advice', desc: 'Our specialists are happy to assist you with layouts, colors, and details. This way you can be sure your wardrobe perfectly fits your interior. Book a free appointment.',},
        {id: 3, srcImage: helpImg3, title: 'Receive free color samples', desc: 'Take your favorite color samples straight from our store and view them at home in your own interior. Prefer to order online? We’ll send them to you for free.',},
    ]

    return(
        <div className={`${containerPadding} text-black`}>
            <SubTitle title="We help you choose" />
            <MapItems items={items} place="start" />
        </div>
    )
}