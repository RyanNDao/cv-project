import React, { useContext } from 'react';
import InputField from './InputField';
import { DataContext } from './App.js';


export default function HeadingEditor() {
    const { appFunctions } = useContext(DataContext)
    
    return (
        <form className="heading-editor-container" onSubmit={appFunctions.submitHeaderInfo}>
            <InputField type="text" id="name" label="Name">
            </InputField>
            <InputField type="email" id="email" label="Email">
            </InputField>
            <InputField type="number" id="phone-number" label="Phone Number">
            </InputField>
            <button>Edit</button>
        </form>
    )
}