import React from "react";
import "./GuitarString.css";

function GuitarString(props){
    //props.numFrets - will be used to determine how many frets to show
    //props.stringNum - will be used to determine the height of the string. 1st string always has a higher diameter
    let stringDivs = new Array(props.numFrets);

    let selected = <div className="selected-fret-line"><hr/><div className="selected-fret-circle-parent"><div className="selected-fret-circle"></div></div><hr/></div>;

    for(let i=0;i<props.numFrets;i++){
        if(i===0){
        stringDivs[i] = <div key = {i} className="guitarstring-fret guitarstring-first">{selected}</div>;
        }
        else if(i+1===props.numFrets){
            stringDivs[i] = <div key = {i} className="guitarstring-fret guitarstring-last"><hr/></div>;
        }
        else{
            stringDivs[i] = <div key = {i} className="guitarstring-fret"><hr/></div>;
        }
    }
return <div className="guitarstring">{stringDivs}</div>
}
export default GuitarString;