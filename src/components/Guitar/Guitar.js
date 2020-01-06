import React from "react";
import "./Guitar.css";
import GuitarString from "../GuitarString/GuitarString";

function Guitar(props){

    //props.numStrings --this is used to determine the number of guitar strings to show in ui
    //props.numFrets --this is to pass to guitarStrings to determine the width
    let guitarStrings = new Array(props.numStrings);
    for(let i=0;i<props.numStrings;i++){
        guitarStrings[i] = <GuitarString key={i} numFrets = {props.numFrets}></GuitarString>
    }
return <div id="guitar-container"><div id="guitar-string-container">{guitarStrings}</div></div>
};

export default Guitar;