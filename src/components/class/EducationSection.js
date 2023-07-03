import React, { Component } from 'react';


export default class EducationSection extends Component{
    constructor(props){
        super(props);

    }

    render(){
        const { school } = this.props;
        return (
            <div className="education-section">
                <div className="section-top">
                    <span>{school.schoolName}</span>
                    <span>{school.studyDate}</span>
                </div>
                <div className="section-bottom">
                    <span>{school.studyTitle}</span>
                </div>
            </div>
        )
    }
}
