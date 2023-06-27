import React, { Component } from 'react';

export default class ExperienceSection extends Component{
    constructor(props){
        super(props);
    }

    render(){
        const { job } = this.props;
        return (
            <div className="experience-section-container">
                <div className="section-top">
                    <span>{job.companyName}</span>
                    <span>{job.positionDate}</span>
                </div>
                <div className="section-bottom">
                    <span>{job.positionTitle}</span>
                </div>
                
                
                
                <ul>
                    {
                        job.jobDescriptions.map((description)=>{
                            return <li>{description}</li>
                        })
                    }  
                </ul>
            </div>
        )
    }
} 