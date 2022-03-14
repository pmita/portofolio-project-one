import React from 'react';
import './style.scss';

const Input = (props) => {
    //STATE & VARIABLES
    const { label, onChange, id, ...inputProps } = props;

    return(
        <label>
            <span>{label}</span>
            <input
                {...inputProps}
                onChange={onChange}
            />
        </label>
    );
}

export default Input;