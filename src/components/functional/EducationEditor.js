import React, { useContext } from 'react';
import EducationEditorSection from './EducationEditorSection';
import { DataContext } from './App';


export default function EducationEditor() {
    const { educationList, appFunctions } = useContext(DataContext);
    console.log(educationList)
    return (
        <div className="education-editor-container">
            { 
                educationList.map((school, idx)=>{
                    return <EducationEditorSection appFunctions={appFunctions} key={school.id} school={school} className={`education-editor-section-${idx}`}></EducationEditorSection>
                })
            }
            {
                (educationList.length < 2) ? <button onClick={appFunctions.addEducation}>Add New Education</button> : <></>
            }
        </div>
    )
}