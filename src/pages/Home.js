import Banner from "../components/Banner/Banner";
import Customize from "../components/Customize";
import Discover from "../components/Discover/Discover";
import Help from "../components/Help/Help";
import SplitSection from "../components/SplitSection";
import WinterActie from '../images/winter-actie.png';
import Request from '../images/request.png';
import Measurement from '../images/measurement.png';
import Customers from "../components/Customers";
import Maatkasten from "../components/Maatkasten";
import Joinery from "../components/joinery/Joinery";

export default function Home(){
    return(
        <div>
            <Banner/>
            <Discover/>
            <Help/>
            <SplitSection classNameParent='bg-second-color' classNameChild='bg-accent-color' image={WinterActie} priority='img' titleBtn='View discount offer' linkBtn='/#' title='WINTER DISCOUNT up to -20%' desc='Temperatures are dropping, and so are our prices! Receive a discount of up to 20% on your customised cupboards. Design your custom made closets now and discover your savings immediately!' />
            <Joinery/>

            <Customize/>
            <SplitSection classNameParent='bg-second-color' classNameChild='bg-white' image={Request} priority='' hint='new collection' titleBtn='Échantillons de couleur gratuit' linkBtn='/#' title='Request your free color samples' desc='Do you want to choose the right color for your cabinet? Are you just curious? With our free color samples, find the perfect shade for your custom cabinets!' />
            <SplitSection classNameParent='bg-white' classNameChild='bg-second-color' image={Measurement} priority='img' hint='tip' titleBtn='Découvrez le service de mesure' linkBtn='/#' title='Even easier with the measurement service' desc="Our measurement expert brings a showroom to your home! Rely on them to advise you on the perfect layout, handle the technical aspects, present color options, and measure everything accurately... And last but not least, you'll receive a ready-to-use 3D project!" />
            <Customers/>
            <Maatkasten/>
        </div>
    )
}