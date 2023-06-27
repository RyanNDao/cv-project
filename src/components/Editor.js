import React, { Component } from 'react';
import HeadingEditor from './HeadingEditor';
import EducationEditor from './EducationEditor'
import ExperienceEditor from './ExperienceEditor';

export default class Heading extends Component{
    constructor(props){
        super(props);

    }

    render(){
        const { appFunctions, stateInfo } = this.props;
        return (
            <div className="editor-container">
                <HeadingEditor appFunctions={appFunctions}>
                </HeadingEditor>
                <EducationEditor educationInfo={stateInfo.educationList} appFunctions={appFunctions}>
                </EducationEditor>
                <ExperienceEditor experienceInfo={stateInfo.experience} appFunctions={appFunctions}>
                </ExperienceEditor>
            </div>
        )
    }
} 