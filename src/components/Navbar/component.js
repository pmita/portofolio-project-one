import React from 'react';
import './style.scss';
//ASSETS
import searchIcon from '../../assets/icons/search.svg';
import burgerIcon from '../../assets/icons/burger.svg';

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
        </nav>
    );
}

export default Navbar;