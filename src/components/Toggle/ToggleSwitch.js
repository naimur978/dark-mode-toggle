import React from 'react';
import   './ToggleSwitch.css';


export default function ToggleSwitch({toggled, handleClick}){
    return (
        <div onClick={handleClick} className={`toggle ${toggled? "night":""}`}>
        <div className="notch"/>
        <div>
            <div className="shape sm" />
            <div className="shape sm"/>
            <div className="shape md" />
            <div className="shape lg" />
        </div>
        </div>
    );
}