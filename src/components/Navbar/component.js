import React from 'react';
import './style.scss';
//ASSETS
import searchIcon from '../../assets/icons/search.svg';
import burgerIcon from '../../assets/icons/burger.svg';
import userIcon from '../../assets/icons/user.svg';
import heartIcon from '../../assets/icons/heart.svg';
import globeIcon from '../../assets/icons/globe-americas.svg';
import messageIcon from '../../assets/icons/message-text-alt.svg';
import bulbIcon from '../../assets/icons/bulb-on.svg';
import cogIcon from '../../assets/icons/cog.svg';

const Navbar = () => {
    return(
        <nav>
            <span>
                <img 
                    className='nav-svg' 
                    src={burgerIcon} 
                    alt='burger menu' 
                />
            </span>
            <span>
                <img 
                    className='nav-svg' 
                    src={searchIcon} 
                    alt='burger menu' 
                />
            </span>

            <ul className='nav-routes'>
                <li>
                    <img src={userIcon} alt='user profile button' />
                    <span>Profile</span>
                </li>
                <li>
                    <img src={heartIcon} alt='liked songs button' />
                    <span>Liked Songs</span>
                </li>
                <li>
                    <img src={globeIcon} alt='language button' />
                    <span>Language</span>
                </li>
                <li>
                    <img src={messageIcon} alt='contact us button' />
                    <span>Contact us</span>
                </li>
                <li>
                    <img src={bulbIcon} alt='FAQs button' />
                    <span>FAWs</span>
                </li>
                <li>
                    <img src={cogIcon} alt='settings button' />
                    <span>Settings</span>
                </li>
            </ul>
        </nav>
    );
}

export default Navbar;