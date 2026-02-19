import { faFacebookF, faInstagram, faTiktok } from '@fortawesome/free-brands-svg-icons';
import { faLinkedin } from '@fortawesome/free-brands-svg-icons/faLinkedin';
export const side = 'px-4 lg:px-16';
export const containerPadding = 'px-4 lg:px-16 py-20';

export const FOOTER_DATA = [
    {
        id: 1,
        title: 'Maatkasten Online',
        links:[
            {id: 1, name: 'Over ons', to:'/#'},
            {id: 2, name: 'Inspiration', to:'/#'},
            {id: 3, name: 'Showroom', to:'/#'},
            {id: 4, name: 'Reviews', to:'/#'},
            {id: 5, name: 'Collaboration', to:'/#'},
            {id: 6, name: 'Professionals', to:'/#'},
        ]
    },
    {   
        id: 2,
        title: 'How can we help?',
        links:[
            {name: 'Account', to:'/#'},
            {name: 'Assembly instructions', to:'/#'},
            {name: 'Customer service', to:'/#'},
            {name: 'FAQ', to:'/#'},
            {name: 'Delivery', to:'/#'},
            {name: 'Returns, problems or damage', to:'/#'},
        ]
    },
]

export const socialMedia = [
    {id: 1, icon: faLinkedin, link:'https://www.facebook.com/yahyasaad24/'},
    {id: 2, icon: faFacebookF, link:'https://www.facebook.com/yahyasaad24/'},
    {id: 3, icon: faInstagram, link:'https://www.facebook.com/yahyasaad24/'},
    {id: 4, icon: faTiktok, link:'https://www.facebook.com/yahyasaad24/'},
    ]


