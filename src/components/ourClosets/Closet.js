import ClosetItem from './ClosetItem';
import closet0 from '../../images/closet0.png';
import closet1 from '../../images/closet1.png';
import closet2 from '../../images/closet2.png';
import closet3 from '../../images/closet3.png';
import closet16 from '../../images/closet16.png';
import closet17 from '../../images/closet17.png';
import closet18 from '../../images/closet18.png';
import closet19 from '../../images/closet19.png';
import closet20 from '../../images/closet20.png';
import closet21 from '../../images/closet21.png';
import closet22 from '../../images/closet22.png';
import MapItems from '../MapItems';
import { containerPadding } from '../Context';
import Realizations from './Realizations';
import SubTitle from '../SubTitle';
import SplitSection from '../SplitSection';

export default function Closet(){
    const items1 = [
        {id: 1, srcImage: closet1, title: '100% the way you want it', desc: 'Choose the layout based on your wardrobe or desires, and add details that make your dressing room truly personalized. Shelves, drawers, clothes bar and/or clothes elevator: choose all the elements for a functional closet. Curious about a good layout for your closet? Get inspired.',},
        {id: 2, srcImage: closet2, title: 'All shapes possible', desc: 'Do you dream of a luxurious walk-in closet in U-shape? Or do you want to make the most of every inch and every corner with a practical closet in L-shape or a dressing room under a sloping roof? All shapes and designs are possible!',},
        {id: 3, srcImage: closet3, title: 'Lasting quality', desc: 'From doors and hinges to the drawers and scratch-free clothes bars, the quality of your custom closet goes beyond the standard with us. Count on absolute top quality of Belgian origin. So you not only increase your living comfort, but also the value of your home increases with a made-to-measure closet. Curious about the price tag?',},
    ]

    const items2 = [
        {id: 1, srcImage: closet16, title: 'Open or closed closet', desc: 'If the dressing room is in the bedroom, it is best to choose closed cabinets so as not to give the room a chaotic and tangled impression. If you have a separate room, then basically anything is possible: open or closed cabinets in the shape and design you want.',},
        {id: 2, srcImage: closet17, title: 'Classification according to wardrobe', desc: "Instead of ironing and then folding your clothes, maybe it's more convenient to hang them neatly right away? Therefore, provide plenty of hanging space (tip: keep long dresses in mind) and combine with shelves and/or drawers to store away socks or underwear, for example.",},
        {id: 3, srcImage: closet18, title: 'Finish off with convenient extras', desc: 'Finesse down to the smallest detail! Complete your dressing room with stylish finishes and clever details. Choose from fun handles, black hinges and black shelf supports to give your closet a unique look. A metallic or black clothes rail, or extra thick 36 mm shelves? Everything is possible!',},
    ]

    return(
        <div>
            <ClosetItem classNameParent='bg-second-color' classNameChild='bg-second-color' image={closet0} priority='img' rounded='notRounded' titleBtn='Custom design your dressing room' linkBtn='/#' title='Walk-in or closed wardrobes' desc='Imagine one place where your clothes, shoes and accessories are all at your fingertips. Ordered and organized to start your day stress-free but stylish. Sounds good, right? This is exactly what a bespoke dressing or closet means: a place where you enjoy picking out your outfit. Are you also dreaming of a customized dressing room?' />
            <div className={`${containerPadding}`}>
                <MapItems items={items1} place="start" />
            </div>
            <Realizations/>
            <div className={`px-4 lg:px-16 mt-16`}>
                <SubTitle title='Your custom-made dressing' desc="A custom dressing room can take many forms, so you have a lot of options in terms of finish and layout. Do you go for open or closed cabinets? In a luxurious U-shape or practical L-shape with corner cupboard? In one or more colors? We'll help you find the perfect closet for your space." />
            </div>
            <div className={`${containerPadding}`}>
                <MapItems items={items2} place="start" />
            </div>

            <SplitSection classNameParent='bg-second-color' classNameChild='bg-white' image={closet19} classNameImg="rounded-xl" priority='img' titleBtn='' linkBtn='/#' title='Request your free color samples' desc="Our custom cabinets adapt completely to your personal taste and interior, not the other way around. Whether you like modern, country or Scandinavian ... with the wide choice of colors and wood structures, you always create your own unique look. The finishing touch? Elegant and durable handles, whether you choose subtle, minimalist or striking design ... it's all possible!" />
            <SplitSection classNameParent='bg-white' classNameChild='bg-second-color' image={closet20} classNameImg="rounded-xl" priority='' hint='' titleBtn='' linkBtn='/#' title='Mix and match custom cabinetry' desc="The most ideal arrangement is different for everyone. Maybe you want to combine your tall dresser with a smaller commode or an closet island with a sofa? You decide. Create your favorite wall combination and enjoy all the convenience!" />
            <SplitSection classNameParent='bg-second-color' classNameChild='bg-white' image={closet21} classNameImg="" priority='img' hint='' titleBtn='' linkBtn='/#' title='Design your tailor-made closet' desc="A U-shaped dressing room? Open or closed? Choose, click and create your ideal closet online in a few easy steps. With the style, colors and finish you want." />
            <SplitSection classNameParent='bg-white' classNameChild='bg-second-color' image={closet22} classNameImg="" priority='' hint='new collection' titleBtn='Request free color samples' linkBtn='/#' title='Get your free color samples' desc="Want to see the closet colors in real life? Request free color samples and find out how your favorite colors look in your space." />

        </div>
    )
}