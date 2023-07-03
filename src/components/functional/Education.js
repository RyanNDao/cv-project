import React, { useContext } from 'react';
import EducationSection from './EducationSection';
import { DataContext } from './App.js';

export default function Heading() {
    const { educationList } = useContext(DataContext);
    return (
        <div className="education-container">
            { educationList.length > 0 ? <p>Education History</p> : <></> }
                {
                    educationList.map((section, idx)=>{
                        return <EducationSection key={idx} school={section}></EducationSection>
                    })
                }
        </div>
    )
}
