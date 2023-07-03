import React from 'react';
import Heading from './Heading';
import Education from './Education';
import Experience from './Experience';

export default function Document() {
    return (
        <div className="document-container">
            <Heading/>
            <Education/>
            <Experience/>
        </div>
    )
}
