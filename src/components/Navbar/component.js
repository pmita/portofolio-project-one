import React, { useState } from 'react';
import './style.scss';
//ASSETS
import searchIcon from '../../assets/icons/search.svg';
import burgerIcon from '../../assets/icons/burger.svg';
import { navLinks } from '../../assets/variables/navLinks';

const Navbar = () => {
    //STATE & VARIABLES
    const [isHidden, setIsHidden] = useState(false);

    //EVENTS
    const handleClick = () => {
        setIsHidden(!isHidden)
    }
    return(
        <nav>
            <span>
                <img 
                    className='nav-svg' 
                    src={burgerIcon} 
                    alt='burger menu' 
                    onClick={handleClick}
                />
            </span>
            <span>
                <img 
                    className='nav-svg' 
                    src={searchIcon} 
                    alt='burger menu' 
                />
            </span>

            <ul className={isHidden ? 'nav-routes active' : 'nav-routes'}>
                {navLinks.map(({ icon, altText, navText }) => (
                    <li>
                        <img src={icon} alt={altText} />
                        <span>{navText}</span>
                    </li>
                ))}
            </ul>
        </nav>
    );
}

export default Navbar;