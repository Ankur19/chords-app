import React from "react";

function Tuning(props){
    //props.numStrings: --provides the number of strings
    //props.tuning: --provides what tuning to show
    //props.updateTuning --should update tuning if it is valid

    let notesArray = new Array(props.numStrings);
    for(let i=0;i<props.numStrings;i++){
        notesArray[i] = <input type="text" className="tuning-note-input" value={props.tuning[i]} onChange={e=>{props.updateTuning(e.target.value, i)}}></input>
    }
return <div id="tuning-main-div">{notesArray}</div>
}