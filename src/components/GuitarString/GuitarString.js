import React from "react";
import "./GuitarString.css";

function GuitarString(props){
    //props.numFrets - will be used to determine how many frets to show
    //props.currentSelectedNote --will show which note is selected
    //props.fretNotes --will provide the notes currently present in the guitar string

    let selected = <div className="selected-fret-line"><hr className="guitar-string-hr-selected-left"></hr><div className="selected-fret-circle-parent"><div className="selected-fret-circle"></div></div><hr/></div>;

    let stringDivs = new Array(props.numFrets);
    for(let i=0;i<=props.numFrets;i++){
        if(i===0){
            if(props.fretNotes[i]===props.currentSelectedNote){
                stringDivs[i] = <div key = {i} className="guitarstring-fret guitarstring-first selected-fret-line"><div className="selected-fret-circle-open-container"><div className="selected-fret-circle-open"></div></div><hr/></div>;
            }
            else{
                stringDivs[i] = <div key = {i} className="guitarstring-fret guitarstring-first selected-fret-line"><p>X</p><hr/></div>;
            }
            
        }
        else if(i===props.numFrets){
            if(props.fretNotes[i]===props.currentSelectedNote){
                stringDivs[i] = <div key = {i} className="guitarstring-fret guitarstring-last">{selected}</div>;
            }
            else{
                stringDivs[i] = <div key = {i} className="guitarstring-fret guitarstring-last"><hr/></div>;
            }
        }
        else{
            if(props.fretNotes[i]===props.currentSelectedNote){
                stringDivs[i] = <div key = {i} className="guitarstring-fret">{selected}</div>;
            }
            else{
                stringDivs[i] = <div key = {i} className="guitarstring-fret"><hr/></div>;
            }
        }
    }
return <div className="guitarstring">{stringDivs}</div>
}
export default GuitarString;