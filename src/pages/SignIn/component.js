import React, { useState } from 'react';
import './style.scss';
//COMPONENTS
import Input from '../../components/Input';

const SignInPage = () => {
    //STATE & VARIABLES
    const [signInValues, setSignInValues] = useState({
        email: '',
        password: '',
    })

    const singUpInputs = [
        {
            id: 1,
            name: 'email',
            type: 'email',
            placeholder: 'Please enter your email',
            label: 'Email',
            required: true,
            errorMessage: 'Please enter a valid email address',
            autoComplete: 'on'
        },
        {
            id: 2,
            name: 'password',
            type: 'password',
            placeholder: 'Please enter your password',
            label: 'Password',
            required: true,
            errorMessage: 'Password should be 8-20 characters and include at least 1 letter, 1 number, and 1 special character',
            pattern: `^(?=.*[0-9])(?=.*[a-zA-Z])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{8,20}$`,
            autoComplete: 'on'
        },
    ]

    //EVENTS
    const onSubmit = (e) => {
        e.preventDefault();
        console.log(signInValues);
    }

    const onChange = (e) => {
        setSignInValues({ ...signInValues, [e.target.name]: e.target.value })
    }

    return(
        <div className='signin-page'>
            <h2>Sign In</h2>
            <form onSubmit={onSubmit}>
                {singUpInputs.map((input) => (
                    <Input
                        key={input.id}
                        {...input}
                        value={signInValues[input.name]}
                        onChange={onChange}
                    />
                ))}

                <button className='btn'>Sign In</button>
            </form>
        </div>
    );
}

export default SignInPage;