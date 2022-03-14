import React, { useState} from 'react';
import './style.scss';

const Input = (props) => {
    //STATE & VARIABLES
    const [isFocused, setIsFocused] = useState(false)
    const { label, onChange, id, errorMessage, ...inputProps } = props;

    //EVENTS
    const handleFocus = () => {
        setIsFocused(true);
    }

    return(
        <label>
            <span>{label}</span>
            <input
                {...inputProps}
                onChange={onChange}
                onBlur={handleFocus}
                onFocus={() => (inputProps.name === 'confirmPassword') && setIsFocused(true)}
                focused={isFocused.toString()}
            />
            <span className='error'>{errorMessage}</span>
        </label>
    );
}

export default Input;