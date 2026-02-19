import SplitSection from "./SplitSection";
import Quality1 from '../images/Quality1.png';
import Quality2 from '../images/Quality2.png';
import Quality3 from '../images/Quality3.png';
import QualityMin1 from '../images/QualityMin-1.png';
import QualityMin2 from '../images/QualityMin-2.png';
import QualityMin3 from '../images/QualityMin-3.png';
import QualityMin4 from '../images/QualityMin-4.png';
import QualityMin5 from '../images/QualityMin-5.png';
import QualityMin6 from '../images/QualityMin-6.png';
import QualityMin7 from '../images/QualityMin-7.png';
import QualityMin8 from '../images/QualityMin-8.png';
import QualityMin9 from '../images/QualityMin-9.png';
import MapItems from "./MapItems";
import { containerPadding } from "./Context";

export default function Quality(){
    const items = [
        {id: 1, srcImage: QualityMin7, title: 'Precision grooved handles',},
        {id: 2, srcImage: QualityMin8, title: 'High-quality design',},
        {id: 3, srcImage: QualityMin9, title: 'Fitted push-to-open system',},
    ]
    
    const items2 = [
        {id: 1, srcImage: QualityMin1, title: 'Blum hinges with a Soft-Close mechanism', desc: 'Blum is a top brand for furniture fittings. The secret to these award-winning hinges is their high quality and easy assembly.',},
        {id: 2, srcImage: QualityMin2, title: 'Award-winning Ta’Or box drawers with soft-close draw slides', desc: 'The drawers in your cabinet stand out due to their great finish and technology. They are high quality, fully bespoke, and can support a load of 40 kg.',},
        {id: 3, srcImage: QualityMin3, title: 'Sustainable sheet panels by Unilin in 23 colours', desc: 'Unilin is our partner for durable and decorative, high-quality sheet panels (melamine or mdf). Choose from 23 shades with everything from the most subtle wood textures to trendy colours.',},
        {id: 4, srcImage: QualityMin4, title: 'Solid back panels', desc: 'The back panels on our furniture are 8 mm thick and rigid. We’ve got your back!',},
        {id: 5, srcImage: QualityMin5, title: 'Ultra-strong base, always level', desc: 'The separate pedestal with feet guarantees extra sturdiness. You can adjust each foot individually; they keep your furniture level and can support a weight of up to 400 kg.',},
        {id: 6, srcImage: QualityMin6, title: 'Strong and scratch-resistant', desc: 'Your clothes rails or pull-down clothes rails are rigid (so they do not bend) and they are scratch-resistant. How about choosing a black or stainless-steel variant? You choose the look!',},
    ]
    return(
        <div>
            <SplitSection classNameParent='bg-white' classNameChild='bg-white' image={Quality1} classNameImg="rounded-xl" priority='img' titleBtn='' linkBtn='/#' title='Professional top quality' desc="Our fitted furniture is made in Belgium and guarantees the highest quality joinery. We bring professional, top-name brands directly to your home. There are no intermediate steps or intermediaries. We make the best value, best quality bespoke furniture for you. Want to know what motivates us? We have endless passion for our craft and for your cabinets and wardrobes!" />
            <div className={`bg-second-color ${containerPadding}`}>
                <MapItems items={items2} place="start" />
            </div>
            <SplitSection classNameParent='bg-white' classNameChild='bg-white' image={Quality2} classNameImg="rounded-xl" priority='img' titleBtn='' linkBtn='/#' title='Durable handles' desc="How about ultra-precise grooved handles, designer knobs or sleek handles? Each one of the 32 variants in the collection is a durable addition to your fitted wardrobe." />
            <div className={`${containerPadding}`}>
                <MapItems items={items} place="start" />
            </div>
            <SplitSection classNameParent='bg-white' classNameChild='bg-white' image={Quality3} classNameImg="rounded-xl" priority='img' titleBtn='' linkBtn='/#' title='Bespoke furniture made with Belgian workmanship' desc="We make your bespoke furniture in our factory in Maldegem. Our high-tech equipment guarantees that the joinery is precise, and our motivated team delivers impeccable quality. Our trusted partners for materials and logistics share the same requirements when it comes to quality. A perfect match! Our cabinets have been honoured with the Logistic Champion Award 2022 and nominated for the Schrijnwerk Award (Joinery Award)." />
        </div>
    )
}