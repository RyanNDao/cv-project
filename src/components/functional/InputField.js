import React from 'react';


export default function InputField({type, id, label, value}) {
    return (
        <div className="input-field">
            <label htmlFor={id}>{label}</label>
            <input id={id} type={type} defaultValue={value}></input>
        </div>
    )
}
