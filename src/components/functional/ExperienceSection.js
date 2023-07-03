import React from 'react';

export default function ExperienceSection({job}) {
    return (
        <div className="experience-section-containe">
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
