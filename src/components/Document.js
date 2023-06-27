import React, { Component } from 'react';
import Heading from './Heading';
import Education from './Education';
import Experience from './Experience';
import '../App.css';

export default class Document extends Component{
    constructor(props){
        super(props);
    }

    render(){
        const { headerInfo, education, experience } = this.props;
        return (
            <div className="document-container">
                <Heading headerInfo={headerInfo}/>
                <Education education={education}></Education>
                <Experience experience={experience}></Experience>
            </div>
        )
    }
} 