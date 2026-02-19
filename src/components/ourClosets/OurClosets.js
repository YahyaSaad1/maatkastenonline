import { containerPadding } from "../Context";
import SubTitle from "../SubTitle";
import Card from "./Card";
import closets1 from '../../images/closets1.png';
import closets2 from '../../images/closets2.png';
import closets3 from '../../images/closets3.png';
import closets4 from '../../images/closets4.png';
import closets5 from '../../images/closets5.png';
import closets6 from '../../images/closets6.png';
import closets7 from '../../images/closets7.png';
import closets8 from '../../images/closets8.png';
import closets9 from '../../images/closets9.png';
import closets10 from '../../images/closets10.png';
import closets11 from '../../images/closets11.png';
import closets12 from '../../images/closets12.png';

export default function OurClosets(){
    const closet = [
        {id: 1, image: closets1, title:'Walk-in or closed wardrobes', desc:'A convenient closet tailored to your wardrobe', to:'dddd'},
        {id: 2, image: closets2, title:'Storage cupboard', desc:'Your ideal storage cupboard', to:'dddd'},
        {id: 3, image: closets3, title:'Sideboard and chest of drawers', desc:'Made-to-measure low cabinets with doors or drawers', to:'dddd'},
        {id: 4, image: closets4, title:'TV unit', desc:'A bespoke TV unit for your home', to:'dddd'},
        {id: 5, image: closets5, title:'', desc:'Custom-made cupboard for your staircase', to:'dddd'},
        {id: 6, image: closets6, title:'Storage bench', desc:'Made-to-measure cupboard and cosy sofa in a single unit', to:'dddd'},
        {id: 7, image: closets7, title:'Hallway cupboard', desc:'Made-to-measure cupboards for coats and bags', to:'dddd'},
        {id: 8, image: closets8, title:'Closet island', desc:'The ultimate addition to your walk in dressing room', to:'dddd'},
        {id: 9, image: closets9, title:'Technical cabinet', desc:'Hide your pipes or meter box', to:'dddd'},
        {id: 10, image: closets10, title:'Wall unit', desc:'Combine a tall and low cabinet into one cohesive unit', to:'dddd'},
        {id: 10, image: closets11, title:'Laundry cabinet', desc:'For your custom laundry space with 1 to 4 appliances', to:'dddd'},
        {id: 10, image: closets12, title:'Ceiling cabinet', desc:'Create useful storage space with a wall cabinet.', to:'dddd'},
    ]

    return(
        <div className={`${containerPadding}`}>
            <SubTitle title='Our closets' classNameT='text-4xl' desc='With made-to-measure cupboards, you bring visual peace and maximise space utilisation. A made-to-measure cupboard from Maatkasten Online also helps you save in terms of time and money!' />
            <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-12">
                <Card data={closet} />
            </div>
        </div>
    )
}