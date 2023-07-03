import React, { Component } from 'react';
import EducationSection from './EducationSection';

export default class Education extends Component{
    constructor(props){
        super(props);

    }

    render(){
        const { education } = this.props
        return (
            <div className="education-container">
                { education.length > 0 ? <p>Education History</p> : <></> }
                {
                    education.map((section, idx)=>{
                        return <EducationSection key={idx} school={section}></EducationSection>
                    })
                }
            </div>
        )
    }
}
