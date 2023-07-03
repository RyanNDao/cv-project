import React, { Component } from 'react';
import ExperienceSection from './ExperienceSection';

export default class Experience extends Component{
    constructor(props){
        super(props);
    }

    render(){
        const { experience } = this.props;
        return (
            <div className="experience-container">
                { experience.length > 0 ? <p>Relevant Experience</p> : <></> }
                {
                    experience.map((job, idx)=>{
                        return <ExperienceSection key={idx} job={job}></ExperienceSection>
                    })
                }
            </div>
        )
    }
} 