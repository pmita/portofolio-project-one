import React, { useState } from 'react';
import './style.scss';
//COMPONENTS
import Input from '../../components/Input';

const SignUpPage = () => {
    //STATE & VARIABLES
    const [signUpValues, setSignUpValues] = useState({
        username: '',
        email: '',
        password: '',
        confirmPassword: ''
    })

    const singUpInputs = [
        {
            id: 1,
            name: 'username',
            type: 'text',
            placeholder: 'Please enter your user name',
            label: 'Username',
            required: true,
            errorMessage: 'Username should be 3-16 characters and should not include any special characters',
            pattern: '^[A-Za-z0-9]{3,16}$',
            autoComplete: 'off'
        },
        {
            id: 2,
            name: 'email',
            type: 'email',
            placeholder: 'Please enter your email',
            label: 'Email',
            required: true,
            errorMessage: 'Please enter a valid email address',
            autoComplete: 'off'
        },
        {
            id: 3,
            name: 'password',
            type: 'password',
            placeholder: 'Please enter your password',
            label: 'Password',
            required: true,
            errorMessage: 'Password should be 8-20 characters and include at least 1 letter, 1 number, and 1 special character',
            pattern: `^(?=.*[0-9])(?=.*[a-zA-Z])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{8,20}$`,
            autoComplete: 'off'
        },
        {
            id: 4,
            name: 'confirmPassword',
            type: 'password',
            placeholder: 'Please confirm your password',
            label: 'Confirm Password',
            required: true,
            errorMessage: 'Passwords do not match',
            pattern: signUpValues.password,
            autoComplete: 'off'
        }
    ]

    //EVENTS
    const onSubmit = (e) => {
        e.preventDefault();
        console.log(signUpValues);
    }

    const onChange = (e) => {
        setSignUpValues({ ...signUpValues, [e.target.name]: e.target.value })
    }

    return(
        <div className='signup-page'>
            <h2>Sign Up</h2>
            <form onSubmit={onSubmit}>
                {singUpInputs.map((input) => (
                    <Input
                        key={input.id}
                        {...input}
                        value={signUpValues[input.name]}
                        onChange={onChange}
                    />
                ))}

                <button className='btn'>Sign Up</button>
            </form>
        </div>
    );
}

export default SignUpPage;