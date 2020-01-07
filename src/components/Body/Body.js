import React, {useState} from "react";
import "./Body.css";
import Guitar from "../Guitar/Guitar";
import OptionSelector from "../OptionSelector/OptionSelector";
import OptionSlider from "../OptionSlider/OptionSlider";
const guitarChords = require("../../guitarchords_custom/guitarchords.node");

const notes = ["A", "A#", "B", "C", "C#", "D", "D#", "E", "F", "F#", "G", "G#"];
const scales = ["Maj"];
const stringNumbers = ["3","4", "6","8"];

function Body(props){

    //props.currentMode  - valid values (light && dark)
    let mainBodyClass="body-main-div body-dark";
    if(props.currentMode==="light"){
        mainBodyClass="body-main-div body-light";
    }

    //states - chord state is to store the current chord
    const [chord, setChord] = useState(0);
    const [scale, setScale] = useState(0);
    const [numStrings, setNumStrings] = useState(0);

    function chordChangeHandler(index){
        if(index !==chord){
            setChord(index);
        }
    }
    function scaleChangeHandler(index){
        if(index !==scale){
            setScale(index);
        }
    }

    let selectors = [];
    selectors.push(<OptionSlider key={0} currentMode={props.currentMode} sliderName = "Num Strings" sliderOptions={stringNumbers} currentSelected={numStrings}></OptionSlider>)
    selectors.push(<OptionSelector key={1} currentMode={props.currentMode} selectorName = "Chord" selectorOptions={notes} currentSelected={chord} onOptionChange={chordChangeHandler}></OptionSelector>);
    selectors.push(<OptionSelector key={2} currentMode={props.currentMode} selectorName = "Scale" selectorOptions={scales} currentSelected={scale} onOptionChange={scaleChangeHandler}></OptionSelector>);
    return <div className={mainBodyClass}>
        <div id="body-main-selctors-container">{selectors}</div>
        <Guitar numStrings={6} numFrets={5}></Guitar>
    </div>
}

export default Body;