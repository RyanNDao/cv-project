import React from 'react';
import HeadingEditor from './HeadingEditor';
import EducationEditor from './EducationEditor'
import ExperienceEditor from './ExperienceEditor';

export default function Editor() {
    return (
        <div className="editor-container">
            <HeadingEditor/>
            <EducationEditor/>
            <ExperienceEditor/>
        </div>
    )
}