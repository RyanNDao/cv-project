import React, { Component } from 'react';
import InputField from './InputField';

export default class HeadingEditor extends Component{
    constructor(props){
        super(props);

    }

    render(){
        const { appFunctions } = this.props
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
} 