import Card from "./ourClosets/Card";
import Tips1 from '../images/Tips-1.png';
import Tips2 from '../images/Tips-2.png';
import Tips3 from '../images/Tips-3.png';
import Tips4 from '../images/Tips-4.png';
import Tips5 from '../images/Tips-5.png';
import Tips6 from '../images/Tips-6.png';
import SubTitle from "./SubTitle";
import { containerPadding } from "./Context";

export default function Tips(){
    const closet = [
        {id: 1, image: Tips1, title:"It's easy to measure up yourself", desc:'Tape measure at the ready? Check! Take a look at these tips for hassle-free measurement!', to:'/#'},
        {id: 1, image: Tips2, title:'Measuring service', desc:'Our measuring expert will visit you at home to measure up and give you advice on your perfect cabinet or wardrobe!', to:'/#'},
        {id: 1, image: Tips3, title:'Free measurement guarantee', desc:"Order with confidence, even if you measure your space yourself. Does your cabinet not fit due to a measurement error? We'll resolve it together!", to:'/#'},
        {id: 1, image: Tips4, title:'Easy to assemble', desc:'You don’t have to be a DIY expert. Anyone can put together our made-to-measure wardrobes.', to:'/#'},
        {id: 1, image: Tips5, title:'Everything about the delivery', desc:'Find out everything you need to know about delivery here, including the timeframe, choosing the delivery date, ground floor delivery, the package, and more.', to:'/#'},
        {id: 1, image: Tips6, title:'Infill panels: everything you need to know', desc:'Everything about the unique infill panel system of your custom wardrobe.', to:'/#'},
        
    ]

    return(
        <div className={`${containerPadding}`}>
            <SubTitle title='Tips & tricks' classNameT='text-4xl' desc='Want to make it easy to design and install your bespoke furniture? Our tips & tricks will certainly come in handy. Measurement and installation have never been so easy!' />
            <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-16">
                <Card data={closet} />
            </div>
        </div>
    )
}