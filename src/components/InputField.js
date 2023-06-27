import React, { Component } from 'react';

export default class InputField extends Component{
    constructor(props){
        super(props);
    }

    render(){

        const {type, id, label, value} = this.props;

        return (
            <div className="input-field">
                <label htmlFor={id}>{label}</label>
                <input id={id} type={type} defaultValue={value}></input>
            </div>
        )
    }
} 