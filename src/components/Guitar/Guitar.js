import React, {useState} from "react";
import "./Guitar.css";
import GuitarString from "../GuitarString/GuitarString";
import guitarChords from "guitarchords";


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
    let tuning = new guitarChords.Tuning(...props.tuning);
    let scaleUsed = "";
    if(props.scale==="Maj"){
        scaleUsed = "MAJOR"
    }
    let chordPositions = guitarChords.getPositions(tuning, props.chord, scaleUsed, props.startFret, props.numFrets);

    //use state for all the positions available
    const[positions, setPositions] = useState({current: 0, all:[...new Set(chordPositions)]});
    function positionChangeHandler(index){
        let positionsCopy = [...positions.all];
        setPositions({current:index, all:positionsCopy});
    }
    let chordNotes = new Array(props.numStrings);
    if(positions.all.length>0){
        chordNotes = positions.all[positions.current].split("-");
    }
    else{
        for(let i=0;i<props.numStrings;i++){
            chordNotes[i] = "X";
        }
    }

    let guitarStrings = new Array(props.numStrings);
    for(let i=0;i<props.numStrings;i++){
        let fretNotes = getFretNotes(props.tuning[i], props.startFret, props.numFrets)
        guitarStrings[i] = <GuitarString key={i} numFrets = {props.numFrets} currentSelectedNote={chordNotes[i]} fretNotes={fretNotes}></GuitarString>
    }

    let currentNoteDivs = new Array(props.numStrings);

    for(let i=0;i<chordNotes.length;i++){
        currentNoteDivs[i] = <div key={i} className="guitar-chord-note-div">{chordNotes[i]}</div>
    }

    let positionOptions = [];
    if(positions.all.length===0){
        positionOptions.push(<option key ={0} value={0}>None</option>)
    }
    else{
        for(let i=0;i<positions.all.length;i++){
            if(i===positions.current){
                positionOptions.push(<option key ={i} value={i} >{positions.all[i]}</option>)
            }
            else{
                positionOptions.push(<option key ={i} value={i}>{positions.all[i]}</option>)
            }
            
        }
    }
    return <div id="guitar-container">
            <div id="guitar-string-container">{guitarStrings}</div>
            <div id="guitar-tune-container">
                {currentNoteDivs}
            </div>
            <div id="guitar-chord-positions-div">
                <div>Available positions</div>
                <select id="guitar-positions-select" value={positions.current} onChange={(e)=>positionChangeHandler(e.target.value)}>{positionOptions}</select>
            </div>
        </div>
};

export default Guitar;