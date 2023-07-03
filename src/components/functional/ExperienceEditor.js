import React, { useContext } from 'react';
import ExperienceSectionEditor from './ExperienceEditorSection';
import { DataContext } from './App';

export default function ExperienceEditor(){
    const { experience, appFunctions } = useContext(DataContext); 
    return (
        <div className="experience-editor-container">
            <div className="experience-editor-container">
                {
                    experience.map((job, idx)=>{
                        return <ExperienceSectionEditor idx={idx} job={job} key={job.id} appFunctions={appFunctions}></ExperienceSectionEditor>
                    })
                }
                {
                    (experience.length < 3) ? <button onClick={appFunctions.addExperience}>Add New Employment</button> : <></>
                }
            </div>
        </div>
    )
}