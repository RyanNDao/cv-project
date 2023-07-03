import React, { useState, createContext } from 'react';
import '../../App.css';
import Document from './Document';
import Editor from './Editor';
import uniqid from 'uniqid';

export const DataContext = createContext(null);


export default function App() {
    const [header, setHeader] = useState({
        name: 'John Doe',
        email: 'johndoe@example.com',
        phoneNumber: '1234567890'
    })

    const [educationList, setEducationList] = useState([
        {
            schoolName: 'Hello World School',
            studyTitle: 'Bachelors in Mathematics',
            studyDate: '03/07/2014 - 09/16/2018',
            id: uniqid()
        }
    ])

    const [experience, setExperience] = useState([
        {
            companyName: 'John Doe LLC',
            positionTitle: 'Chief Executive Officer',
            jobDescriptions : [
                'Managed 300 employees',
                'Fundraised $400,000 for charity'
            ],
            positionDate: '07/09/2021 - Present',
            id: uniqid()
        }
    ])

    const appFunctions = {
        submitHeaderInfo: function(event){
            event.preventDefault();
            const nameField = document.querySelector('#name');
            const emailField = document.querySelector('#email');
            const phoneField = document.querySelector('#phone-number');
            setHeader({
                name: nameField.value ? nameField.value : header.name,
                email: emailField.value ? emailField.value : header.email,
                phoneNumber: phoneField.value ? phoneField.value : header.phoneNumber
            })
            nameField.value = '';
            emailField.value = '';
            phoneField.value = '';
        },
        addEducation: function(event){
            event.preventDefault();
            setEducationList(
                educationList.concat({
                    schoolName: '',
                    studyTitle: '',
                    studyDate: '', 
                    id: uniqid()
                })
            )
        },
        editEducation: function(event){
            event.preventDefault();
            let deepCopy = educationList.map((education)=>({...education}));
            let parentClass = event.target.parentElement.className;
            let inputFields = document.querySelectorAll(`.${parentClass} input`);
            let newEducation = {
                schoolName: inputFields[0].value,
                studyTitle: inputFields[1].value,
                studyDate: inputFields[2].value,
                id: uniqid()
            }
            deepCopy[parentClass.at(-1)] = newEducation;
            setEducationList(
                deepCopy
            )
        },
        removeEducation: function(event){
            event.preventDefault();
            let idx = event.target.parentElement.className.at(-1);
            let deepCopy = educationList.map((education)=>({...education}));
            deepCopy.splice(idx, 1);
            setEducationList(
                deepCopy
            )
        },
        addExperience: function(event){
            event.preventDefault();
            setExperience(
                experience.concat({
                    companyName: '',
                    positionTitle: '',
                    jobDescriptions: [],
                    positionDate: '', 
                    id: uniqid()
                })
            )
        },
        editExperience: function(event){
            event.preventDefault();
            let deepCopy = experience.map((job)=>({...job}));
            let parentClass = event.target.parentElement.className;
            let inputFields = document.querySelectorAll(`.${parentClass} input`);
            let jobDescriptionList = [inputFields[3].value,inputFields[4].value,inputFields[5].value].filter((description)=>{
                return description != false
            })
            let newJob = {
                companyName: inputFields[0].value,
                positionTitle: inputFields[1].value,
                positionDate: inputFields[2].value,
                jobDescriptions: jobDescriptionList,
                id: uniqid()
            }
            deepCopy[parentClass.at(-1)] = newJob;
            setExperience(
                deepCopy
            )
        },
        removeExperience: function(event){
            event.preventDefault();
            let idx = event.target.parentElement.className.at(-1);
            let deepCopy = experience.map((job)=>({...job}));
            deepCopy.splice(idx, 1);
            setExperience(
                deepCopy
            )
        }
    }

     

    return (
        <DataContext.Provider value={{header, educationList, experience, appFunctions}}>
            <div className="app-container">
                <Document></Document>
                <Editor></Editor>
            </div>
        </DataContext.Provider>
        
    )
}

