import React, { Component } from 'react';
import InputField from './InputField';


export default class EducationEditorSection extends Component{
    constructor(props){
        super(props);

    }

    render(){
        const {className, school, appFunctions } = this.props;
        return (
            <form className={className}>
                <button className="delete-section" onClick={appFunctions.removeEducation}>X</button>
                <InputField type="text" value={school.schoolName} label="School Name"></InputField>
                <InputField type="text" value={school.studyTitle} label="Title of Study"></InputField>
                <InputField type="text" value={school.studyDate} label="Date of Study"></InputField>
                <button className="education-section-edit" onClick={appFunctions.editEducation}>Edit Section</button>
            </form>
        )
    }
}