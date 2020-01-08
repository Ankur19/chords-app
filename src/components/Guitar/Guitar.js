import React from "react";
import "./Guitar.css";
import GuitarString from "../GuitarString/GuitarString";

import guitarchords from "guitarchords";

const defaultTuning = ["E", "A", "D", "G", "B", "E"];

function Guitar(props){

    //props.numStrings --this is used to determine the number of guitar strings to show in ui
    //props.numFrets --this is to pass to guitarStrings to determine the width
    let guitarStrings = new Array(props.numStrings);
    for(let i=0;i<props.numStrings;i++){
        guitarStrings[i] = <GuitarString key={i} numFrets = {props.numFrets}></GuitarString>
    }

    guitarchords.prettyPrint();
    let scaleUsed = "";
    if(props.scale==="Maj"){
        scaleUsed = "MAJOR"
    }
    //let chordPositions = guitarChords.getPositions(tuning, props.note, scaleUsed, 1, props.numFrets);
    return <div id="guitar-container">
            <div id="guitar-tune-container">
                <div>Tuning</div>
            </div>
            <div id="guitar-string-container">{guitarStrings}</div>
        </div>
};

export default Guitar;