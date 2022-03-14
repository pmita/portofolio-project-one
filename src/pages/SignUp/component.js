import React from 'react';
import './style.scss';

const SignUpPage = () => {
    return(
        <div className='signup-page'>
            <h2>Sign Up</h2>
            <form>
                <label>
                    <span>Username</span>
                    <input
                        type='text'
                        placeholder='Please enter your user name'
                        required
                    />
                </label>
                <label>
                    <span>Email</span>
                    <input
                        type='email'
                        placeholder='Please enter your email'
                        required
                    />
                </label>
                <label>
                    <span>Password</span>
                    <input
                        type='password'
                        placeholder='Please enter your password'
                        required
                    />
                </label>
                <label>
                    <span>Password Match</span>
                    <input
                        type='text'
                        placeholder='Please re-type your password'
                        required
                    />
                </label>
            </form>
        </div>
    );
}

export default SignUpPage;