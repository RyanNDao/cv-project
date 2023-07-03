import React, { Component } from 'react';
import '../../App.css';
import Document from './Document';
import Editor from './Editor';
import uniqid from "uniqid";


export default class App extends Component{
    constructor(){
        super();

        this.state = {
            header: {
                name: 'John Doe',
                email: 'johndoe@example.com',
                phoneNumber: '1234567890'
            },
            educationList: [
                {
                    schoolName: 'Hello World School',
                    studyTitle: 'Bachelors in Mathematics',
                    studyDate: '03/07/2014 - 09/16/2018',
                    id: uniqid()
                }
            ],
            experience: [
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
            ]
        }

        this.appFunctions = {
            submitHeaderInfo: function(event){
                event.preventDefault();
                const nameField = document.querySelector('#name');
                const emailField = document.querySelector('#email');
                const phoneField = document.querySelector('#phone-number');
                this.setState({
                    header:{
                        name: nameField.value ? nameField.value : this.state.header.name,
                        email: emailField.value ? emailField.value : this.state.header.email,
                        phoneNumber: phoneField.value ? phoneField.value : this.state.header.phoneNumber
                    }
                })
                nameField.value = '';
                emailField.value = '';
                phoneField.value = '';
            },
            addEducation: function(event){
                event.preventDefault();
                this.setState({
                    educationList: this.state.educationList.concat({
                        schoolName: '',
                        studyTitle: '',
                        studyDate: '', 
                        id: uniqid()
                    })
                })
            },
            editEducation: function(event){
                event.preventDefault();
                let deepCopy = this.state.educationList.map((education)=>({...education}));
                let parentClass = event.target.parentElement.className;
                let inputFields = document.querySelectorAll(`.${parentClass} input`);
                let newEducation = {
                    schoolName: inputFields[0].value,
                    studyTitle: inputFields[1].value,
                    studyDate: inputFields[2].value,
                    id: uniqid()
                }
                deepCopy[parentClass.at(-1)] = newEducation;
                this.setState({
                    educationList: deepCopy
                })
            },
            removeEducation: function(event){
                event.preventDefault();
                let idx = event.target.parentElement.className.at(-1);
                let deepCopy = this.state.educationList.map((education)=>({...education}));
                deepCopy.splice(idx, 1);
                this.setState({
                    educationList: deepCopy
                })
            },
            addExperience: function(event){
                event.preventDefault();
                this.setState({
                    experience: this.state.experience.concat({
                        companyName: '',
                        positionTitle: '',
                        jobDescriptions: [],
                        positionDate: '', 
                        id: uniqid()
                    })
                })
            },
            editExperience: function(event){
                event.preventDefault();
                let deepCopy = this.state.experience.map((job)=>({...job}));
                let parentClass = event.target.parentElement.className;
                let inputFields = document.querySelectorAll(`.${parentClass} input`);
                let jobDescriptionList = [inputFields[3].value,inputFields[4].value,inputFields[5].value].filter((description)=>{
                    return description != false
                })
                console.log(jobDescriptionList)
                let newJob = {
                    companyName: inputFields[0].value,
                    positionTitle: inputFields[1].value,
                    positionDate: inputFields[2].value,
                    jobDescriptions: jobDescriptionList,
                    id: uniqid()
                }
                deepCopy[parentClass.at(-1)] = newJob;
                this.setState({
                    experience: deepCopy
                })
                
            },
            removeExperience: function(event){
                event.preventDefault();
                let idx = event.target.parentElement.className.at(-1);
                let deepCopy = this.state.experience.map((job)=>({...job}));
                deepCopy.splice(idx, 1);
                this.setState({
                    experience: deepCopy
                })
            },
        }
        this.appFunctions = {
            submitHeaderInfo: this.appFunctions.submitHeaderInfo.bind(this),
            addEducation: this.appFunctions.addEducation.bind(this),
            editEducation: this.appFunctions.editEducation.bind(this),
            removeEducation: this.appFunctions.removeEducation.bind(this),
            addExperience: this.appFunctions.addExperience.bind(this),
            editExperience: this.appFunctions.editExperience.bind(this),
            removeExperience: this.appFunctions.removeExperience.bind(this),
        };

        
    }
    
    

    render(){

        return (
            <div className="app-container">
                <Document headerInfo={this.state.header} education={this.state.educationList} experience={this.state.experience}/>
                <Editor stateInfo={this.state} appFunctions={this.appFunctions}/>
            </div>
        )
    }
} 