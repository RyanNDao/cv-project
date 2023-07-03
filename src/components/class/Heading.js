import React, { Component } from 'react';

export default class Heading extends Component{
    constructor(props){
        super(props);
        

    }

    
    

    render(){
        const { headerInfo } = this.props;
        return (
            <div className="heading-container">
                <p className="header-name">{headerInfo.name}</p>
                <p className="header-secondary">{headerInfo.email} | {headerInfo.phoneNumber}</p>
            </div>
        )
    }
} 