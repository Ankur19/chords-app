import React from "react";
import "./Body.css";
import Guitar from "../Guitar/Guitar";
import OptionSelector from "../OptionSelector/OptionSelector";
const guitarChords = require("../../guitarchords_custom/guitarchords.node");

const notes = ["A", "A#", "B", "C", "C#", "D", "D#", "E", "F", "F#", "G", "G#"];

function Body(props){
    //props.currentMode  - valid values (light && dark)
    let mainBodyClass="body-main-div body-dark";
    if(props.currentMode==="light"){
        mainBodyClass="body-main-div body-light";
    }

    let selectors = [];

    selectors.push(<OptionSelector key={1} currentMode={props.currentMode} selectorName = "Chord" selectorOptions={notes}></OptionSelector>);

    return <div className={mainBodyClass}>
<div id="body-main-selctors-container">{selectors}</div>
        <Guitar numStrings={6} numFrets={5}></Guitar>
    </div>
}
export default Body;