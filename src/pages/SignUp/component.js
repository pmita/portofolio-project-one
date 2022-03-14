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
            required: true
        },
        {
            id: 2,
            name: 'email',
            type: 'email',
            placeholder: 'Please enter your email',
            label: 'Email',
            required: true
        },
        {
            id: 3,
            name: 'password',
            type: 'password',
            placeholder: 'Please enter your password',
            label: 'Password',
            required: true
        },
        {
            id: 4,
            name: 'confirmPassword',
            type: 'password',
            placeholder: 'Please confirm your password',
            label: 'Confirm Password',
            required: true
        }
    ]

    //EVENTS
    const onChange = (e) => {
        setSignUpValues({ ...signUpValues, [e.target.name]: e.target.value })
    }

    return(
        <div className='signup-page'>
            <h2>Sign Up</h2>
            <form>
                
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