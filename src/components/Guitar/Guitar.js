import React from "react";
import "./Guitar.css";
import GuitarString from "../GuitarString/GuitarString";
import Tuning from "../Tuning/Tuning";



const stringNotes = ["A", "A#", "B", "C", "C#", "D", "D#", "E", "F", "F#", "G", "G#", "A", "A#", "B", "C", "C#", "D", "D#", "E", "F", "F#", "G", "G#"];

function getFretNotes(openNote, startFret, numFrets){
    let startIndex = -1;
    for(let i=0;i<12;i++){
        if(stringNotes[i]===openNote){
            startIndex=i;
            break;
        }
    }
    let fretNotes=[];
    fretNotes.push(openNote);
    return fretNotes.concat(stringNotes.slice(startIndex+startFret, startIndex+startFret+numFrets));
}




function Guitar(props){

    //props.numStrings --this is used to determine the number of guitar strings to show in ui
    //props.numFrets --this is to pass to guitarStrings to determine the width
    //props.tuning --this is for the module input
    //use custom node module to get the shapes
    
    let chordNotes = new Array(props.numStrings);
    if(props.positions.all.length>0){
        chordNotes = props.positions.all[props.positions.current].split("-");
    }
    else{
        for(let i=0;i<props.numStrings;i++){
            chordNotes[i] = "X";
        }
    }

    let guitarStrings = [];
    for(let i=0;i<props.numStrings;i++){
        let fretNotes = getFretNotes(props.tuning[i], props.startFret, props.numFrets)
        guitarStrings.push(<GuitarString currentMode={props.currentMode} key={i} numFrets = {props.numFrets} currentSelectedNote={chordNotes[i]} fretNotes={fretNotes}></GuitarString>);
    }
    let currentNoteDivs = new Array(props.numStrings);

    for(let i=0;i<chordNotes.length;i++){
        currentNoteDivs[i] = <div key={i} className="guitar-chord-note-div">{chordNotes[i]}</div>
    }

    let positionOptions = [];
    if(props.positions.all.length===0){
        positionOptions.push(<option key ={0} value={0}>None</option>)
    }
    else{
        for(let i=0;i<props.positions.all.length;i++){
            if(i===props.positions.current){
                positionOptions.push(<option key ={i} value={i} >{props.positions.all[i]}</option>)
            }
            else{
                positionOptions.push(<option key ={i} value={i}>{props.positions.all[i]}</option>)
            }
            
        }
    }

    let fretNumbering = [];
    for(let i=0;i<props.fretNames.length;i++){
        fretNumbering.push(<div key={i} className="guitar-fret-name">{props.fretNames[i]}</div>)
    }
    return <div id="guitar-container">
        <Tuning currentMode={props.currentMode} numStrings={props.numStrings} tuning={props.tuning} updateTuning={props.onTuningUpdate}></Tuning>
            <div id="guitar-string-container">
                {guitarStrings}
                <div id="guitar-fret-names-main-div">{fretNumbering}</div>
                </div>
            <div id="guitar-tune-container">
                {currentNoteDivs}
            </div>
            <div id="guitar-chord-positions-div">
                <div id="guitar-positions-select-title">Available Positions</div>
                <select id="guitar-positions-select" value={props.positions.current} onChange={(e)=>props.onPositionChange(e.target.value)}>{positionOptions}</select>
            </div>
        </div>
};

export default Guitar;