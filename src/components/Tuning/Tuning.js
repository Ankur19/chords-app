import React from "react";
import "./Tuning.css"

function Tuning(props){
    //props.numStrings: --provides the number of strings
    //props.tuning: --provides what tuning to show
    //props.updateTuning --should update tuning if it is valid
    let noteInputClassName="tuning-note-input";
    if(props.currentMode==="dark"){
        noteInputClassName+= " tuning-note-input-dark"
    }
    let notesArray = new Array(props.numStrings);
    for(let i=0;i<props.numStrings;i++){
        notesArray[i] = <input key={i} type="text" className={noteInputClassName} value={props.tuning[i]} onChange={e=>{if(e.target.value !==""){props.updateTuning(e.target.value, i)}}}></input>
    }
return <div id="tuning-main-container"><p>Tuning</p><div id="tuning-main-div">{notesArray}</div></div>;
}

export default Tuning;