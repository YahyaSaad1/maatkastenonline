import MobileMenu from "./MobileMenu";
import MainNav from "./MainNav";
import TopNav from "./TopNav";
import { useState } from "react";

export default function NavBar(){
    const topLinks = [
        {name: 'Promotions', to: '/Promotions'},
        {name: 'Inspiration', to: '/Inspiration'},
        {name: 'Showroom', to: '/Showroom'},
        {name: 'Customer service', to: '/customer-service'},
    ];

    const mainLinks = [
        {name: 'Our closets', to:'/our-closets'},
        {name: 'Shop', to:'/shop'},
        {name: 'Quality', to:'/quality'},
        {name: 'Tips', to:'/tips'},
        {name: 'Measurement service', to:'/measuring-service'},
    ]

    const [isOpen, setIsOpen] = useState(false);
    const toggleMenu = () => setIsOpen(prev => !prev);

    return(
        <div>
            <TopNav topLinks={topLinks} />
            <MainNav isOpen={isOpen} toggleMenu={toggleMenu} mainLinks={mainLinks} />
            <MobileMenu isOpen={isOpen} topLinks={topLinks} mainLinks={mainLinks} />
        </div>
    )
}