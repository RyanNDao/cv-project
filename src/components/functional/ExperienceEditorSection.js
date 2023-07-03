import React from 'react';
import InputField from './InputField';

export default function ExperienceEditorSection({job, idx, appFunctions}){
    return (
        <form className={`experience-editor-section-${idx}`}>
            <button className="delete-section" onClick={appFunctions.removeExperience}>X</button>
            <InputField type="text" value={job.companyName} label="Company Name"></InputField>
            <InputField type="text" value={job.positionTitle} label="Position Title"></InputField>
            <InputField type="text" value={job.positionDate} label="Date of Employment"></InputField>
            <div className={`job-description-container`}>
                <InputField type="text" value={job.jobDescriptions[0]} label="Job Descriptions"></InputField>
                <InputField type="text" value={job.jobDescriptions[1]} label=""></InputField>
                <InputField type="text" value={job.jobDescriptions[2]} label=""></InputField>
            </div>
            <button className="experience-section-edit" onClick={appFunctions.editExperience}>Edit Experience</button>
        </form>
    )
}