import React from 'react';
export default function EducationSection({school}) {

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
