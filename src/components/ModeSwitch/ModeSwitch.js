import React from 'react';
import './ModeSwitch.css';

//only props needed is currentMode && onModeChange
//options for currentMode: light & dark
//onModeChange needs the current mode clickedas param
function ModeSwitch(props){
    let selectedClass = "mode-switch-button mode-switch-selected";
    let unselectedClass = "mode-switch-button";
    let buttons;
    if (props.currentMode==="light"){
        buttons = <div id="mode-buttons"><div className={selectedClass} onClick={() =>{props.onModeChange("light")}}>Light</div><div className={unselectedClass} onClick={() =>{props.onModeChange("dark")}}>Dark</div></div>;
    }
    else{
        buttons = <div id="mode-buttons"><div className={unselectedClass} onClick={() =>{props.onModeChange("light")}}>Light</div><div className={selectedClass} onClick={() =>{props.onModeChange("dark")}}>Dark</div></div>;
    }

    return (<div id="mode-switch">
        <p id="mode-switch-text">UI Mode</p>
        {buttons}
    </div>);
};
export default ModeSwitch;