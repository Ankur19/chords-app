import React, {useState} from "react";
import "./Body.css";
import Guitar from "../Guitar/Guitar";
import OptionSelector from "../OptionSelector/OptionSelector";
import OptionSlider from "../OptionSlider/OptionSlider";


const notes = ["A", "A#", "B", "C", "C#", "D", "D#", "E", "F", "F#", "G", "G#"];
const scales = ["Maj"];
const stringNumbers = ["3","4", "5", "6", "7", "8"];
const numberFrets = ["2","3","4","5","6"];
const startFretNumbers = [1,2,3,4,5,6,7,8,9,10,11];
const defaultTuning = ["E", "A", "D", "G", "B", "E"];

function Body(props){

    //props.currentMode  - valid values (light && dark)
    let mainBodyClass="body-main-div body-dark";
    if(props.currentMode==="light"){
        mainBodyClass="body-main-div body-light";
    }

    //states - chord state is to store the current chord
    const [chord, setChord] = useState(0);
    const [scale, setScale] = useState(0);
    const [numStrings, setNumStrings] = useState(3);
    const [numFrets, setNumFrets] = useState(2);
    const [startFret, setStartFret] = useState(0);
    const [tuning, setTuning] = useState(defaultTuning);

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
    function stringNumChangeHandler(index){
        if(index !==numStrings){
            setNumStrings(index);
        }
    }
    function numFretsChangeHandler(index){
        if(index !==numFrets){
            setNumFrets(index);
        }
    }
    function startFretChangeHandler(index){
        if(index !==startFret){
            setStartFret(index);
        }
    }

    let selectors = [];
    selectors.push(<OptionSlider key={0} currentMode={props.currentMode} sliderName = "Num Strings" sliderOptions={stringNumbers} currentSelected={numStrings} onOptionChange={stringNumChangeHandler}></OptionSlider>);
    selectors.push(<OptionSelector key={1} currentMode={props.currentMode} selectorName = "Chord" selectorOptions={notes} currentSelected={chord} onOptionChange={chordChangeHandler}></OptionSelector>);
    selectors.push(<OptionSelector key={2} currentMode={props.currentMode} selectorName = "Scale" selectorOptions={scales} currentSelected={scale} onOptionChange={scaleChangeHandler}></OptionSelector>);
    selectors.push(<OptionSlider key={3} currentMode={props.currentMode} sliderName = "Num Frets" sliderOptions={numberFrets} currentSelected={numFrets} onOptionChange={numFretsChangeHandler}></OptionSlider>);
    
    
    return <div className={mainBodyClass}>
        <div id="body-main-selectors-container">{selectors}</div>
        <Guitar tuning={tuning} chord={notes[chord]} scale={scales[scale]} numStrings={parseInt(stringNumbers[numStrings])} numFrets={parseInt(numberFrets[numFrets])} startFret={startFretNumbers[startFret]}></Guitar>
        <OptionSlider currentMode={props.currentMode} sliderName = "Start Fret" sliderOptions={startFretNumbers} currentSelected={startFret} onOptionChange={startFretChangeHandler}></OptionSlider>
    </div>
}

export default Body;