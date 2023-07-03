import React, { useContext } from 'react';
import { DataContext } from './App.js'


export default function Heading() {
    const { header } = useContext(DataContext)
    
    return (
        <div className="heading-container">
            <p className="header-name">{header.name}</p>
            <p className="header-secondary">{header.email} | {header.phoneNumber}</p>
        </div>
    )
}
