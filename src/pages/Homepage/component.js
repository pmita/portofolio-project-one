import React from 'react';
import './style.scss';
//HOOKS
import { useSignOut } from '../../hooks/useSignOut';

const HomePage = () => {
    //STATE & VARIABLES
    const { signout, isPending, error } = useSignOut();

    //EVENTS
    const handleClick = () => {
        signout();
    }
    return(
        <div>
            Welcome to HopePage.js component
            {error && <p className='error'>{error}</p>}
            {isPending && <p className='pending'>Loading...</p>}
            <button 
                className='btn' 
                onClick={handleClick}
            >
                Sign Out
            </button>
        </div>
    );
}

export default HomePage;