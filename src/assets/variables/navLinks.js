import userIcon from '../icons/user.svg';
import heartIcon from '../icons/heart.svg';
import globeIcon from '../icons/globe-americas.svg';
import messageIcon from '../icons/message-text-alt.svg';
import bulbIcon from '../icons/bulb-on.svg';
import cogIcon from '../icons/cog.svg';

export const navLinks = [
    {
        id: 1,
        icon: userIcon,
        altText : 'user profile button',
        navText: 'Profile',
        route: '/profile'
    },
    {
        id: 2,
        icon: heartIcon,
        altText : 'liked songs button',
        navText: 'Liked Songs',
        route: '/favourites'
    },
    {
        id: 3,
        icon: globeIcon,
        altText : 'language button',
        navText: 'Language',
        route: '/language'
    },
    {
        id: 4,
        icon: messageIcon,
        altText : 'contact us button',
        navText: 'Contact us',
        route: '/contact'
    },
    {
        id: 5,
        icon: bulbIcon,
        altText : 'FAQs button',
        navText: 'FAQs',
        route: '/faq'
    },
    {
        id: 6,
        icon: cogIcon,
        altText : 'settings button',
        navText: 'Settings',
        route: '/settings'
    }
]
