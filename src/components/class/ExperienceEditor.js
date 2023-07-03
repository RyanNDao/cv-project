import React, { Component } from 'react';
import ExperienceSectionEditor from './ExperienceEditorSection';

export default class ExperienceEditor extends Component{
    constructor(props){
        super(props);
    }

    render(){
        const { experienceInfo, appFunctions } = this.props;
        return (
            <div className="experience-editor-container">
                {
                    experienceInfo.map((job, idx)=>{
                        return <ExperienceSectionEditor idx={idx} job={job} key={job.id} appFunctions={appFunctions}></ExperienceSectionEditor>
                    })
                }
                {
                    (experienceInfo.length < 3) ? <button onClick={appFunctions.addExperience}>Add New Employment</button> : <></>
                }
            </div>
        )
    }
} 