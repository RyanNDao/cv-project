import React, { Component } from 'react';
import EducationEditorSection from './EducationEditorSection';


export default class EducationEditor extends Component{
    constructor(props){
        super(props);
    }

    render(){
        const { educationInfo, appFunctions } = this.props;
        return (
            <div className="education-editor-container">
                { 
                    educationInfo.map((school, idx)=>{
                        return <EducationEditorSection appFunctions={appFunctions} key={school.id} school={school} className={`education-editor-section-${idx}`}></EducationEditorSection>
                    })
                }
                {
                    (educationInfo.length < 2) ? <button onClick={appFunctions.addEducation}>Add New Education</button> : <></>
                }
            </div>
        )
    }
}