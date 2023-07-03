import React, { useContext } from 'react';
import ExperienceSection from './ExperienceSection';
import { DataContext } from './App';

export default function Experience() {
    const { experience } = useContext(DataContext)
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
